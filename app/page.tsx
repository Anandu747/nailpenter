import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import HoursCta from "@/components/HoursCta";
import Footer from "@/components/Footer";
import WhoWeAre from "@/components/WhoWeAre";
import VisionMission from "@/components/VisionMission";
import Faq from "@/components/Faq";
import Reviews from "@/components/Reviews";
import InstagramReels from "@/components/InstagramReels";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="mx-auto max-w-[1440px]">
        {/* <Features /> */}
        <About />
        <Categories />
        <Services />
      </div>

      <Showcase />

      <div className="mx-auto max-w-[1440px]">
        
        <WhoWeAre />
        <VisionMission />
        <Reviews />
        <Faq />
        {/* <Highlights /> */}
        {/* <HoursCta /> */}
        <InstagramReels />
        <Footer />
      </div>
    </main>
  );
}