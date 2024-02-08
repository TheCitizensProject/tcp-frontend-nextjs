"use client";
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import InternetConnectionAlert from "./InternetConnectionAlert";

type RevalidatorHOCProps = {
  revalidateFuncion: () => void;
  children: React.ReactNode;
}
function RevalidatorHOC({ revalidateFuncion, children }: RevalidatorHOCProps) {
  const [DOMloaded, setDOMloaded] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  
  useEffect(() => {
    if(!DOMloaded) setDOMloaded(true);

    const updateViews = async () => {
      if(window.navigator.onLine) {        
        if (showAlert) setShowAlert(() => false);
        
        await revalidateFuncion();
      } else {
        console.error("no internet connection");
        setShowAlert(true);
      }
    }

    const min = 60;
    const refreshWindow = (1 / 2) * min;
    const interval = refreshWindow * 1000; //1000 is the constant
    const intervalId = setInterval(updateViews, interval);
    
    updateViews();

    // Cleanup to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      {children}
      {DOMloaded && createPortal(
        <InternetConnectionAlert showAlert={showAlert} />, 
        document.getElementById("top-page-alert") as HTMLElement
      )}
    </>
  );
}

export default RevalidatorHOC;
