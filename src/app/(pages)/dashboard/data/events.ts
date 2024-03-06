import { Event as EventType } from "@/API";

export const events: EventType[] = [
    {
      __typename: "Event",
      id: "1",
      eventName: "Halloween Extravaganza",
      eventDatetimeRaw: String(new Date()),
      eventDate: String(new Date()),
      eventLocation: "Southpoint Park",
      eventDescription: `Costume party extravaganza including: carnival games, rides, giveaways, food, contests, music, and more!`,
      eventImage: "/halloween.jpeg",
      type: "event",
      createdAt: String(new Date()),
      updatedAt: String(new Date()),
    },
    {
      __typename: "Event",
      id: "2",
      eventName: "The Sanctuary",
      eventDatetimeRaw: String(new Date(2024, 2, 12)),
      eventDate: String(new Date(2024, 2, 12)),
      eventLocation: "Southpoint Park",
      eventDescription: `A series of films to be shown on a 40 foot screen at Southpoint Park; includes trivia contests, food vendors, and music!`,
      eventImage: "/island-holiday.png",
      type: "event",
      createdAt: String(new Date()),
      updatedAt: String(new Date()),
    },
  ];