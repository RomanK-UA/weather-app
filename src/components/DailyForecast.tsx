import filterByCurrentDay from "../utils/filterByCurrentDay";
import formateTime from "../utils/formateTime";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import WeatherCard from "./WeatherCard";
export default function DailyForecast({ data }) {
    const filteredData = filterByCurrentDay(data);

  return (
          <div className='py-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
            {filteredData.map((item) => {
              const icon = getWeatherIcon(item.weather[0].main); // Get the correct icon for each day's weather
              return (
                <div key={item.dt_txt} className='flex justify-center'>
                    <WeatherCard
                    date={formateTime(item.dt_txt)}
                    icon={icon}
                    minTemp={item.main.temp_min}
                    maxTemp={item.main.temp_max}
                    />
                </div>
    
              );
            })}
          </div>
  )
}
