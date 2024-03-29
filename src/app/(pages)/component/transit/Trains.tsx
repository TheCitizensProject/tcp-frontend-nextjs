"use client";
import React from "react";
import TransitCard from "./TransitCard";
import { TransitProps, TransitTimeDataType } from "../../../utils/global-types";

function Trains({ transitData }: TransitProps) {
  const { data: trainData, error } = transitData;
  const trainError = trainData?.[1].detail || null;
  /*
    The Train Module.

    This interface is responsible for displaying all train times by querying
    the MTA server side endpoints.

        -------------------------------------------------------
        |  Station Name                                        |
        |                          |                           |
        |  F  NorthBound   2 mins  |   F  SouthBound   2 mins  |
        |  F  NorthBound   12 mins |   F  SouthBound   20 mins |
        |  F  NorthBound   23 mins |   F  SouthBound   25 mins |
        |                          |                           |
        -------------------------------------------------------
      TODO: 
      - Handle error path. 
        - Use the deconstructed object item from transitData.
    */

  return (
    <>
      {trainData?.[1]?.data?.both_directions.map((items: TransitTimeDataType) => (
        <li key={items[0] + '' + items[1]}>
          {trainError && <p>Error: {trainError}</p> }
          <TransitCard
            train={items[0] as string}
            time={items[1] as number}
            direction={items[2] as string}
          />
        </li>
      ))}
    </>
  );
}

export default Trains;
