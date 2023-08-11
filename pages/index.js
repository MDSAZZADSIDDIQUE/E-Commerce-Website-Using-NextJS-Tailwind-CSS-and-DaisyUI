import FeatureSection from "@/components/FeatureSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import HeroWithFigure from "@/components/HeroWithFigure";
import HeroWithOverlayAnimation from "@/components/HeroWithOverlayAnimation";
import ProductCarousel from "@/components/ProductCarousel";
import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";

export default function Home() {
  return (
    <main>
      <NavBar />
      <HeroWithOverlayAnimation />
      <FeatureSection />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
