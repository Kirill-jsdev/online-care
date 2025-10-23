"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

const TopMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav");
      const button = document.getElementById("menu-button");
      if (nav && !nav.contains(event.target as Node) && !button?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-between z-20 items-center px-4 sm:px-8 py-4 absolute w-full">
      <Logo />

      {/* Mobile menu button */}
      <button
        id="menu-button"
        className="lg:hidden relative z-50 p-2 text-white hover:text-white/80 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-6 relative">
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "rotate-45 top-3" : "top-1"}`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 top-3 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${isOpen ? "-rotate-45 top-3" : "top-5"}`}
          />
        </div>
      </button>

      {/* Desktop navigation */}
      <nav className="hidden lg:block text-white">
        <ul className="flex gap-8">
          <li>
            <a href="#about-us" className="cursor-pointer hover:text-white/80 transition-colors">
              О нас
            </a>
          </li>
          <li>
            <a href="#services" className="cursor-pointer hover:text-white/80 transition-colors">
              Наши услуги
            </a>
          </li>
          <li>
            <a href="#cta" className="cursor-pointer hover:text-white/80 transition-colors">
              Связаться с нами
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile navigation */}
      <nav
        id="mobile-nav"
        className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-slate-900/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        <ul className="flex flex-col gap-4 pt-20 px-6">
          <li>
            <a href="#about-us" className="block py-2 text-white hover:text-white/80 transition-colors text-lg" onClick={handleLinkClick}>
              О нас
            </a>
          </li>
          <li>
            <a href="#services" className="block py-2 text-white hover:text-white/80 transition-colors text-lg" onClick={handleLinkClick}>
              Наши услуги
            </a>
          </li>
          <li>
            <a href="#cta" className="block py-2 text-white hover:text-white/80 transition-colors text-lg" onClick={handleLinkClick}>
              Связаться с нами
            </a>
          </li>
        </ul>
      </nav>

      {/* Instagram icon - show on desktop, move to mobile menu on small screens */}
      <div className="hidden lg:flex gap-3 animate-fade-in-up delay-100">
        <a
          href="https://www.instagram.com/zabota.uz/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <svg className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>

      {/* Mobile Instagram link - show inside mobile menu */}
      <div className={`lg:hidden fixed bottom-8 right-8 ${isOpen ? "block" : "hidden"}`}>
        <a
          href="https://www.instagram.com/zabota.uz/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          onClick={handleLinkClick}
        >
          <svg className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
