import WeatherCard from './WeatherCard'
import { getWeatherIcon } from '../utils/getWeatherIcon'
import  getDay from '../utils/getDay'
import { div } from 'motion/react-client';

export default function WeeklyForecast({ data }) {
    // Function to extract one forecast per day
    const getOneForecastPerDay = (dataList) => {
      const uniqueDays = new Set(); // To track days we've already included
      return dataList.filter((item) => {
        const day = new Date(item.dt_txt).toISOString().split("T")[0]; // Extract date (YYYY-MM-DD)
        if (!uniqueDays.has(day)) {
          uniqueDays.add(day);
          console.log(day)
          return true; // Include the first item for each day

        }
        return false; // Skip subsequent items for the same day
      });
    };
  
    // Get one forecast per day from the provided data
    const dailyForecasts = getOneForecastPerDay(data.list);
  
    return (
      <div className='py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
        {dailyForecasts.map((item) => {
          const icon = getWeatherIcon(item.weather[0].main); // Get the correct icon for each day's weather
          return (
            <div key={item.dt_txt} className='flex justify-center'>
                <WeatherCard
                day={getDay(item.dt_txt)}
                icon={icon}
                minTemp={item.main.temp_min}
                maxTemp={item.main.temp_max}
                />
            </div>

          );
        })}
      </div>
    );
  }