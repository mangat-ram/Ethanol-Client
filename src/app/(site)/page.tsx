import HeroSection from "@/components/HeroSection";
import IntroCard from "@/components/IntroCard";
import MiddleSection from "@/components/MiddleSection";
import Testimonials from "@/components/Testimonials";
import image from "../../../public/pro1.jpg"

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroCard />
      <MiddleSection />
      <Testimonials avatar={image} name="Fraser McGurk" role="CEO" companyName="ZooPe Inc." review="Ethanol is very helpful tool for our team it has given us more clarity about how we will start our project how to proceed and how everyone is going to do their part and track progress of every department and tasks assigned to each person." />
    </div>
  );
}
