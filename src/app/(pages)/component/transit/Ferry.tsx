"use client";
import React from "react";
import TransitCard from "./TransitCard";
import { TransitProps, TransitTimeDataType } from "../../../utils/global-types";

function Ferry({ transitData }: TransitProps) {
  const { data, error } = transitData;
  const ferryError = data?.[0].detail || null;
  /*
    The Ferry Module.

    This interface is responsible for displaying all ferry times by querying
    the MTA server side endpoints.
    */

  return (
    <>
      {data?.[0]?.data?.ferry_times_static 
      ? data?.[0]?.data?.ferry_times_static.map((items: TransitTimeDataType) => (
        <li key={items[1] + '' + items[3]}>
          {ferryError && <p>Error: {ferryError}</p> }
          <TransitCard 
            time={items[3] as number} 
            direction={items[1] as string} 
            train="ferry" 
            alertLink="https://www.ferry.nyc/service-alerts/"
          />
        </li>
      ))
      : data?.[0]?.data?.ferry_times.map((items: TransitTimeDataType) => (
        <li key={items[1] + '' + items[3]}>
          {ferryError && <p>Error: {ferryError}</p> }
          <TransitCard time={items[3] as number} direction={items[1] as string} train="ferry" />
        </li>
      ))}
    </>
  );
}

export default Ferry;
