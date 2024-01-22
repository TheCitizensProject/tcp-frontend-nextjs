"use client";
import Link from "next/link";
import { MdOutlineNotificationsActive } from "react-icons/md";
export default function Alert() {
  return (
    <Link 
      data-testid="alertComponent" 
      className="ml-4 flex items-center max-sm:text-xs"
      href="/alerts"
      onClick={(e) => {
        /**
         * Once RIOC alerts has a page, 
         * delete the onClick Prop and function (lines 9-16)
         */
        e.preventDefault();
        alert("Coming soon...");
      }}
    >
      <div className="relative mr-4 max-sm:mr-1">
        <MdOutlineNotificationsActive
          data-testid="alertIcon"
          className="w-8 h-8 min-sm:w-10 min-sm:h-10"
        />
        <div
          data-testid="numberOfAlerts"
          className="bg-red-500 w-4 h-4 min-sm:w-6 min-sm:h-6 text-center font-bold rounded-full 
        absolute -top-1 right-0 min-sm:-right-1 text-white"
        >
          2
        </div>
      </div>

      <span>RIOC Alerts</span>
    </Link>
  );
}
