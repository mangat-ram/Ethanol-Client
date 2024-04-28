import { ClipboardList, Command, FolderOpen, LayoutGrid, Users } from "lucide-react"
import React from "react"

const SideBar = () => {
  return (
    <section className="m-0">
      <div className="h-screen p-3 w-60 flex">
        <div className="bg-gray-300 w-60 flex flex-col items-center rounded-lg">
          <h1 className="text-4xl font-featureDeck font-bold p-4">Ethanol</h1>
          <div className="font-cabinet font-bold text-gray-700 flex items-start flex-col gap-3">
            <div className="flex items-center justify-center gap-1">
              <LayoutGrid width={20} className="text-gray-700"/>
              <span className="cursor-pointer hover:text-gray-900">Dashboard</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <Users width={20} className="text-gray-700"/>
              <span className="cursor-pointer hover:text-gray-900">Collabers</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FolderOpen width={20} className="text-gray-700"/>
              <span className="cursor-pointer hover:text-gray-900">Projects</span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <ClipboardList width={20} className="text-gray-700"/>
              <span className="cursor-pointer hover:text-gray-900">Tasks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SideBar