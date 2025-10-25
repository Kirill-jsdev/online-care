"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";

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
          <li className="mt-4">
            <a
              href="https://www.instagram.com/zabota.uz/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-white hover:text-white/80 transition-colors text-lg group"
              onClick={handleLinkClick}
            >
              <InstagramIcon />
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://t.me/zabota_med"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 text-white hover:text-white/80 transition-colors text-lg group"
              onClick={handleLinkClick}
            >
              <TelegramIcon />
              Telegram
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
          <InstagramIcon />
        </a>
        <a
          href="https://t.me/zabota_med"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          aria-label="Telegram"
        >
          <TelegramIcon />
        </a>
      </div>
    </div>
  );
};

export default TopMenu;
