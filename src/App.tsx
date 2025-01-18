import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TabButton from "./components/TabButton";
import DegreeButton from "./components/DegreeButton";

type Location = {
  latitude: number;
  longitude: number;
}

function App() {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [activeTab, setActiveTab] = useState<"Today" | "Week">("Today");
  const prevLocation = useRef<Location | null>(null);
  const handleTabChange = useCallback((tabName: "Today" | "Week") => {
    setActiveTab(tabName);
  }, []);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(location);
        },
        (error) => {
          console.error("Error getting location", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if(  location?.latitude === prevLocation.current?.latitude &&
      location?.longitude === prevLocation.current?.longitude) {
      return;
    }
    const fetchWeatherData = async () => {
      if (location) {
        const apiKey = import.meta.env.VITE_API_KEY;
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
    prevLocation.current = location;
  }, [location]);

  return (
    <div className="container min-h-screen mx-auto flex flex-col md:flex-row justify-center">
      {weatherData ? (
        <Sidebar weatherData={weatherData} getLocation={getLocation} />
      ) : (
        <p>Loading...</p>
      )}

      <main className="flex-1 bg-gray-100 md:rounded-r-3xl p-4">
        <header>
          <section className="flex justify-between items-center">
            <div className="flex gap-4 mt-4">
              <TabButton
                tabName="Today"
                isActive={activeTab === "Today"}
                onClick={handleTabChange.bind(null, "Today")}
              />
              <TabButton
                tabName="Week"
                isActive={activeTab === "Week"}
                onClick={handleTabChange.bind(null, "Week")}
              />
            </div>
            <div className="flex gap-4">
              <DegreeButton units={"metric"} isActive={true} />
              <DegreeButton units={"imperial"} isActive={false} />
            </div>
          </section>
        </header>
        <main>
          {weatherData ? (
            <p> Data</p>
          ) : (
            <p>loading...</p>
          )}
        </main>
      </main>
    </div>
  );
}

export default App;