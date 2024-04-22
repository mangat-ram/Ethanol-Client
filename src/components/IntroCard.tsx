import Image from "next/image";
import React from "react"
import plant from "../../public/3.png";
import tree from "../../public/2.png";

const IntroCard = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 p-6 flex justify-between gap-20">
      <div className="w-full h-[450px] bg-zinc-900 rounded-3xl flex flex-col items-center justify-center gap-6">
        <p className="text-white max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl font-featureDeck">What is <span className="text-blue-400">Ethanol</span> ?</p>
        <p className="text-yellow-200 max-w-3xl text-2xl md:text-3xl lg:text-4xl font-featureDeck text-center">ethanol is free open source Project and Task management tool which can unleash the productivity of your Team.</p>
      </div>
      <div className="w-full h-[450px] bg-yellow-600/50 rounded-3xl flex flex-col items-center justify-center gap-6">
        <p className="text-zinc-900 max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl font-featureDeck">Your Ultimate <span className="text-blue-400">Ethanol</span></p>
        <p className="text-zinc-700 max-w-3xl text-2xl md:text-3xl lg:text-4xl font-featureDeck text-center">let no communication gap can interrupt your and your  team's workflow together work to detail on every aspect.</p>
      </div>
    </div>
  )
}

export default IntroCard;