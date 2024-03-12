import React from "react";
import HeaderInfo from "./HeaderInfo";
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <div data-testid="headerComponent">
      <Link href={"/"} className="flex mx-4 mt-4 max-sm:mr-0 mb-2">
        <Image
          data-testid="logo"
          src={"/favicon-32x32.png"}
          width={33}
          height={34}
          alt="The Citicen Project logo"
          className="scale-125 -translate-y-[2px]"
        />
        <h1
          data-testid="projectTitle"
          className="text-2xl font-bold ml-2 max-sm:text-lg max-sm:ml-1"
        >
          ROOSEVELT ISLAND
        </h1>
      </Link>
      {/* <HeaderInfo /> */}
    </div>
  );
}
