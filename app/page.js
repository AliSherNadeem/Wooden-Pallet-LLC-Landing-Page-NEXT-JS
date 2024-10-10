// src/app/page.js
import ProductsSection from "@/components/ProductsSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";

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
