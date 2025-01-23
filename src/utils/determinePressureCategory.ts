export default function determinePressureCategory(pressure: number){
    if (pressure < 1000) {
      return { text: "Low", emoji: "☁️" };
    } else if (pressure >= 1000 && pressure <= 1020) {
      return { text: "Average", emoji: "😐" };
    } else {
      return { text: "High", emoji: "☀️" };
    }
  };