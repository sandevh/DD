import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 px-4 sm:px-8 py-4 flex justify-between items-center relative">
      <Link
        to="/"
        className="relative z-10 text-[#800000] text-2xl font-black tracking-tight hover:text-[#600000] transition-all duration-300 hover:scale-105"
      >
        DoubleDrift
      </Link>

      <button
        className="sm:hidden relative z-20 text-maroon-primary"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {open ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div className="hidden sm:flex relative z-10 space-x-8">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="group relative text-gray-700 text-sm uppercase tracking-wide hover:text-[#800000] transition-all duration-300 py-2 px-1 font-bold"
          >
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#800000] to-[#a00000] group-hover:w-full transition-all duration-300 ease-out"></span>
          </Link>
        ))}
      </div>

      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg sm:hidden z-10">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-6 py-4 text-maroon-primary font-bold border-b border-gray-100 hover:bg-gray-50"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
