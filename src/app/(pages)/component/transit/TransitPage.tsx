'use client';
import React, { useEffect, useState } from "react";
import Ferry from "./Ferry";
import Trains from "./Trains";
import Tram from "./Tram";
import { TransitDataType } from "@/app/utils/global-types";

const TransitPage = ({ _transitData }: { _transitData: TransitDataType}) => {
  const [transitData, setTransitData] = useState<TransitDataType>(_transitData);

  useEffect(() => {
    const fetchData = async (): Promise<TransitDataType> => {
      try {
        const response = await fetch(
          "/api/getTransitData",
          { cache: "no-store" }
        );
        const responseData = await response.json();

        return {
          data: responseData,
        };
      } catch (error) {
        console.error("error: ", error);
        return {
          data: null,
          error,
        };
      }
    };

    const min = 60;
    const refreshWindow = (1 / 2) * min;
    const interval = refreshWindow * 1000; //1000 is the constant
    const intervalId = setInterval(() => {
      fetchData().then((data: TransitDataType) => {
        if(data.data === null) return;

        setTransitData(data);
      });
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <ul>
      <Trains transitData={transitData}/>
      <Ferry transitData={transitData}/>
      <Tram transitData={transitData}/>
    </ul>
  );
};

export default TransitPage;