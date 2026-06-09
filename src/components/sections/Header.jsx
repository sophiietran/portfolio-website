import React, { useState, useEffect } from "react";

export default function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 64); // ~header height
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
      
      {name: 'home', href: "#home"}, 
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
      <>
        <header
          className={`fixed top-0 w-full flex justify-between items-center py-4 px-8 z-50 transition-all duration-500 ${
            isScrolled ? "bg-[#131923]/70 backdrop-blur-md" : "bg-transparent"
          } ${isMenuOpen ? "hidden md:flex" : "flex"}`}
          
        >
          <a href="#">
            <img src="/favicon.svg" alt="leaf icon" className="h-8 w-8 m-0" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10 text-base">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#8a8787] transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Hamburger button - hidden when menu is open*/}
          <div
            className={`md:hidden flex items-center z-50 ${isMenuOpen ? "hidden" : "flex"}`}
          >
            <button onClick={toggleNavMenu} aria-label="Toggle navigation menu">
              <img
                src="/hamburger-menu.png"
                alt="navigation menu"
                className="h-7 w-7"
              />
            </button>
          </div>
        </header>

        {/* Show close button when side menu is displayed */}
        {isMenuOpen && (
          <div className="fixed top-4 right-8 z-50 md:hidden">
            <button onClick={toggleNavMenu} aria-label="Close navigation menu">
              <img src="x-thin.svg" alt="close menu" className="h-8 w-8" />
            </button>
          </div>
        )}

        {/* Mobile drawer  */}
        <div
          className={`fixed inset-y-0 right-0 bg-[#ffffff] text-[#131923] z-40 w-80 transform transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col items-left justify-baseline space-y-6 pt-30 pl-6`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleNavMenu}
              className="transition-colors duration-200 text-l"
            >
              //{link.name}
            </a>
          ))}
        </div>
      </>
    );
}