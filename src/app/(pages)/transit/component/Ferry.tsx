"use client";
import React from "react";
import TransitCard from "./TransitCard";
import { TransitProps } from "../page";

function Ferry({ transitData }: TransitProps) {
  const { data, error } = transitData;
  const ferryError = data[0].detail || null;
  /*
    The Ferry Module.

    This interface is responsible for displaying all ferry times by querying
    the MTA server side endpoints.

    TODO: 
      - Handle error path. 
        - Use the deconstructed object item from transitData.
    */

  return (
    <>
      {data[0]?.data?.ferry_times.map((items: any) => (
        <li key={items[1] + items[3]}>
          {ferryError && <p>Error: {ferryError}</p> }
          <TransitCard time={items[3]} direction={items[1]} train="ferry" />
        </li>
      ))}
    </>
  );
}

export default Ferry;
