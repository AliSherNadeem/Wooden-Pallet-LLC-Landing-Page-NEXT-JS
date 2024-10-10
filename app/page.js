// src/app/page.js
import ProductsSection from "@/components/ProductsSection";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <NavBar />
      <HeroSection />
      <ProductsSection />
      <InfoSection />
      <AboutUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
