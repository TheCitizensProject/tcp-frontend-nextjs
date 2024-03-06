import Image from "next/image";
import React from "react";
import { TbAlertTriangle } from "react-icons/tb";

export type TransitCardProps = {
  train: string;
  time: number | string;
  direction: string;
  alertLink?: string;
};

function TransitCard({ train, time, direction, alertLink }: TransitCardProps) {
  /*
    The Train Card Module.

    This interface is a single unit, or Row, of train data. The design consists
    of 
        - taking a Train Type, our case the F train, and create an icon shape
        - displaying whether the train is a north or south bound
        - showing how many minutes away a train is.
    Most of these are accomplished using in-line css, and prop drilling from the 
    parent Train module.
    
        -------------------------------------------------------
        |   _div______   __div__________           __div_____  |
        |   |    F   |   |   N/S Bound |           |  X mins | |
        |   |________|   |_____________|           |_________| |
        -------------------------------------------------------
    */

  let imageSrc = "/ferry_icon.png";
  if (train === "tram") imageSrc = "/tcp-tram.png";
  if (train === "F") imageSrc = "/f-letter.png";

  return (
    <div
      className="flex items-center justify-between my-4 pb-4
    border-b border-[#E8E8E8] px-4"
    >
      <div className="flex items-center">
        <div>
          <Image src={imageSrc} width={50} height={50} alt={direction} />
        </div>
        <div className="ml-4">
          <p className="font-bold">{direction}</p>
          {train === "F" && direction === "Queens" 
            ? (<p className="text-xs">21st Queensbridge</p>) 
            : train === "F" && direction === "Manhattan"
            ? (<p className="text-xs">63rd Lexington Ave</p>)
            : null
          }
          {alertLink && (
            <a href={alertLink} target="_blank" className="flex flex-row items-center text-xs text-[#980513] hover:bg-[#FADEE3]/[0.50] transition-colors rounded-md px-1 w-fit -ml-1">
              <TbAlertTriangle className="mr-1" />
              Service Alerts
            </a>
          )}
        </div>
      </div>
      <div>
        <span className={`font-bold mr-1 ${alertLink && 'text-[#C2C2C2]'}`}> {`${time} mins`}</span>
      </div>
    </div>
  );
}

export default TransitCard;
