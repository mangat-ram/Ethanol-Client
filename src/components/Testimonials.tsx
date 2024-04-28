import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
      <Card className={cn("flex flex-col w-[30%]", className)}>
        <CardHeader className="flex text-center flex-row justify-between gap-4">
          <div className="relative w-16 h-16">
            <Image className="absolute rounded-lg inset-0 w-full h-full object-cover" src={avatar} alt="cn" quality={100} width={64} height={64} />
          </div>
          <div className="mr-16">
            <CardTitle>{name}</CardTitle>
            <CardTitle className="text-sm font-medium">{role}</CardTitle>
            <CardTitle className="text-sm font-bold">{companyName}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-[1.04rem] text-left">{review}</p>
        </CardContent>
      </Card>
  )
}

export default Testimonials