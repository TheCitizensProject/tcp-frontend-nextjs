import { ReactNode, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { RatingCriteria } from "../page";

interface Props {
  icon?: ReactNode;
  title: string;
  ratingCriterion: keyof RatingCriteria;
  getCurrentRating: (key: keyof RatingCriteria) => number;
  handleNewRating: (key: keyof RatingCriteria, newRating: number) => void;
}

export default function Rating({ icon, title, ratingCriterion, getCurrentRating, handleNewRating }: Props) {
  const [hoverRating, setHoverRating] = useState<number | undefined>();

  return (
    <div className="space-y-4 px-4">
      <div className="flex items-center space-x-4">
        <div className="text-xl text-gray-600">{icon}</div>
        <h2 className="font-bold text-md">{title}</h2>
      </div>
      <div className="flex text-4xl space-x-4">
        {[...Array(5)].map((_, index) => {
          const isEnabled = hoverRating ? index + 1 <= hoverRating : index + 1 <= getCurrentRating(ratingCriterion);

          return (
            <div
              key={index}
              className={isEnabled ? `text-yellow-300` : `text-gray-300`}
              onClick={() => {
                handleNewRating(ratingCriterion, index + 1);
              }}
              onMouseEnter={() => setHoverRating(index + 1)}
              onMouseLeave={() => setHoverRating(undefined)}
            >
              <BsStarFill />
            </div>
          );
        })}
      </div>
    </div>
  );
}
