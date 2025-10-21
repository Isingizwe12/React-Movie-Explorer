
import SearchBar from "./searchBar";

function Navbar() {

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white dark:bg-[#0F172A] text-[#0F172A] dark:text-white shadow-md transition-colors duration-300">
      {/* Left side - Logo */}
      <div>
        <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-400">
        Movie Explorer
        </h2>
      </div>

      {/* Right side - Links and Search */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 font-medium">
          <li className="cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500 dark:hover:text-yellow-400 transition">
            Favorites
          </li>
        </ul>

        {/* Search Bar */}
        <SearchBar/>
      </div>
    </nav>
  );
}

export default Navbar;
