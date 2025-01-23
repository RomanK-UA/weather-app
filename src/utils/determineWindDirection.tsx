import { ReactElement } from "react";
import { GoArrowDown, GoArrowDownLeft, GoArrowDownRight, GoArrowLeft, GoArrowRight, GoArrowUp, GoArrowUpLeft, GoArrowUpRight } from "react-icons/go";

interface WindDirection {
    direction: string;
    icon: ReactElement;
  }
export default function determineWindDirection(degree: number): WindDirection {
  if (degree >= 337.5 || degree < 22.5) {
    return { direction: "North", icon: <GoArrowUp/> };
  } else if (degree >= 22.5 && degree < 67.5) {
    return { direction: "North-East", icon: <GoArrowUpRight /> };
  } else if (degree >= 67.5 && degree < 112.5) {
    return { direction: "East", icon: <GoArrowRight /> };
  } else if (degree >= 112.5 && degree < 157.5) {
    return { direction: "South-East", icon: <GoArrowDownRight /> };
  } else if (degree >= 157.5 && degree < 202.5) {
    return { direction: "South", icon: <GoArrowDown /> };
  } else if (degree >= 202.5 && degree < 247.5) {
    return { direction: "South-West", icon: <GoArrowDownLeft/> };
  } else if (degree >= 247.5 && degree < 292.5) {
    return { direction: "West", icon: <GoArrowLeft /> };
  } else {
    return { direction: "North-West", icon: <GoArrowUpLeft /> };
  }
};
