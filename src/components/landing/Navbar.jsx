// src/components/landing/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaXmark, FaListCheck } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Live Demo", href: "#demo" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="h-9 w-9 flex items-center justify-center">
              {/* <FaListCheck className="h-5 w-5 text-blue-600" /> */}
              <img src="images/onlylogo.png" alt="IndoTask Logo" className="h-6 w-6" />
            </div>
            <span className="text-xl font-semibold text-gray-900">IndoTask</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name.toLowerCase())}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.name.toLowerCase()
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200">
              Sign in
            </button>
            <button className="px-5 py-2 bg-blue-600 text-white text-sm font-medium rounded-xl hover:bg-blue-700 transition-colors duration-200 shadow-sm hover:shadow">
              Launch App →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <FaXmark className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-base font-medium rounded-lg ${
                    activeLink === link.name.toLowerCase()
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full px-4 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">
                  Sign in
                </button>
                <button className="w-full px-4 py-2 bg-blue-600 text-white text-base font-medium rounded-xl hover:bg-blue-700">
                  Launch App →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;