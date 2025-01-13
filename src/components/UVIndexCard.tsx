const UVIndexCard = ({ uvIndex }) => {
    const maxUVIndex = 6; // The maximum UV value
    const percentage = (uvIndex / maxUVIndex) * 100; // Percentage for the gauge
  
    return (
      <div className="bg-gray-50 rounded-lg shadow-md p-4 w-64 flex flex-col items-center">
        {/* Heading */}
        <p className="text-gray-500 text-sm mb-4">UV Index</p>
  
        {/* Gauge */}
        <div className="relative w-32 h-16">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 36 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background Arc */}
            <path
              d="M2 16 a16 16 0 0 1 32 0"
              fill="none"
              stroke="#e5e7eb" /* Tailwind gray-200 */
              strokeWidth="2"
            />
            {/* Filled Arc */}
            <path
              d="M2 16 a16 16 0 0 1 32 0"
              fill="none"
              stroke="#fbbf24" /* Tailwind amber-400 */
              strokeWidth="2"
              strokeDasharray={`${percentage}, 100`}
              strokeLinecap="round"
            />
          </svg>
        </div>
  
        {/* UV Index Value */}
        <p className="text-2xl font-semibold text-gray-800 mt-2">{uvIndex}</p>
      </div>
    );
};

export default UVIndexCard;