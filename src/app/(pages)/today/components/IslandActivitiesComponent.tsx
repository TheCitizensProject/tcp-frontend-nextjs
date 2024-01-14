import { Activity } from "../page";

import { TbTriangleFilled } from "react-icons/tb";
import ActivityComponent from "./ActivityComponent";
export default function IslandActivitiesComponent() {
  const activities: Activity[] = [
    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit amet consecteturt officiis quam est cum. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },

    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit sed libero ratione magnam unde expedita eum quod sequi adipisci nesciunt officiis quam est cum. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },
    {
      title: "Bridge to Queens closed",
      icon: (
        <TbTriangleFilled
          data-testid="activityIcon"
          className="w-12 h-12 mr-4"
        />
      ),
      description:
        "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti earum delectus ad harum.",
      elapsedTime: "11 minutes",
    },
  ];
  return (
    <div data-testid="islandActivities" className="w-full">
      <div className="bg-stone-100 p-4">
        <h1 className="text-2xl font-bold">{`What's happening on the Island today?`}</h1>
      </div>
      {activities.map((activity) => (
        <ActivityComponent key={activity.title} activity={activity} />
      ))}
    </div>
  );
}
