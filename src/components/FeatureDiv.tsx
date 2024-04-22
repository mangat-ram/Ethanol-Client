import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

interface FeatureDivProps{
  heading: string;
  content: string;
  className? :string;
}

const FeatureDiv = ({heading,content,className}: FeatureDivProps) => {

  return (
      <div className={cn("mx-auto w-full max-w-screen-xl px-2.5 md:px-20 p-6 flex flex-col items-center justify-center text-center rounded-3xl mt-8 font-featureDeck",className)}>
        <p className="text-3xl font-bold md:text-3xl lg:text-4xl mb-3">{heading}</p>
        <p className="text-2xl font-semibold text-zinc-800 md:text-2xl lg:text-3xl">{content}</p>
      </div>
  )
}

export default FeatureDiv