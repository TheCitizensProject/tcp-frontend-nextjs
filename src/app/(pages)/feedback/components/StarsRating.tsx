"use client";
import { BsStarFill } from "react-icons/bs";
import { RatingCriteria } from "../page";

type StarsRatingProps = {
  ratingCriterion: keyof RatingCriteria;
  setNewRating: (newRating: number, ratingCriterion: keyof RatingCriteria) => () => void;
  getCurrentRating: (key: keyof RatingCriteria) => number;
}

export default function StarsRating({
  ratingCriterion,
  setNewRating,
  getCurrentRating
}: StarsRatingProps) {
  const starsRating = getCurrentRating(ratingCriterion);
  
  return (
    <fieldset className="star-rating">
      <div onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRating(Number(e.target.value), ratingCriterion)();
      }}>
        <input type="radio" name={`rating-${ratingCriterion}`} value="1" id={`rating1-${ratingCriterion}`} />
        <label 
          className={starsRating > 0 ? `text-yellow-300` : `text-gray-300`}
          htmlFor={`rating1-${ratingCriterion}`}><BsStarFill/></label>
        <input type="radio" name={`rating-${ratingCriterion}`} value="2" id={`rating2-${ratingCriterion}`} />
        <label 
          className={starsRating > 1 ? `text-yellow-300` : `text-gray-300`}
          htmlFor={`rating2-${ratingCriterion}`}><BsStarFill/></label>
        <input type="radio" name={`rating-${ratingCriterion}`} value="3" id={`rating3-${ratingCriterion}`} />
        <label 
          className={starsRating > 2 ? `text-yellow-300` : `text-gray-300`}
          htmlFor={`rating3-${ratingCriterion}`}><BsStarFill/></label>
        <input type="radio" name={`rating-${ratingCriterion}`} value="4" id={`rating4-${ratingCriterion}`} />
        <label 
          className={starsRating > 3 ? `text-yellow-300` : `text-gray-300`}
          htmlFor={`rating4-${ratingCriterion}`}><BsStarFill/></label>
        <input type="radio" name={`rating-${ratingCriterion}`} value="5" id={`rating5-${ratingCriterion}`} />
        <label 
          className={starsRating > 4 ? `text-yellow-300` : `text-gray-300`}
          htmlFor={`rating5-${ratingCriterion}`}><BsStarFill/></label>
      </div>
    </fieldset>
  );
}