"use client";
import React from "react";
import TransitCard from "./TransitCard";
import { TransitProps } from "../page";

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
    <div>
      {tramError && <p>Error: {tramError}</p>}
      {tramData[2].data.tram_times.map((items: any) => (
        <TransitCard 
          key={items[1] + items[0]} 
          time={items[1]} 
          direction={items[0]} 
          train="tram" 
        />
      ))}
    </div>
  );
}

export default Tram;
