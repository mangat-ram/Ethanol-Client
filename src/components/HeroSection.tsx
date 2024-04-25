"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {

  const [image, setImage] = useState("/illus1.png");

  return (
    <>
      <MaxWidthWrapper
        className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
      >
          <Button className="bg-[#001d3d] hover:bg-[#001d3d]/70 text-2xl rounded-lg p-6 w-40 text-[#ffe5d9] text-center font-cabinet -mt-20 mb-4">Get Started<ArrowRight className='ml-1.5 h-5 w-5' /></Button>
          <h1
          className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl font-featureDeck"
        >
          <p>Efficiently Manage Your </p>
          <p>Projects: Introducing <span className="text-blue-600">Ethanol</span></p>
        </h1>
        <div 
          className="flex justify-center items-center gap-8 mt-10 font-cabinet"
        >
          <Button 
            className="bg-[#bde0fe] hover:bg-[#bde0fe]/50 text-2xl rounded-full p-6 w-40 text-[#003049] text-center font-bold"
            onClick={() => setImage("/illus1.png")}  
          >Dashboard</Button>
          <Button 
            className="bg-[#ffc8dd] hover:bg-[#ffc8dd]/50 text-2xl rounded-full p-6 w-40 text-[#003049] text-center font-bold"
            onClick={() => setImage("/illus2.png")}  
          >Projects</Button>
          <Button 
            className="bg-[#FFB381] hover:bg-[#FFB381]/50 text-2xl rounded-full p-6 w-40 text-[#003049] text-center font-bold"
            onClick={() => setImage("/illus3.png")}  
          >Tasks</Button>
          <Button 
            className="bg-[#92CEAC] hover:bg-[#92CEAC]/50 text-2xl rounded-full p-6 w-40 text-[#003049] text-center font-bold"
            onClick={() => setImage("/illus4.png")}  
          >Molecules</Button>
        </div>
        <div>
          <Image
            src={image}
            alt="coverImage"
            width={3556}
            height={2000}
            quality={100}
            className="w-full rounded-3xl mt-12"
          />
        </div>      
      </MaxWidthWrapper>
    </>
  )
}

export default HeroSection