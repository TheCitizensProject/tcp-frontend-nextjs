export default async function getWeatherdata() {
  try {
    const res = await fetch(
      `${process.env.TRANSIT_API_URL}/get-weather-data`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error("failed to fetch weather data");
    return res.json();
  } catch (error) {
    console.error("error fetching weather data: ", error);
    return null;
  }
}
