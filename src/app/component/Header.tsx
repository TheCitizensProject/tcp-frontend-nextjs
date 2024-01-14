"use client";
import React from "react";
import HeaderInfo from "./HeaderInfo";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Header() {
  return (
    <div data-testid="headerComponent">
      <ProjectTitle />
      <HeaderInfo />
      {/* <div className="flex items-center justify-between px-4 my-4 py-2 gap-4 border-b">
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdOutlineMiscellaneousServices className="w-10 h-10 mb-2" />
          <span className="font-semibold">Services</span>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <MdOutlineDirectionsTransit className="w-10 h-10 mb-2" />
          <span className="font-semibold">Transit</span>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer w-1/4 grow">
          <TbTableOptions className="w-10 h-10 mb-2" />
          <span className="font-semibold">Accessories</span>
        </div>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <VscFeedback className="w-10 h-10 mb-2" />
          <span className="font-semibold">Feedback</span>
        </div>
      </div> */}
    </div>
  );
}

export function ProjectTitle() {
  const router = useRouter();
  return (
    <div className="flex mx-4 mt-4">
      <Image
        data-testid="logo"
        src={"/tcp-icon.png"}
        width={30}
        height={30}
        alt="The Citicen Project logo"
        onClick={() => {
          router.push("/");
        }}
      />
      <div
        onClick={() => {
          router.push("/");
        }}
        data-testid="projectTitle"
        className="text-2xl font-bold ml-2"
      >
        ROOSEVELT ISLAND
      </div>
    </div>
  );
}
