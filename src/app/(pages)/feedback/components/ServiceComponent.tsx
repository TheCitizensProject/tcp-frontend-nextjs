import { ServiceType } from "../page";

import { IoIosArrowForward } from "react-icons/io";

export default function ServiceComponent({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <div
      className="p-4 flex justify-between items-center
      border-b border-stone-400  py-8"
    >
      <div className="flex items-center">
        <div>service.icon</div>

        <h1 className="font-bold text-xl ml-4">{service.title}</h1>
      </div>
      <IoIosArrowForward className="w-8 h-8" />
    </div>
  );
}
