export default async function getWeatherdata() {
  const res = await fetch(
    "http://transit-api-alb-365197636.us-east-1.elb.amazonaws.com/api/get-weather-data"
  );
  if (!res.ok) throw new Error("failed to fetch weather data");
  return res.json();
}
