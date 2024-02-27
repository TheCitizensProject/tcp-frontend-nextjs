import { Fragment } from "react";
import moment from "moment";
import { Event } from "@/API";
import amplifyServerClient from "@/app/utils/amplify-server-client";
import generateNewYorkTime from "@/app/utils/generate-ny-time";
import EventComponent from "./component/EventComponent";
import { eventsByTypeAndEventDate } from "@/graphql/queries";

const Page = async () => {
  const events = await amplifyServerClient
    .graphql({
      query: eventsByTypeAndEventDate,
      variables: {
        type: "Event",
        eventDate: {
          ge: generateNewYorkTime().format("yyyy-MM-DD"),
        },
      },
    })
    .then((response) => response.data.eventsByTypeAndEventDate.items);

  const eventsByEventDate = Object.entries(
    events.reduce((acc, event) => {
      const eventDate = event.eventDate;
      if (!acc[eventDate]) {
        acc[eventDate] = [];
      }
      acc[eventDate].push(event);
      return acc;
    }, {} as { [key: string]: Event[] })
  ).sort((e1, e2) => new Date(e1[0]).getTime() - new Date(e2[0]).getTime());

  return (
    <div>
      {eventsByEventDate.map(([date, events]) => {
        const eventDate = moment(date);
        return (
          <div key={date}>
            <div className="py-2 px-2 bg-stone-200 font-semibold">
              {eventDate.isSame(moment(), "date") ? "Today" : eventDate.format("dddd, MMM Do, YYYY")}
            </div>
            <ul>
              {events.map((event, index) => (
                <li key={event.eventName + event.eventDate}>
                  {index != 0 && <div className="border border-1 w-full" />}
                  <EventComponent event={event} />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
