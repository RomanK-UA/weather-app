import React from "react";

interface SliderProps {
  value: number; // Current value
  min: number; // Minimum value
  max: number; // Maximum value
  step: number; // Step size
}

const Slider: React.FC<SliderProps> = ({ value, min, max}) => {
  // Calculate the position of the "thumb" based on the value
  const position = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative h-40 w-full flex items-center justify-between">
        <p>{value}</p>
      {/* Vertical Slider Track */}
      <div className="relative w-4 h-1/2 border-2 rounded-full p-4">
        {/* Thumb */}
        <div
          className="absolute -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full"
          style={{ bottom: `${position}%` }}
        ></div>
      </div>

    </div>
  );
};

export default Slider;