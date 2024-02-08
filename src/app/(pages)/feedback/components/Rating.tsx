import { ReactNode } from "react";
import { RatingCriteria } from "../page";
import StarsRating from "./StarsRating";

interface Props {
  icon?: ReactNode;
  title: string;
  ratingCriterion: keyof RatingCriteria;
  getCurrentRating: (key: keyof RatingCriteria) => number;
  handleNewRating: (key: keyof RatingCriteria, newRating: number) => void;
}

export default function Rating({ icon, title, ratingCriterion, getCurrentRating, handleNewRating }: Props) {
  const setNewRating = (newRating: number, ratingCriterion: keyof RatingCriteria) => {
    return () => {
      handleNewRating(ratingCriterion, newRating);
    }
  }
  
  return (
    <div className="space-y-4 px-4">
      <div className="flex items-center space-x-4">
        <div className="text-xl text-gray-600">{icon}</div>
        <h2 className="font-bold text-md">{title}</h2>
      </div>
      <div className="flex text-4xl space-x-4">
        <StarsRating 
          setNewRating={setNewRating}
          ratingCriterion={ratingCriterion}
          getCurrentRating={getCurrentRating}
        />
      </div>
    </div>
  );
}
