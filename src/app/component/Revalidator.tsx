"use client";
import React, { useEffect } from "react";

type RevalidatorHOCProps = {
  revalidateFuncion: () => void;
  children: React.ReactNode;
}
function RevalidatorHOC({ revalidateFuncion, children }: RevalidatorHOCProps) {
  useEffect(() => {
    const updateViews = async () => {
      await revalidateFuncion();
    }

    const min = 60;
    const refreshWindow = (1 / 2) * min;
    const interval = refreshWindow * 1000; //1000 is the constant
    const intervalId = setInterval(updateViews, interval);
    try{
      updateViews();
    } catch (e) {
      debugger
      console.log("failed to revalidate", e)
    }

    // Cleanup to clear interval when component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>{children}</>
  );
}

export default RevalidatorHOC;
