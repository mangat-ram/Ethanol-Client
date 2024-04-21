import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";
import CustomTabs from "./CustomTabs";

const HeroSection = () => {
  return (
    <>
      <MaxWidthWrapper
        className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
      >
          <Button
              className={buttonVariants({
              size:"lg",
              className:"-mt-10 mb-4 text-xl rounded-full"
            })}
          >
              Ethanol is Free
          </Button>
          <h1
          className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl font-featureDeck"
        >
          <p>Efficiently Manage Your </p>
          <p>Projects: Introducing <span className="text-blue-600">Ethanol</span></p>
        </h1>
        <div className="flex justify-center items-center gap-8 mt-10 font-cabinet">
          <CustomTabs name="Dashboard" className="bg-[#bde0fe] hover:bg-[#bde0fe]/50"></CustomTabs>
          <CustomTabs name="Tasks" className="bg-[#ffc8dd] hover:bg-[#ffc8dd]/50"></CustomTabs>
          <CustomTabs name="Projects" className="bg-[#FFB381] hover:bg-[#FFB381]/50"></CustomTabs>
          <CustomTabs name="Molecules" className="bg-[#92CEAC] hover:bg-[#92CEAC]/50"></CustomTabs>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

export default HeroSection