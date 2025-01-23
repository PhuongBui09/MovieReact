import { useState } from "react";

const Header = ({ onSearch }) => {
  const [textSearch, setTextSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  document.addEventListener("click", (e) => {});

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      {/* Logo + Navigation */}
      <div className="flex items-center space-x-4">
        <h1 className="text-[25px] uppercase font-bold text-red-700">
          React-Movie
        </h1>

        {/* Menu trên màn hình lớn */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-4">
          <a href="#" className="text-orange-600 font-bold ct-bottom-underline">
            Home
          </a>
          <a href="#" className="text-white ct-bottom-underline">
            About
          </a>
          <a href="#" className="text-white ct-bottom-underline">
            Contact
          </a>
        </nav>
      </div>

      {/* Search box trên màn hình lớn */}
      <div className="hidden lg:flex lg:items-center lg:space-x-4">
        <input
          className="p-2 rounded-md"
          type="text"
          placeholder="Search"
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button
          className="py-2 px-3 bg-red-600 rounded-md text-white font-bold"
          onClick={() => onSearch(textSearch)}
        >
          Search
        </button>
      </div>

      {/* Menu icon cho mobile */}
      <div
        className="lg:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      {/* Dropdown menu cho mobile */}
      {isOpen && (
        <div className="absolute top-[60px] right-0 w-full bg-black flex flex-col items-center space-y-4 py-4 lg:hidden z-50 animate-slideDown">
          <a href="#" className="text-orange-600 font-bold">
            Home
          </a>
          <a href="#" className="text-white">
            About
          </a>
          <a href="#" className="text-white">
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
