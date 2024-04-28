import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper";
import FeatureDiv from "./FeatureDiv";
import { FeatureArr } from "@/lib/data";

const MiddleSection = () => {

  const FeatureComps = FeatureArr.map((item) => {
    return (
      <FeatureDiv 
        key={item.heading}
        className={item.class} 
        heading={item.heading}
        content={item.content} 
      />
    )
  })

  return (
    <>
      <MaxWidthWrapper className="flex justify-center items-center flex-col">
        <h1
          className="max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl font-featureDeck"
        >
          All in One Team Manager
        </h1>
        <p 
          className="max-w-3xl lg:text-3xl font-featureDeck font-bold mt-2"
        >Unleash the productivity of your team with <span className="text-blue-600">Ethanol</span></p>
        {FeatureComps}
      </MaxWidthWrapper>
    </>
  )
}

export default MiddleSection