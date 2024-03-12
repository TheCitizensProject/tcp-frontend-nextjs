'use client';
import React, { useEffect, useState } from "react";
import Ferry from "./Ferry";
import Trains from "./Trains";
import Tram from "./Tram";
import { TransitDataType } from "@/app/utils/global-types";
import { createPortal } from "react-dom";
import InternetConnectionAlert from "@/app/component/InternetConnectionAlert";

const TransitPage = ({ _transitData }: { _transitData: TransitDataType}) => {
  const [transitData, setTransitData] = useState<TransitDataType>(_transitData);
  const [showAlert, setShowAlert] = useState(false);
  const [DOMloaded, setDOMloaded] = useState(false);

  useEffect(() => {
    if(!DOMloaded) setDOMloaded(true);
    const fetchData = async (): Promise<TransitDataType> => {
      try {
        const response = await fetch(
          "/api/getTransitData",
          { next: { revalidate: 30 } }
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
    
    const intervalId = setInterval(() => {
      fetchData().then((data: TransitDataType) => {
        if(window.navigator.onLine) {
          setShowAlert(() => false);
        } else {
          setShowAlert(() => true);
        }

        if(data.data === null) return setShowAlert(() => true);

        if(showAlert) setShowAlert(() => false);
        setTransitData(data);
      });
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ul>
      {DOMloaded && createPortal(
        <InternetConnectionAlert showAlert={showAlert} />, 
        document.getElementById("top-page-alert") as HTMLElement
      )}
      <Trains transitData={transitData}/>
      <Ferry transitData={transitData}/>
      <Tram transitData={transitData}/>
    </ul>
  );
};

export default TransitPage;