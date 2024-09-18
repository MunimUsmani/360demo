import Navbar from "@/app/components/Navbar";
import HeroAbout from "@/app/components/HeroAbout";
import Card from "@/app/components/Card";
import Footer from "@/app/components/Footer";
import VisionSection from "@/app/components/visionSection";

export default function About() {
  return (
    <div>
      <Navbar />
      <HeroAbout />
      <VisionSection />
      <Card />
      <Footer />
    </div>
  );
}
