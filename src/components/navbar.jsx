import React, { useState, useEffect } from "react";
import SearchBar from "./searchBar";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed  top-0 w-full z-50 flex justify-between items-center px-8 py-4 transition-colors duration-500 ${
        isScrolled ? "bg-black/80 shadow-lg" : "bg-transparent"
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
        <ul className="hidden md:flex gap-6 font-medium text-white">
          <li className="cursor-pointer hover:underline transition">Home</li>
          <li className="cursor-pointer hover:underline transition">
            Favorites
          </li>
        </ul>

        {/* Search Bar */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

       
      </div>
    </nav>
  );
}

export default Navbar;
