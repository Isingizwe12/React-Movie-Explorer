import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation(); // detect current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // if we're not on home page, make navbar solid by default
  const isHomePage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-colors duration-500 ${
        isScrolled || !isHomePage
          ? "bg-black/90 shadow-lg" // solid black for other pages or when scrolled
          : "bg-black/50" // semi-transparent on home page top
      }`}
    >
      {/* Left side - Logo */}
      <div>
        <h2 className="text-2xl font-bold text-red-600 hover:text-red-400 transition">
          Nkiri Movies
        </h2>
      </div>

      {/* Right side - Links and Search */}
      <div className="flex items-center gap-6">
        <div className="hidden md:flex gap-6 font-medium text-white">
          <Link to="/" className="cursor-pointer hover:text-red-400 transition">
            Home
          </Link>
          <Link
            to="/favorites"
            className="cursor-pointer hover:text-red-400 transition"
          >
            Favorites
          </Link>
        </div>

      
      </div>
    </nav>
  );
}

export default Navbar;
