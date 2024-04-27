import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface TestimonialsProps{
  avatar: any,
  name: string,
  role: string,
  companyName: string,
  review: string,
  className? : string
}

const Testimonials = ({avatar,name,role,companyName,review,className}:TestimonialsProps) => {
  return (
    // <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20 p-6 flex flex-col items-center justify-center text-center rounded-3xl mt-8 font-featureDeck",className)}>
      <Card className={cn("w-[33%] h-60 flex font-featureDeck text-center items-center bg-yellow-600",className)}>
        <CardHeader className="flex items-center">
          <div className="w-24 h-24 relative">
            <Image className="absolute rounded-full inset-0 w-full h-full object-cover" src={avatar} alt="cn" quality={100} width={1987} height={3000}/>
          </div>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardTitle className="text-sm font-medium">{role}</CardTitle>
            <CardTitle className="text-sm font-bold">{companyName}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-[1.04rem] text-left pt-6">{review}</p>
        </CardContent>
      </Card>
    // </div>
  )
}

export default Testimonials