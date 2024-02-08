"use client";
import React, { ReactNode, useState } from "react";
import {
  MdAccessibleForward,
  MdArrowBackIosNew,
  MdArrowForwardIos,
  MdStore,
} from "react-icons/md";
import { CiKeyboard } from "react-icons/ci";
import { TbAlertCircleFilled, TbDeviceIpad, TbPencil } from "react-icons/tb";
import { TiWeatherPartlySunny } from "react-icons/ti";

type HeaderContentType = {
  icon: ReactNode;
  text: string;
};
const headerContents: HeaderContentType[] = [
  { icon: <CiKeyboard className="w-8 h-8" />, text: "Keyboard" },
  { icon: <TbPencil className="w-8 h-8" />, text: "Pencil" },
  { icon: <MdAccessibleForward className="w-8 h-8" />, text: "Accessories" },
  { icon: <TbDeviceIpad className="w-8 h-8" />, text: "IpadIOS" },
  { icon: <TbAlertCircleFilled className="w-8 h-8" />, text: "Alerts" },
  { icon: <TiWeatherPartlySunny className="w-8 h-8" />, text: "Weather" },
  { icon: <MdStore className="w-8 h-8" />, text: "Store" },
  { icon: <TiWeatherPartlySunny className="w-8 h-8" />, text: "Weathers" },
  { icon: <MdStore className="w-8 h-8" />, text: "Stores" },
];
export default function TransitHeader() {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3);

  return (
    <div
      className="flex items-center justify-center
     mt-4 mb-10 gap-8 w-full"
    >
      {/* show only when the fourth item is displaying */}
      {startIndex > 1 ? (
        <div className="w-1/12 grow">
          <MdArrowBackIosNew
            className="w-8 h-8"
            onClick={() => {
              setStartIndex((prv) => prv - 3);
              setEndIndex((prv) => prv - 3);
            }}
          />
        </div>
      ) : (
        //this ensures that the icons are centered even when the arrow button is hidden
        <div className="w-1/12 grow"></div>
      )}
      <div className="flex justify-between grow w-10/12 overflow-hidden">
        {headerContents.slice(startIndex, endIndex).map((content) => {
          return (
            <div
              key={content.text}
              className="flex flex-col items-center justify-center"
            >
              {content.icon}
              <span>{content.text}</span>
            </div>
          );
        })}
      </div>
      {/* show only when the last three items are not displaying */}
      {endIndex < headerContents.length ? (
        <div className="w-1/12 grow flex justify-end">
          <MdArrowForwardIos
            className="w-8 h-8"
            onClick={() => {
              setStartIndex((prv) => prv + 3);
              setEndIndex((prv) => prv + 3);
            }}
          />
        </div>
      ) : (
        //this ensures that the icons are centered even when the arrow button is hidden
        <div className="w-1/12 grow"></div>
      )}
    </div>
  );
}
