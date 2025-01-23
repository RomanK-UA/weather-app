import InfoCard from "./InfoCard";
import determinePressureCategory from "../utils/determinePressureCategory";
import determineWindDirection from "../utils/determineWindDirection";
import Slider from "./Slider";
export default function WeatherDashboard({ weather }) {
    const windSpeed = (weather.wind.speed * 3.6).toFixed(1); //convert m/s to km/h
    const windDirection = determineWindDirection(weather.wind.deg);
    const humidity: number = weather.main.humidity;
    const pressure: number = weather.main.pressure;
    const pressureInfo = determinePressureCategory(pressure);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 border-b-2 border-gray-300 py-4 gap-7">
      <InfoCard
        title="Wind Status"
        mainContent={
          <div>
            {/*convert m/s to km/h*/}
            <span>{windSpeed}</span> <span className="text-sm">km/h</span> 
          </div>
        }
        footer={
          <div className="flex gap-4  items-end">
            <div className="rounded-full text-xl border-2 p-1 font-bold text-blue-600">{windDirection?.icon}</div>
            <span>{windDirection?.direction}</span>
          </div>

        }
      />
      <InfoCard
        title="Humidity"
        mainContent={`${humidity}%`}
        footer="Normal"
        footerEmoji="👍"
      />
      <InfoCard
        title="Pressure"
        mainContent={
          <Slider value={pressure} min={950} max={1050} step={1} />
        }
        footer={pressureInfo.text}
        footerEmoji={pressureInfo.emoji}
      />

      {/* <InfoCard
        title="Air Quality"
        mainContent="105"
        footer="Unhealthy"
        footerEmoji="👎"
      />
      <InfoCard
        title="Air Quality"
        mainContent="105"
        footer="Unhealthy"
        footerEmoji="👎"
      />
      <InfoCard
        title="Air Quality"
        mainContent="105"
        footer="Unhealthy"
        footerEmoji="👎"
      /> */}
    </div>
  );
}
