"use client";
import React from "react";
import { Transition } from '@headlessui/react'
import { BiError } from "react-icons/bi";

export default function InternetConnectionAlert({ showAlert }: { showAlert: boolean }) {
  
  return (
    <div 
      className={`bg-red-500 transition-[padding] duration-700 ease-in-out relative ${showAlert ? "pb-[45px]" : "pb-0"}`}
    >
      <Transition 
        show={showAlert}
        appear
        unmount={false}
        enter="delay-500 transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div 
          className="absolute w-full flex flex-row bg-red-500 items-center justify-center text-white py-2"
        >
          <BiError className="w-[25px] h-[25px] mr-2"/>
          <p className="text-center">No internet connection</p>
        </div>
      </Transition>
    </div>
  );
}
