export const getWeatherIcon = (condition: string): string => {
    const iconMap: { [key: string]: string } = {
      sunny: "/icons/sunny.svg",
      rain: "/icons/rainy-1.svg",
      clouds: "/icons/cloudy.svg",
      snowy: "/icons/snowy-1.svg",
      stormy: "/icons/thunder.svg",
      clear: "/icons/day.svg", // Fallback icon
      default: "/icons/weather.svg", // Default icon
    };
  
    return iconMap[condition.toLowerCase()] || iconMap["default"];
  };