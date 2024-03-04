import React from "react";
import Ferry from "./component/transit/Ferry";
import Trains from "./component/transit/Trains";
import Tram from "./component/transit/Tram";
import TransitHeader from "./component/transit/TransitHeader";
import revalidateTransitData from "@/app/actions/revalidateTransitData";
import RevalidatorHOC from "@/app/component/Revalidator";
import { TransitDataType } from "@/app/utils/global-types";

/**
 * Happy path works. 
 * Error paths:
 *   - Ferry is handled by api call.
 *   - There is a catch all error page in case API call fails.
 * 
 * TODO:
 *   - Need to replicate for Tram and Trains?
 */

const fetchTransitData = async () => {
  try {
    const urls = [
      `${process.env.TRANSIT_API_URL}/get-ferry-time`,
      `${process.env.TRANSIT_API_URL}/get-station-time-unified/B06`,
      `${process.env.TRANSIT_API_URL}/get-tram-time`,
    ];

    const responses = await Promise.all(
      urls.map(url => fetch(url, { next: { tags: ['transit-data'] }}))
    );
    const data = await Promise.all(responses.map(response => response.json()));

    return { data, error: null };
  } catch (error) {
    console.error("error fetching transit data: ", error);
    throw new Error("error fetching transit data");
  }
};

const Page = async () => {
  const transitData = await fetchTransitData();
  
  return (
    <div>
      <div className="my-2 border-y border-[#E8E8E8] px-4 py-2">
        <h2 className="font-bold text-lg uppercase">Transit</h2>
      </div>
      <RevalidatorHOC revalidateFuncion={revalidateTransitData}>
        <ul>
          <Trains transitData={transitData as TransitDataType}/>
          <Ferry transitData={transitData as TransitDataType}/>
          <Tram transitData={transitData as TransitDataType}/>
        </ul>
      </RevalidatorHOC>
    </div>
  );
};

export default Page;