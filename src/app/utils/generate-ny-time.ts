import moment from "moment-timezone";

const generateNewYorkTime = () => {
  return moment.tz("America/New_York");
};

export default generateNewYorkTime;
