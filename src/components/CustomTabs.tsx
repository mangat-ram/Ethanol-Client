import React from "react"
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";

interface CustomTabsProps{
  name: string,
  className? : string
}

const CustomTabs = ({name,className}:CustomTabsProps) => {
  const combinedClasses = twMerge("text-2xl rounded-full p-6 w-40 text-[#003049] text-center font-bold",className)
  return (
    <Button
      className={combinedClasses}
    >
      {name}
    </Button>
  )
}

export default CustomTabs;