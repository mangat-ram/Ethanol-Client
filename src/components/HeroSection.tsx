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
              Get Started
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
        <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product-preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded bg-white p-2 sm:p-8 md:p-20 shadow-xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
      </MaxWidthWrapper>
    </>
  )
}

export default HeroSection