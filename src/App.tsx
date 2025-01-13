import { useEffect, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TabButton from "./components/TabButton";
import DegreeButton from "./components/DegreeButton";
import WeatherCard from "./components/WeatherCard";
import { getWeatherIcon } from "./utils/getWeatherIcon";
function App() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState<"Today" | "Week">("Today");

  const handleTabChange = (tabName: "Today" | "Week") => {
    setActiveTab(tabName); // Update the parent's state
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({latitude, longitude });
        },
        (err) => {
          setError("Unable to retrieve location: " + err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location) {
        const apiKey = "3535235fed589e41664f8f6deda12f54"; // Replace with environment variable
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`;

        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error("Failed to fetch weather data");
          }
          const data = await response.json();
          setWeatherData(data);
          console.log(data);
        } catch (err) {
          setError(err.message);
        }
      }
    };

    fetchWeatherData();
  }, [location]);

  return (
    <div className="container min-h-screen mx-auto flex flex-col md:flex-row justify-center">
    <Sidebar />
    <main className="flex-1 bg-gray-100 md:rounded-r-3xl p-4">
      <header>
        <section className="flex justify-between items-center">
          <div className="flex gap-4 mt-4">
            <TabButton
              tabName="Today"
              isActive={activeTab === "Today"}
              onClick={() => handleTabChange("Today")}
            />
            <TabButton
              tabName="Week"
              isActive={activeTab === "Week"}
              onClick={() => handleTabChange("Week")}
            />
          </div>
          <div className="flex gap-4">
            <DegreeButton degree={"C"} isActive={true} />
            <DegreeButton degree={"F"} isActive={false} />
          </div>
        </section>
      </header>
      <section>
          {weatherData ? (
            // <WeatherCard icon={getWeatherIcon(weatherData.weather[0].main)} maxTemp = {weatherData.main.temp_max} minTemp = {weatherData.main.temp_min}/>
            <p> Data</p>
          ) : (
            <p>loading...</p>
          )}
        </section>
    </main>
  </div>
  );
}

export default App;