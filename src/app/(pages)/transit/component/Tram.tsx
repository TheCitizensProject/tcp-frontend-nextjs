"use client";
import React from "react";
import TransitCard from "./TransitCard";
import { TransitProps, TransitTimeDataType } from "../../../utils/global-types";

function Tram({ transitData }: TransitProps) {
  const { data: tramData, error } = transitData;
  const tramError = tramData[2].detail || null;
  /*
    The Train Module.

    This interface is responsible for displaying all tram times by querying
    the server side endpoints.

    TODO: 
      - Handle error path. 
        - Use the deconstructed object item from transitData.
    */

  return (
    <>
      {tramData[2].data.tram_times.map((items: TransitTimeDataType) => (
        <li key={items[1] + '' + items[0]}>
          {tramError && <p>Error: {tramError}</p>}
          <TransitCard 
            time={items[1]} 
            direction={items[0] as string} 
            train="tram" 
          />
        </li>
      ))}
    </>
  );
}

export default Tram;
