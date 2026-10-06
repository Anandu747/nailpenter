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

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      <div className="mx-auto max-w-[1440px]">
        <Features />
        <Categories />
        <Services />
      </div>

      <Showcase />

      <div className="mx-auto max-w-[1440px]">
        <About />
        <Highlights />
        <HoursCta />
        <Footer />
      </div>
    </main>
  );
}