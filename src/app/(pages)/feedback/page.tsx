"use client";

import { MouseEventHandler, useState } from "react";
import { BsBag, BsTrash } from "react-icons/bs";
import { CiBullhorn } from "react-icons/ci";
import { FaTheaterMasks } from "react-icons/fa";
import { PiTrafficSignal, PiTrain, PiTreeLight } from "react-icons/pi";
import { RiShieldStarLine } from "react-icons/ri";
import Rating from "./components/Rating";
import Divider from "./components/Divider";
import postFeedback from "@/queries/postFeedbackinfo";

export type RatingCriteria = {
  overall: number;
  businessAndConsumers: number;
  publicSafety: number;
  transportation: number;
  cultureAndRecreation: number;
  trashAndRecycling: number;
  environment: number;
  sidewalksStreetsHighways: number;
  noise: number;
};

export default function page() {
  const [ratings, setRatings] = useState<RatingCriteria>({
    overall: 0,
    businessAndConsumers: 0,
    publicSafety: 0,
    transportation: 0,
    cultureAndRecreation: 0,
    trashAndRecycling: 0,
    environment: 0,
    sidewalksStreetsHighways: 0,
    noise: 0,
  });

  const getCurrentRating = (key: keyof RatingCriteria) => {
    return ratings[key];
  };

  const handleNewRating = (key: keyof RatingCriteria, newRating: number) => {
    setRatings({ ...ratings, [key]: newRating });
  };

  // TODO: call API to submit data
  // const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
  //   e.preventDefault();
  //   console.log(ratings);
  // };

  async function handleSubmit(e: any) {
    e.preventDefault();
    const postfeedback = await postFeedback(ratings);
    console.log(postfeedback);
    setRatings({
      overall: 0,
      businessAndConsumers: 0,
      publicSafety: 0,
      transportation: 0,
      cultureAndRecreation: 0,
      trashAndRecycling: 0,
      environment: 0,
      sidewalksStreetsHighways: 0,
      noise: 0,
    });
  }

  return (
    <form className="flex flex-col w-full space-y-4 mb-4">
      <Divider />
      <Rating
        title="OVERALL"
        ratingCriterion="overall"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<BsBag />}
        title="Business & Consumers"
        ratingCriterion="businessAndConsumers"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<RiShieldStarLine />}
        title="Public Safety"
        ratingCriterion="publicSafety"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<PiTrain />}
        title="Transportation"
        ratingCriterion="transportation"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<FaTheaterMasks />}
        title="Culture & Recreation"
        ratingCriterion="cultureAndRecreation"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<BsTrash />}
        title="Trash & Recycling"
        ratingCriterion="trashAndRecycling"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<PiTreeLight />}
        title="Environment"
        ratingCriterion="environment"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<PiTrafficSignal />}
        title="Sidewalks, Streets, Highways"
        ratingCriterion="sidewalksStreetsHighways"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <Rating
        icon={<CiBullhorn />}
        title="Noise"
        ratingCriterion="noise"
        getCurrentRating={getCurrentRating}
        handleNewRating={handleNewRating}
      />
      <Divider />
      <button
        className="w-fit m-auto border-2 border-gray-600 px-4 py-1 rounded-full"
        onClick={handleSubmit}
      >
        <p className="uppercase font-semibold">Submit</p>
      </button>
    </form>
  );
}
