import HeroSection from "@/components/HeroSection";
import IntroCard from "@/components/IntroCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MiddleSection from "@/components/MiddleSection";
import Testimonials from "@/components/Testimonials";
import { TestimonialsArr } from "@/lib/data";

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
    </div>
  );
}
