"use client";

import Link from "next/link";
import { useState } from "react";
import { FaHome, FaBlog, FaPhoneAlt, FaInfoCircle } from "react-icons/fa"; // Importing icons for each link

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 text-white">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold bg-gradient-to-r text-white bg-clip-text "
            >
              ATech
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8">
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "Blogs", icon: <FaBlog /> },
              { name: "Contact", icon: <FaPhoneAlt /> },
              { name: "About", icon: <FaInfoCircle /> },
            ].map(({ name, icon }) => (
              <Link
                key={name}
                href={name === "Home" ? "/" : `/${name.toLowerCase().replace(/\s/g, "")}`}
                className="relative group flex items-center space-x-2 px-3 py-2"
              >
                <span className="text-lg">{icon}</span>
                <span className="relative z-10 text-gray-100 group-hover:text-teal-200 transition-colors">
                  {name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-gray-100 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="py-2 space-y-1">
            {[
              { name: "Home", icon: <FaHome /> },
              { name: "Blogs", icon: <FaBlog /> },
              { name: "Contact Us", icon: <FaPhoneAlt /> },
              { name: "About", icon: <FaInfoCircle /> },
            ].map(({ name, icon }) => (
              <Link
                key={name}
                href={name === "Home" ? "/" : `/${name.toLowerCase().replace(/\s/g, "")}`}
                className="block px-3 py-2 text-gray-100 hover:bg-gradient-to-r hover:from-teal-500/10 hover:via-purple-500/10 hover:to-pink-500/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg">{icon}</span>
                <span>{name}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
