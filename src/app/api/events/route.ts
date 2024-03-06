import { NextResponse } from "next/server";

import { ModelSortDirection } from "@/API";
import { taskSchema } from "@/app/api/events/schemas";
import amplifyServerClient from "@/app/utils/amplify-server-client";
import extractAndConvertEventDateToISOString from "@/app/utils/extract-and-convert-event-datetime-to-iso-string.ts";
import generateNewYorkTime from "@/app/utils/generate-ny-time";
import { createEvent } from "@/graphql/mutations";
import { eventsByTypeAndEventDate, listEvents } from "@/graphql/queries";

// GET endpoint: retrieve all events on/after the request date
export const GET = async () => {
  const result = await amplifyServerClient.graphql({
    query: eventsByTypeAndEventDate,
    variables: {
      type: "Event",
      eventDate: {
        ge: generateNewYorkTime().format("yyyy-MM-DD"),
      },
      sortDirection: ModelSortDirection.ASC,
    },
  });

  if (result.errors) return NextResponse.json({ message: "Something went wrong." }, { status: 400 });

  return NextResponse.json(result.data.eventsByTypeAndEventDate.items);
};

// POST endpoint: create new event (if not already existed) in DDB, triggered by BrowseAI webhook
export const POST = async (request: Request) => {
  const body = await request.json();
  const parsingResult = taskSchema.safeParse(body);
  if (!parsingResult.success) return NextResponse.json({ message: "Invalid event." }, { status: 400 });

  const event = parsingResult.data.task.capturedTexts;

  const existingEvents = await amplifyServerClient.graphql({
    query: listEvents,
    variables: {
      filter: {
        eventName: {
          eq: event.eventName,
        },
        eventDatetimeRaw: {
          eq: event.eventDatetime,
        },
        eventDescription: {
          eq: event.eventDescription,
        },
      },
    },
  });
  if (existingEvents.errors) return NextResponse.json({ message: "Something went wrong." }, { status: 400 });
  if (existingEvents.data.listEvents.items.length > 0)
    return NextResponse.json({ message: "Event already exists." }, { status: 400 });

  const newEvent = await amplifyServerClient.graphql({
    query: createEvent,
    variables: {
      input: {
        type: "Event",
        eventName: event.eventName,
        eventDate: extractAndConvertEventDateToISOString(event.eventDatetime),
        eventDatetimeRaw: event.eventDatetime,
        eventDescription: event.eventDescription,
        eventImage: event.eventImage,
        eventLocation: event.eventLocation.replace("Directions", ""), // BrowseAI cannot strip out the word "Directions", so have to do it here
      },
    },
  });

  if (newEvent.errors) return NextResponse.json({ message: "Something went wrong." }, { status: 400 });

  return NextResponse.json(newEvent.data.createEvent);
};
