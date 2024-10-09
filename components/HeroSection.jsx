// src/components/HeroSection.js
"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
  return (
    <div id="home" className="relative h-[90vh]">
      {" "}
      <Image
        src="/images/hero-background.jpg"
        alt="Wooden pallets background"
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="text-amber-50 max-w-2xl ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            AbdulRaheem Diwaya Carpentry W.Shop LLC
          </h1>
          <p className="text-lg md:text-xl mb-8">
            We deal in buying & selling of wooden pallets, boxes and crates.
          </p>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="bg-amber-600 text-amber-50 py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition duration-300 cursor-pointer inline-block"
          >
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
