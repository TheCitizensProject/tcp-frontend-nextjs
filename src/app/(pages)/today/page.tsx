import { ReactNode } from "react";
import IslandActivitiesComponent from "./components/IslandActivitiesComponent";
import AppQRCodeComponent from "./components/AppQRCodeComponent";

export default function Home() {
  return (
    <main className="h-screen w-full">
      {/* <Header /> */}
      <IslandActivitiesComponent />
      <AppQRCodeComponent />
    </main>
  );
}

export type Activity = {
  title: string;
  icon: ReactNode;
  description: string;
  elapsedTime: string;
};
