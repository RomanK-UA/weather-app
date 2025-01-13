export default function WeatherCard({icon, minTemp, maxTemp}) {
  return (
    <div className="w-32 h-40 flex flex-col items-center bg-white rounded-3xl overflow-hidden p-2">
        <p>Mon</p>
        <img src={icon} alt="" className="w-24" />
        <p>{maxTemp}&deg; <span className="text-gray-400">{minTemp}&deg;</span></p>
    </div>
  )
}
