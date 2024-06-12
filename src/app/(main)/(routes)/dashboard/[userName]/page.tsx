import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SideBar from "@/components/SideBar"
import React from "react"
import Navigation from "../../../_components/navigation"
import { useParams, usePathname } from "next/navigation"

const MainPage = () => {

  const params = useParams();
  const pathname = usePathname();

  return (
    <Navigation />
  )
}

export default MainPage