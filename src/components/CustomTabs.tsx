import React from "react"
import { Button } from "./ui/button";
import { twMerge } from "tailwind-merge";

interface CustomTabsProps{
  name: string,
  className? : string
}

const CustomTabs = ({name,className}:CustomTabsProps) => {
  const combinedClasses = 
  return (
    <Button
      className={combinedClasses}
    >
      {name}
    </Button>
  )
}

export default CustomTabs;