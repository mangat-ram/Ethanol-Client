import CustomCard from "@/components/CustomCard";
import HeroSection from "@/components/HeroSection";
import IntroCard from "@/components/IntroCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MiddleSection from "@/components/MiddleSection";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { CardContent, CardTitle } from "@/components/ui/card";
import { PRICING_PLANS, TestimonialsArr } from "@/lib/data";
import { pricingCardsArr } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";
import Check from "../../../public/check.svg"
import Diamond from "../../../public/diamond.svg" 

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroCard />
      <MiddleSection />
      <h1 className="text-5xl p-12 flex justify-center font-bold font-featureDeck">Testimonials from Experts</h1>
      <MaxWidthWrapper className="flex justify-center flex-wrap gap-12 font-featureDeck">
        {TestimonialsArr.map((i) => {
          return (
            <Testimonials key={i.companyName} avatar={i.avatar} name={i.name} companyName={i.companyName} className={i.bg} role={i.role} review={i.review} />
          )
        })}
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        {pricingCardsArr.map((card) => (
          <CustomCard
            key={card.planType}
            className={clsx('w-[300px] rounded-2xl bg-amber-100 dark:bg-black/95 background-blur-3xl relative',{'border-[3px] border-brand-primaryPurple/70':card.planType === PRICING_PLANS.proplan})}
            cardHeader={
              <CardTitle className='text-3xl font-semibold'>{card.planType ===    PRICING_PLANS.proplan && (<>
                  <div
                    className='hidden dark:block w-full blur-[120px] rounded-full h-32 absolute bg-brand-primaryPurple -z-10 top-0'
                  />
                  <Image src={Diamond} alt='Pro plan icon' className='absolute top-6 right-6' />
                  </>)}
                    {card.planType}
                  </CardTitle>
            }
            cardContent={
              <CardContent
                  className='p-0'
                >
                  <span className='font-normal text-2xl'>${card.price}</span>
                  {+card.price > 0 ? (<span className='dark:text-washed-purple-800 ml-1'>/mo</span>): ('')}
                  <p className='dark:text-washed-purple-800'></p>
                  <Button
                    variant={'secondary'}
                    className='whitespace-nowrap w-full mt-4 border-[3px] border-amber-300'>
                    {card.planType === PRICING_PLANS.proplan ? 'Go Pro' : 'Get Started'}
                  </Button>
                </CardContent>
            }
            cardFooter={
                <ul className='font-normal flex mb-2 flex-col gap-4'>
                  <small>
                    {card.highlightFeature}
                  </small>
                  {card.freatures.map(feature => (
                    <li
                      key={feature}
                      className='flex items-center gap-2'
                    >
                      <Image src={Check} alt='checkIcon' />
                      {feature}
                    </li>
                  ))}
                </ul>
              }
            ></CustomCard> 
        ))}
      </MaxWidthWrapper>
    </div>
  );
}
