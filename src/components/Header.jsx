import React, { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
  FaHome,
  FaInfoCircle,
  FaBox,
  FaUsers,
  FaFlask,
  FaPhoneAlt,
} from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaInfoCircle />, href: "#about" },
    { name: "Process", icon: <FaFlask />, href: "#process" },
    { name: "Portfolio", icon: <FaUsers />, href: "#portfolio" },
    { name: "Contact", icon: <FaPhoneAlt />, href: "#contact" },
  ];

  const waterDropImage = "images/addpluslogo.png";

  return (
    <>
      {/* Header - LIGHT BACKGROUND */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-cyan-50 backdrop-blur-md shadow-lg py-3 border-b border-gray-200"
            : "bg-cyan-50 backdrop-blur-sm py-5"
        } ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img
                src={waterDropImage}
                alt="Adplus Aqua Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="text-2xl hidden">💧</span>
            </div>
            <div className="text-gray-800">
              <h1 className="text-xl sm:text-2xl font-bold tracking-wide">
                Adplus<span className="text-cyan-600">.aqua</span>
              </h1>
              <p className="text-xs text-gray-600 hidden sm:block">
                Custom Branded Water
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative px-3 xl:px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-cyan-50 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm text-cyan-600">{item.icon}</span>
                  <span className="text-sm">{item.name}</span>
                </span>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-cyan-600 transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button + Social Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-sm"
            >
              Get Quote
            </a>

            <div className="flex gap-3 text-gray-700 text-xl">
              <a
                href="https://www.instagram.com/adplus.aqua?igsh=cGUwYzNsNTd0NWJx&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 hover:scale-110 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919458381868"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 hover:scale-110 transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Hamburger Button */}
          <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar - LIGHT BACKGROUND */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white z-50 transform transition-transform duration-300 flex flex-col shadow-2xl lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="bg-cyan-50 text-gray-800 flex justify-between items-center p-6 shadow-md border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={waterDropImage}
                alt="Adplus Aqua Logo"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="text-xl hidden">💧</span>
            </div>
            <div>
              <h2 className="text-xl font-bold">
                Adplus<span className="text-cyan-600">.aqua</span>
              </h2>
              <p className="text-xs text-gray-600">Custom Branded Water</p>
            </div>
          </div>
          <button
            className="text-2xl hover:rotate-90 transition-transform duration-300 text-cyan-600"
            onClick={closeMobileMenu}
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 border border-gray-200 hover:bg-cyan-50 hover:border-cyan-200 hover:translate-x-1 transition-all duration-200 text-gray-700 font-medium"
            >
              <span className="text-xl text-cyan-600">{item.icon}</span>
              <span>{item.name}</span>
            </a>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center mb-4"
          >
            Get Free Quote
          </a>

          <p className="text-gray-600 text-sm mb-3 text-center font-medium">
            💧 Purity with Personalization
          </p>

          <div className="flex justify-center gap-6 text-gray-700 text-2xl">
            <a
              href="https://www.instagram.com/adplus.aqua?igsh=cGUwYzNsNTd0NWJx&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 hover:scale-125 transition-all duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919458381868"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 hover:scale-125 transition-all duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">📞 +91 9458381868</p>
            <p className="text-gray-600 text-xs">📧 adplus.aqua@gmail.com</p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;