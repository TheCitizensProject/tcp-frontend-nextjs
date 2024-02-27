"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { Event } from "@/API";

interface Props {
  event: Event;
}

export default function EventComponent({ event }: Props) {
  const router = useRouter();
  return (
    <div
      className="p-4 flex flex-row space-x-2"
      onClick={() => {
        router.push(`/events/${event.id}`);
      }}
    >
      <div>
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <Image
            alt={event.eventDescription}
            src={event.eventImage}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="space-y-2 w-full">
        <h2 className="font-bold text-lg leading-6">{event.eventName}</h2>
        <p className="line-clamp-4">{event.eventDescription}</p>
      </div>
      <div className="m-auto">
        <IoIosArrowForward
          className="w-8 h-8"
          onClick={() => {
            router.push(`/events/${event.id}`);
          }}
        />
      </div>
    </div>
  );
}
