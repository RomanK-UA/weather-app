import { memo } from "react";

type TabButtonProps = {
    tabName: string;
    isActive: boolean;
    onClick: () => void;
}
const TabButton = memo(({ tabName, isActive, onClick }: TabButtonProps) => {
  return (
    <button
      className={`text-xl md:text-2xl lg:text-3xl font-semibold py-2 px-4 ${
        isActive ? 'text-black border-b-2 border-gray-700' : 'text-gray-500 hover:text-teal-500'
      }`}
      onClick={onClick}
    >
      {tabName}
    </button>
  );
})

export default TabButton;