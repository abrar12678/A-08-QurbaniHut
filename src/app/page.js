import FeaturedAnimals from "@/components/FeaturedAnimals";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (

    <div className="bg-white min-h-screen">
      <HeroSection />
      <FeaturedAnimals />
    </div>
  );
}