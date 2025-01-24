import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TabButton from "./components/TabButton";
import DegreeButton from "./components/DegreeButton";
import filterByCurrentDay from "./utils/filterByCurrentDay";
import WeeklyForecast from "./components/WeeklyForecast";
import WeatherDashboard from "./components/WeatherDashboard";

type Location = {
  latitude: number;
  longitude: number;
};

function App() {
  const [location, setLocation] = useState<Location | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState<"Today" | "Week">("Today");
  const [units, setUnits] = useState<"metric" | "imperial">("metric");
  const [loading, setLoading] = useState(true);
  const prevLocation = useRef<Location | null>(null);

  const todayWeather = useMemo(
    () => (weatherData ? filterByCurrentDay(weatherData.list) : []),
    [weatherData]
  );

  const fetchWeatherData = useCallback(async () => {
    if (!location) return;
    const apiKey = import.meta.env.VITE_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=${units}`;
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
      prevLocation.current = location;
    } catch (error: any) {
      console.error("Error fetching weather data:", error.message);
    } finally {
      setLoading(false);
    }
  }, [location, units]);

  const getLocation = useCallback(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          alert("Error getting location: " + error.message);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  // Get initial location on mount
  useEffect(() => {
    getLocation();
  }, [getLocation]);

  // Fetch weather data when location or units change
  useEffect(() => {
    if (
      !prevLocation.current || // Initial fetch
      location?.latitude !== prevLocation.current.latitude ||
      location?.longitude !== prevLocation.current.longitude ||
      units // Fetch on units change
    ) {
      fetchWeatherData();
    }
  }, [fetchWeatherData, location, units]);

  return (
    <div className="container min-h-screen mx-auto flex flex-col md:flex-row justify-center">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-blue-500"></div>
          <p className="ml-4">Loading weather data...</p>
        </div>
      ) : weatherData ? (
        <>
          <Sidebar
            weatherData={weatherData}
            getLocation={getLocation}
            units={units}
          />
          <main className="flex-1 bg-gray-100 md:rounded-r-3xl p-10">
            <header className="flex justify-between items-center">
              <div className="flex gap-4 mt-4">
                <TabButton
                  tabName="Today"
                  isActive={activeTab === "Today"}
                  onClick={() => setActiveTab("Today")}
                />
                <TabButton
                  tabName="Week"
                  isActive={activeTab === "Week"}
                  onClick={() => setActiveTab("Week")}
                />
              </div>
              <div className="flex gap-4">
                <DegreeButton
                  units={"metric"}
                  isActive={units === "metric"}
                  onClick={() => setUnits("metric")}
                />
                <DegreeButton
                  units={"imperial"}
                  isActive={units === "imperial"}
                  onClick={() => setUnits("imperial")}
                />
              </div>
            </header>
            {activeTab === "Today" ? (
              <section>Today</section>
            ) : (
              <section>
                <WeeklyForecast data={weatherData} />
              </section>
            )}
            <section className="gap-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold py-8">
                Today's highlights
              </h1>
              <WeatherDashboard weather={todayWeather[0]} units={units} />
            </section>
          </main>
        </>
      ) : (
        <p>Error loading weather data. Please try again later.</p>
      )}
    </div>
  );
}

export default App;