"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { LuPackagePlus } from "react-icons/lu";

const ProjectPage = () => {

  const onCreate = () => {
    console.log("On create");
    //create logic project
  }

  return (
    <div className="font-poppins h-full flex flex-col items-center justify-center space-y-4 ">
      <Image
        src="/project.png"
        width="400"
        height="400"
        alt="project"
      />
      <h2>Welcome to Ethanol</h2>
      <Button size="lg">
        <LuPackagePlus className="h-6 w-6 mr-2" />
        <span className="text-lg">Create a Project</span>
      </Button>
    </div>
  )
}

export default ProjectPage;