import { EventType } from "../../events/component/EventComponent";

export const events: EventType[] = [
    {
      id: 1,
      title: "Halloween Extravaganza",
      img: "/halloween.jpeg",
      eventDate: new Date(),
      description: `Costume party extravaganza including: carnival games,
       rides, giveaways, food, contests, music, and more!`,
    },
    {
      id: 2,
      title: "The Sanctuary",
      img: "/island-holiday.png",
      eventDate: new Date(2024, 2, 12),
      description: `A series of films to be shown on a 40 foot screen at Southpoint Park;
       includes trivia contests, food vendors, and music!`,
    },
  ];