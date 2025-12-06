
import HeroSection from "@/components/ui/HeroSection";
import FAQ from "@/components/faq";

import ComingSoon from "@/components/comingsoon";
import Testimonials from "@/components/testimonials";
import Design from "@/components/ui/Design";


import ProgramShowcase from "@/components/ui/carousel";

export default function Home() {
 const images = [
    "/assets/card-1.jpg",

    "/assets/card-3.jpg",
    "/assets/card-4.jpg",
    "/assets/card-5.jpg",
 
  ];

  return (
    <div className="m-0 p-0 ">
      
      <HeroSection />
    <ProgramShowcase />
    <Testimonials/>
     <ComingSoon />
    <FAQ />
    <Design />
   
    </div>
  );
}
