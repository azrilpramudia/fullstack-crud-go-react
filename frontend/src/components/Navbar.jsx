import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center h-[8vh] text-md font-bold justify-between px-5 shadow-md bg-white relative z-50">
      <figure>
        <figcaption>
          <Link to="/" className="text-xl font-bold">
            CRUD App
          </Link>
        </figcaption>
      </figure>

      {/* Hamburger Button for Mobile */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Navigation Links as Buttons */}
      <nav
        className={`flex-col items-center gap-2 py-2 w-full absolute left-0 top-[8vh] 
          transition-all duration-300 ease-in-out bg-transparent
          ${
            isOpen
              ? "flex opacity-100 translate-y-0 bg-white shadow-md"
              : "hidden opacity-0 -translate-y-2"
          }
          md:static md:flex md:flex-row md:w-auto md:gap-3 md:shadow-none md:opacity-100 md:translate-y-0 md:bg-transparent
        `}
      >
        <Link
          to="/add"
          onClick={() => setIsOpen(false)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Data
        </Link>
        <Link
          to="/view"
          onClick={() => setIsOpen(false)}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
        >
          View Data
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
