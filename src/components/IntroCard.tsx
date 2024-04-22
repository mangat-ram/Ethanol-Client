import React from "react"

const IntroCard = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20 p-6 flex justify-between gap-20">
      <div className="w-full h-[450px] bg-zinc-900 rounded-3xl flex justify-center items-center">
        <p className="text-white max-w-4xl text-3xl font-bold md:text-4xl lg:text-5xl font-featureDeck">What is <span className="text-blue-400">Ethanol</span> ?</p>
        <p></p>
      </div>
      <div className="w-full h-[450px] bg-yellow-600/50 rounded-3xl"></div>
    </div>
  )
}

export default IntroCard;