export default function WeatherCard({day, icon, minTemp, maxTemp}) { 
  return (
    <div className="w-32 h-40 flex flex-col items-center bg-white rounded-3xl overflow-hidden p-2 ">
        <p>{day}</p>
        <img src={icon} alt="" className="w-24" />
        <p>{maxTemp.toFixed()}&deg; <span className="text-gray-400">{minTemp.toFixed()}&deg;</span></p>
    </div>
  )
}
