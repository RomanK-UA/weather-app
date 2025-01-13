type DegreeButtonProps = {
    degree: | 'C' | 'F',
    isActive: boolean
}
export default function DegreeButton({degree, isActive}: DegreeButtonProps) {
  return (
    <button className={`w-8 h-8 md:w-10 md:h-10 rounded-full text-sm md:text-xl font-semibold ${isActive ? "bg-black text-white hover:border-2 hover:border-teal-500" : "bg-white text-black hover:border-2 hover:border-teal-500"}`}>
      <sup>°</sup><span>{degree}</span>      
    </button>
  )
}
