// src/components/Navbar.jsx
import { useState } from "react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Case Study", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="text-white font-bold text-lg tracking-tight">
          AI<span className="text-blue-500">Dev</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-gray-400 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 border-t border-gray-800 pt-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-blue-600 text-center px-4 py-2 rounded-lg text-sm font-medium"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
