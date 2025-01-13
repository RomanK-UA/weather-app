import { useState } from "react"
import DegreeButton from "./DegreeButton"
import TabButton from "./TabButton"
import WeatherCard from "./WeatherCard";


type MainProps = {
  activeTab: "Today" | "Week"; // Receive active tab from parent
  onTabChange: (tabName: "Today" | "Week") => void; // Callback to notify parent
}

export default function Main({ activeTab, onTabChange }: MainProps) {
  return (
    <main className='flex-1 bg-gray-100 sm:rounded-r-3xl p-4'>
        <header >
            <h1 className='text-3xl font-semibold'>Weather App</h1>
          <section className="flex justify-between items-center">
          <div className='flex gap-4 mt-4'>
          <TabButton
              tabName="Today"
              isActive={activeTab === "Today"}
              onClick={() => onTabChange("Today")}
            />
            <TabButton
              tabName="Week"
              isActive={activeTab === "Week"}
              onClick={() => onTabChange("Week")}
            />
            </div>
            <div className="flex gap-4">
              <DegreeButton  degree={"C"} isActive = {true} />
              <DegreeButton  degree={"F"} isActive = {false}/>
            </div>
          </section>
          
          <section>
            <WeatherCard />
          </section>

        </header>
    </main>
  )
} 
