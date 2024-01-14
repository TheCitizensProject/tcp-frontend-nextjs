import React from "react";

import SearchBox from "./components/SearchBox";
import ServiceComponent from "./components/ServiceComponent";

type Service = {
  img: string;
  label: string;
};
export type ServiceType = {
  title: string;
  services: Service[];
};

const services: ServiceType[] = [
  {
    title: "Restaurants",
    services: [
      {
        img: "/e-letter.png",
        label: "Oleato",
      },
      {
        img: "/e-letter.png",
        label: "Hot Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Hot Teas",
      },
      {
        img: "/e-letter.png",
        label: "Hot Drinks",
      },
      {
        img: "/e-letter.png",
        label: "Frappucino* Blended Beverages",
      },
      {
        img: "/e-letter.png",
        label: "Cold Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Iced Teas",
      },
      {
        img: "/e-letter.png",
        label: "Cold Drinks",
      },
    ],
  },
  {
    title: "Groceries",
    services: [
      {
        img: "/e-letter.png",
        label: "Oleato",
      },
      {
        img: "/e-letter.png",
        label: "Hot Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Hot Teas",
      },
      {
        img: "/e-letter.png",
        label: "Hot Drinks",
      },
      {
        img: "/e-letter.png",
        label: "Frappucino* Blended Beverages",
      },
      {
        img: "/e-letter.png",
        label: "Cold Coffees",
      },
      {
        img: "/e-letter.png",
        label: "Iced Teas",
      },
      {
        img: "/e-letter.png",
        label: "Cold Drinks",
      },
    ],
  },
];

const page = () => {
  return (
    <div>
      <SearchBox />
      <div className="mt-4">
        {services.map((service) => (
          <ServiceComponent key={service.title} service={service} />
        ))}
      </div>
    </div>
  );
};

export default page;
