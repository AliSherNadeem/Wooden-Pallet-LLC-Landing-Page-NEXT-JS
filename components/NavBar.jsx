// src/components/NavBar.js
"use client";

import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Products", to: "products" },
    { name: "About Us", to: "about" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <nav className="bg-amber-100 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold text-amber-900 cursor-pointer"
          >
            AbdulRaheem Diwaya
          </ScrollLink>
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="text-sm font-semibold text-amber-800 hover:text-amber-900 cursor-pointer transform hover:scale-105 duration-200"
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-amber-900">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.name}
                to={item.to}
                smooth={true}
                duration={500}
                className="block py-2  text-amber-800 hover:text-amber-950 cursor-pointer"
                onClick={toggleMenu}
              >
                {item.name}
              </ScrollLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
