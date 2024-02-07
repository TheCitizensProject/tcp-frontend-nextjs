import React from "react";
import Ferry from "./component/Ferry";
import Trains from "./component/Trains";
import Tram from "./component/Tram";
import TransitHeader from "./component/TransitHeader";
import revalidateTransitData from "@/app/serverActions";
import RevalidatorHOC from "@/app/component/Revalidator";
import { BiError } from "react-icons/bi";

/**
 * Happy path works.
 * Needs to handle error path.
 */

type TransitTimeDataType = Array<string | number>;
export type TransitDataType = {
  error: unknown;
  data: {
    data: {
      ferry_times: TransitTimeDataType[];
      both_directions: TransitTimeDataType[];
      tram_times: TransitTimeDataType[];
    };
    detail: "Not Found";
  }[];
};

export type TransitProps = {
  transitData: TransitDataType;
};
const fetchTransitData = async () => {
  try {
    // throw new Error()
    const urls = [
      `${process.env.TRANSIT_API_URL}/get-ferry-time`,
      `${process.env.TRANSIT_API_URL}/get-station-time-unified/B06`,
      `${process.env.TRANSIT_API_URL}/get-tram-time`,
    ];

    const responses = await Promise.all(
      urls.map((url) => fetch(url, { next: { tags: ["transit-data"] } }))
    );
    const data = await Promise.all(
      responses.map((response) => response.json())
    );

    return { data, error: null };
  } catch (error) {
    console.error("error fetching transit data: ", error);
    throw new Error("error fetching transit data");
  }
};

// should display a refresh button with an outlined border. It should call the revalidateTransitData() function
const Page = async () => {
  const transitData = await fetchTransitData();

  return (
    <div className="mx-4 mt-10">
      <RevalidatorHOC revalidateFuncion={revalidateTransitData}>
        <TransitHeader />
        <ul>
          <Ferry transitData={transitData as TransitDataType}/>
          <Trains transitData={transitData as TransitDataType}/>
          <Tram transitData={transitData as TransitDataType}/>
        </ul>
      </RevalidatorHOC>
    </div>
  );
};

export default Page;
