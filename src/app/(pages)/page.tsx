import React from "react";
import { TransitDataType } from "@/app/utils/global-types";
import TransitPage from "./component/transit/TransitPage";
import { fetchTransitData } from "../utils/transit";

const Page = async () => {
  const transitData = await fetchTransitData();

  return (
    <div>
      <div className="border-y border-[#E8E8E8] px-4 py-2">
        <h2 className="font-bold text-lg uppercase">Transit</h2>
      </div>
      <TransitPage _transitData={transitData as TransitDataType}/>
    </div>
  );
};

export default Page;