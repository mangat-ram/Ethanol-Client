"use client";
import React, { useState } from "react"

interface ProjectsIdPageProps{
  params: {
    userName: string
  }
}

const ProjectsIdPage = ({params}: ProjectsIdPageProps) => {

  const [labs, setLabs] = useState([]);
  const [updateLab,setUpdateLab] = useState({}); 

  const updateLabDetails = () => {
    console.log("updateLabDetails");
  }

  // Skeleton Pending
  // Null Document Check

  return (
    <div className="pb-40">
      <div>
        <Toolbar initialData={} />
      </div>
    </div>
  )
}

export default ProjectsIdPage;