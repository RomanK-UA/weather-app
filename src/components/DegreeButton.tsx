import { memo } from "react"

type DegreeButtonProps = {
    units: | 'metric' | 'imperial',
    isActive: boolean
}
const DegreeButton = ({units, isActive}: DegreeButtonProps) => {
  return (
    <button className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-xl font-semibold ${isActive ? "bg-black text-white hover:border-2 hover:border-teal-500" : "bg-white text-black hover:border-2 hover:border-teal-500"}`}>
      <sup>°</sup><span>{units === "metric" ? "C" : "F"}</span>      
    </button>
  )
}

export default memo(DegreeButton);