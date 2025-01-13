export const getWeatherIcon = (condition: string): string => {
    const iconMap: { [key: string]: string } = {
      sunny: "/icons/day.svg",
      rainy: "/icons/rainy-1.svg",
      clouds: "/icons/cloudy.svg",
      snowy: "/icons/snowy-1.svg",
      stormy: "/icons/thunder.svg",
      // Add more conditions as needed
      default: "/icons/weather.svg", // Fallback icon
    };
  
    return iconMap[condition.toLowerCase()] || iconMap["default"];
  };