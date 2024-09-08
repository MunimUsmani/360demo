import Hero from "@/app/components/Hero";
import Card from "@/app/components/Card";
import Highlight from "./components/Highlight";
import Grid from "@/app/components/Grid";
import Scroll from "./components/Scroll";
import Wording from "./components/Wording";
import Carousel from "@/app/components/Carousel";
import Footer from "./components/Footer";
import TechAndTools from "./components/TechAndTools";
// import "../styles/fonts.css";

export default function Home() {
  return (
    <div>
      <Hero />
      <Card />
      <Highlight />
      <Grid />
      <TechAndTools />
      <Scroll />
      <Wording />
      <Scroll />
      <Carousel />
      <Footer />
    </div>
  );
}
