import Image from "next/image";
import amplifyServerClient from "@/app/utils/amplify-server-client";
import { getEvent } from "@/graphql/queries";

interface Props {
  id: string;
}

export default async function EventDetailsComponent({ id }: Props) {
  const event = await amplifyServerClient
    .graphql({
      query: getEvent,
      variables: {
        id,
      },
    })
    .then((response) => response.data.getEvent);

  if (event == null)
    return (
      <div className="px-4">
        <p>Event doesn't exist.</p>
      </div>
    );

  return (
    <div className="space-y-4">
      <div className="px-4">
        <p className="text-xl font-semibold">{event.eventName}</p>
      </div>
      <div className="border border-1" />
      <div className="px-4 space-y-4">
        <div>
          <Image
            alt={event.eventName}
            src={event.eventImage}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-contain"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">Description</p>
          <p>{event.eventDescription}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Date</p>
          <p>{event.eventDatetimeRaw}</p>
        </div>
        <div>
          <p className="text-lg font-semibold">Location</p>
          <p>{event.eventLocation}</p>
        </div>
      </div>
    </div>
  );
}
