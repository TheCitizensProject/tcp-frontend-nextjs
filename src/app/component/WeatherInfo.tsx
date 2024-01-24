import getWeatherdata from "../../queries/getWeatherdata";

export default async function WeatherInfo() {
  const weatherData: Promise<weather> = getWeatherdata();
  const wData = await weatherData;

  if(!wData) {
    return (
      <div data-testid="weatherInfoComponent" className="mr-4 flex items-center">
        <span className="w-8 h-8 mr-2 animate-pulse bg-gray-500 rounded-full"></span>
        <span data-testid="weatherInfo" className="w-[90px] h-6 mr-2 animate-pulse bg-gray-500 rounded-full"></span>
      </div>
    );
  }
  
  const iconLink = "https:"+wData.data.icon;
  return (
    <div data-testid="weatherInfoComponent" className="mr-4 flex items-center max-sm:text-xs">
      <span className="w-8 h-8 min-sm:mr-2"><img src={iconLink} alt="No icon"/></span>
      <span data-testid="weatherInfo" className="max-[400px]:flex-col flex"><span>{wData.data.temp_f},</span> <span>{wData.data.condition}</span></span>
    </div>
  );
}
