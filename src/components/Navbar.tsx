import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Github,
  Linkedin,
  Twitter,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

import { cn } from "../lib/utils";
import { SERVICES, PRODUCTS } from "../data/mockData";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },

    {
      name: "Services",
      path: "/services",
      dropdown: SERVICES.map((item) => ({
        name: item.title,
        path: `/services/${item.id}`,
      })),
    },

    {
      name: "Products",
      path: "/products",
      dropdown: PRODUCTS.map((item) => ({
        name: item.title,
        path: `/products/${item.id}`,
      })),
    },

    { name: "Portfolio", path: "/portfolio" },
    { name: "Insights", path: "/insights" },
    { name: "Our Clients", path: "/#clients" },
  ];

  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 left-0 w-full z-50 bg-slate-950 border-b border-white/10 h-11 hidden lg:flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-6 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>info@pitchforge.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+880 1234-567890</span>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-slate-400">
            <Github className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
            <Linkedin className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
            <Twitter className="w-4 h-4 hover:text-cyan-400 cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav
        className={cn(
          "fixed left-0 w-full z-40 transition-all duration-500 px-6 md:px-12",
          scrolled
            ? "top-0 lg:top-11 py-3 bg-slate-950/80 backdrop-blur-2xl border-b border-white/10"
            : "top-0 lg:top-11 py-5 bg-transparent",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-400 text-black font-black flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition">
              P
            </div>

            <span className="text-xl md:text-2xl font-black tracking-tight text-white">
              PitchForge
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "text-[13px] font-bold uppercase tracking-widest flex items-center gap-1 transition",
                    pathname === link.path
                      ? "text-cyan-400"
                      : "text-slate-300 hover:text-cyan-400",
                  )}
                >
                  {link.name}

                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition duration-300" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-64 rounded-2xl border border-white/10 bg-slate-900 shadow-2xl p-3 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="block px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="group px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm flex items-center gap-2 transition"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="lg:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-8"
            >
              <div className="space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between text-lg font-bold text-white"
                  >
                    {link.name}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-cyan-500 text-black font-bold"
                >
                  Get In Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <div className="pt-6 border-t border-white/10 flex gap-4 text-white">
                  <Github />
                  <Linkedin />
                  <Twitter />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
