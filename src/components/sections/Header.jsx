import React, { useState } from "react";
export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
      {name: 'skills', href: "#skills"}, 
      {name: 'experience', href: "#experience"}, 
      {name: 'projects', href: "#projects"}, 
      {name: 'about', href: "#about"}, 
        {name: 'contact', href: "#contact"}, 
    ]

    function toggleNavMenu(){
        setIsMenuOpen(prev => !prev)
    }

    return (
      <header class="fixed top-0 w-full bg-[#778069] text-[#f2f2f4] flex justify-between items-center py-4 px-8 z-50">
        <a href="#" className="text-2xl font-bold z-50">
          S
        </a>

        {/* Desktop */}
        <nav class="hidden md:flex space-x-10 text-base">
          {/* show all the links */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              class="hover:text-[#d4d4d8] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile/Hamburger menu icon */}
        <div class="md:hidden flex items-center z-50">
          <button onClick={toggleNavMenu} aria-label="Toggle navigation menu">
            {isMenuOpen === false ? (
              <img
                src="src/assets/hamburger-menu.png"
                alt="navigation menu"
                class="h-7 w-7"
              />
            ) : (
              <img src="src/assets/back.png" alt="close menu" class="h-7 w-7" />
            )}
          </button>
        </div>

        <div
          class={`fixed inset-y-0 right-0 bg-[#778069] z-40 w-50 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col items-center justify-baseline space-y-8 pt-30`}
        >
          {/* add functionality to close out of nav menu by clicking body */}
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleNavMenu}
              class="text-[#f2f2f4] transition-colors duration-200 text-xl"
            >
              {link.name}
            </a>
          ))}
        </div>
      </header>
    );
}