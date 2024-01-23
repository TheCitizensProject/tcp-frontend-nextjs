//import { TiWeatherPartlySunny } from "react-icons/ti";
import getWeatherdata from "../getWeatherdata";

export default async function WeatherInfo() {
  const weatherData: Promise<weather>=getWeatherdata()
  const wData =await weatherData
  const iconLink="https:"+wData.data.icon
  return (
    <div data-testid="weatherInfoComponent" className="mr-4 flex items-center">
      {/* <TiWeatherPartlySunny
        data-testid="weatherIcon"
        className="w-8 h-8 mr-2"
      /> */}
      <span className="w-8 h-8 mr-2"><img src={iconLink} alt="No icon"/></span>
      <span data-testid="weatherInfo">{wData.data.temp_f}, {wData.data.condition}</span>
    </div>
  );
}
