"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { generateClient } from 'aws-amplify/api';
import * as subscriptions from '../../graphql/subscriptions';
import { useAppCtx } from "./ContextHOCs/AppContext";

/**
 * Future Approach to Track if RIOC Alerts have been viewed:
 * 
 * 1. Auth must be implemented. We will need a user to be logged in to keep track of alerts
 * 2. User table can have a key (`RIOCAlertsViewed`) that will track the alert IDs that have been viewed by the user
 *    - When a user views an alert, the alert's ID is pushed to the `RIOCAlertsViewed` key
 * 3. When an alert is removed from the table, the alert's ID is removed from the `RIOCAlertsViewed` key
 * 
 * Concerns:
 * - How long should an alert stay in the table? 30, 60, 90 days?
 * 
 * Current Solution
 * - No auth implemented.
 * - using local storage
 */
export default function Alert() {
  const client = generateClient();
  const { getRiocAlerts, setRiocAlerts } = useAppCtx();
  
  const createSub = client
    .graphql({ query: subscriptions.onCreateRIOCAlertData })
    .subscribe({
      next: ({ data }) => {
        setRiocAlerts([ ...getRiocAlerts(), data.onCreateRIOCAlertData ]);
      },
      error: (error) => console.warn(error)
    });

  useEffect(() => {
    return () => {
      createSub.unsubscribe();
    }
  },[]);
  
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
        {getRiocAlerts().length > 0 && (
          <div
            data-testid="numberOfAlerts"
            className="bg-red-500 w-4 h-4 min-sm:w-6 min-sm:h-6 text-center font-bold rounded-full 
          absolute -top-1 right-0 min-sm:-right-1 text-white"
          >
            {getRiocAlerts().length}
          </div>
        )}
      </div>

      <span>RIOC Alerts</span>
    </Link>
  );
}
