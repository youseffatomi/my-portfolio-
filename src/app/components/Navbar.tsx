import { useState, useEffect } from "react";
import { motion, useScroll } from "motion/react";

const navLinks = ["About", "Experience", "Skills", "Projects", "Contact"];

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <motion.span
          className="font-bold text-[var(--blue-primary)] cursor-pointer select-none"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "1.2rem",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.05 }}
        >
          Yousof fatomi
        </motion.span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-sm transition-colors duration-200 relative group ${
                active === link
                  ? "text-[var(--blue-primary)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--blue-primary)]"
              }`}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--yellow-accent)] transition-all duration-300 ${
                  active === link ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </nav>

        {/* Mobile menu */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <span
            className={`block w-6 h-0.5 bg-[var(--blue-primary)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--blue-primary)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-[var(--blue-primary)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-[var(--border)] px-6 py-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-[var(--blue-primary)] py-2"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              {link}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}
