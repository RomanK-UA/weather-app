import { IoIosSearch } from "react-icons/io";
import { MdLocationSearching } from "react-icons/md";
import { FiCloud } from "react-icons/fi";
import { FiCloudRain } from "react-icons/fi";
import { useState } from "react";

export default function Sidebar({weatherData , getLocation}) {
  const [location, setLocation] = useState(null);

  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const data = weatherData.list[0];
  const city = weatherData?.city?.name || "Uknown";
  const country = weatherData?.city?.country || "Uknown";
  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 bg-white md:rounded-l-3xl p-4 flex flex-col justify-between">
      {/* LOCATION SEARCH */}
      <section className="flex justify-center sm:justify-between gap-4 ">
        <div className="flex w-full max-w-80 md:w-ful items-center py-2 px-2 rounded-3xl transition ease-in-out duration-300 hover:cursor-pointer border-2 hover:border-teal-400">
          <IoIosSearch className="mr-4 text-xl hover:cursor-pointer" />
          <input
            type="text"
            className="outline-none bg-transparent w-full text-xs"
            placeholder="Search for location..."
          />
        </div>  
        <button onClick={getLocation}>
          <MdLocationSearching className="text-2xl hover:text-blue-500" />
        </button>
      </section>

      {/* TODAY'S GENERAL WEATHER */}
      <section className="flex flex-col items-center gap-4 border-b-2 border-gray-300 py-4">
        <img src="/icons/cloudy-day-1.svg" alt="icon" className="w-64 h-64" />
        <p className="text-5xl md:text-6xl lg:text-8xl self-start">
          <span className="">{data.main.temp.toFixed()}</span><sup>&deg;</sup>
          <sup>C</sup>
        </p>
        <p className="text-3xl self-start">{today}</p>
      </section>

      {/* WEATHER DETAILS */}
      <section className="flex flex-col md:flex-row md:justify-between py-4 gap-4">
        <div className="flex items-center py-2">
          <FiCloud className="text-2xl mr-2" />
          <span>{data.weather[0].main}</span>
        </div>
        <div className="flex items-center py-2">
          <FiCloudRain className="text-2xl mr-2 text-blue-600" />
          <span>Rain - {data.main.humidity}%</span>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="w-full h-48 md:h-52 rounded-3xl overflow-hidden relative">
          <img src="town.jpg" alt="" className="w-full h-full object-cover" />
          <p className="absolute inset-0 flex items-center justify-center text-3xl text-white bg-black/30 rounded-3xl">
            {city + ", " + country}
          </p>
        </div>
      </section>
    </aside>
  );
}
