import { ServiceType } from "../page";
import Image from "next/image";
export default function ServiceComponent({
  service,
}: {
  service: ServiceType;
}) {
  return (
    <div className="ml-4">
      <h6 className="font-bold mb-4 mt-4">{service.title}</h6>
      <div className="flex flex-wrap">
        {service.services.map((serv) => (
          <div className="flex items-center mb-4 w-1/2 pr-1" key={serv.label}>
            <Image
              alt={serv.label}
              src={serv.img}
              width={50}
              height={50}
              className="rounded-full mr-4"
            />
            <span>{serv.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
