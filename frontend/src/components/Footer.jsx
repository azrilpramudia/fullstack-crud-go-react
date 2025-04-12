import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t py-4 mt-10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} CRUD App. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            About
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
