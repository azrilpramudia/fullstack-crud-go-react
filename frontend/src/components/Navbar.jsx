import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center h-[8vh] text-md font-bold justify-between px-5 shadow-md bg-white relative z-50">
      <figure>
        <figcaption>
          <Link to="/" className="text-xl font-bold">
            Logo
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

      {/* Navigation Links */}
      <nav
        className={`
          flex-col items-center gap-4 py-4 bg-white w-full absolute left-0 top-[8vh] shadow-md
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "flex opacity-100 translate-y-0"
              : "hidden opacity-0 -translate-y-2"
          }
          md:static md:flex md:flex-row md:w-auto md:gap-5 md:shadow-none md:opacity-100 md:translate-y-0
        `}
      >
        <Link to="/add" onClick={() => setIsOpen(false)}>
          Add Data
        </Link>
        <Link to="/view" onClick={() => setIsOpen(false)}>
          View Data
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
