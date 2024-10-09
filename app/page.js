// src/app/page.js
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProductsSection from "@/components/ProductsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <NavBar />
      <HeroSection />
      <ProductsSection />
    </main>
  );
}
