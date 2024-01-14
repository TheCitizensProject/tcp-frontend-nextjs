import Image from "next/image";
import { IconType } from "react-icons";
import { FiThumbsDown, FiThumbsUp } from "react-icons/fi";
import { services } from "./data/services";
import { events } from "./data/events";
import EventComponent from "../events/component/EventComponent";
import ServiceComponent from "./components/ServiceComponent";

export type ServiceType = {
  icon: IconType;
  title: string;
};
const page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold mx-4">Organization A</h1>
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">
        Visitor Feedback
      </div>
      <div className="flex m-4">
        <div className="flex items-center mr-4">
          <FiThumbsUp className="w-8 h-8" />
          <span className="ml-1 text-xl">83%</span>
        </div>
        <div className="flex items-center ">
          <FiThumbsDown className="w-8 h-8" />
          <span className="ml-1 text-xl">17%</span>
        </div>
      </div>
      <div className="relative w-full h-40 mt-4">
        <Image src={"/feedback.png"} alt="feedback" fill />
      </div>
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">Your Services</div>
      {services.map((serv) => (
        <ServiceComponent key={serv.title} service={serv} />
      ))}
      <div className="bg-stone-200 py-2 px-4 text-xl mt-4">Your Events</div>
      {events.map((event) => (
        <EventComponent key={event.id} event={event} />
      ))}
    </div>
  );
};

export default page;
