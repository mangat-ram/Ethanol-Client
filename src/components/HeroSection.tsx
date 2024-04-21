import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import Image from "next/image";
import { Button, buttonVariants } from "./ui/button";

const HeroSection = () => {
  return (
    <>
      <MaxWidthWrapper
        className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center"
      >
          <Button
              className={buttonVariants({
              size:"lg",
              className:"-mt-10 text-xl rounded-full"
            })}
          >
              Ethanol is Free
          </Button>
          <h1
          className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl"
        >
          Efficiently Manage Your Projects: Introducing <span className="text-blue-600">Ethanol</span>
        </h1>
      </MaxWidthWrapper>
    </>
  )
}

export default HeroSection