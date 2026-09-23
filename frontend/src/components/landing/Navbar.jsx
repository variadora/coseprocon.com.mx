import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { label: "Inicio", id: "inicio" },
  { label: "Servicios", id: "servicios" },
  { label: "Materiales", id: "materiales" },
  { label: "Contacto", id: "contacto" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#F4F4F0]/85 backdrop-blur-md border-b border-[#0A0A0A]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 flex items-center justify-between h-16 md:h-20">
        <button data-testid="nav-logo" onClick={() => go("inicio")} className="flex items-center gap-3 group">
          <Logo className="w-9 h-9 md:w-10 md:h-10" />
          <div className="leading-none text-left">
            <span className="font-display font-bold text-lg md:text-xl tracking-tighter block">COSEPROCON</span>
            <span className="font-mono-tech text-[9px] tracking-[0.25em] text-[#4A4A4A] hidden md:block">MATERIALES · MAYOREO</span>
          </div>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-link-${l.id}`}
              onClick={() => go(l.id)}
              className="font-mono-tech text-xs uppercase tracking-[0.15em] relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF3B30] group-hover:w-full transition-[width] duration-300" />
            </button>
          ))}
          <button
            data-testid="nav-cta"
            onClick={() => go("contacto")}
            className="font-mono-tech text-xs uppercase tracking-[0.15em] bg-[#0A0A0A] text-[#F4F4F0] px-6 py-3 hover:bg-[#FF3B30] transition-colors duration-300"
          >
            Cotizar
          </button>
        </div>

        <button data-testid="nav-menu-toggle" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[#F4F4F0] border-b border-[#0A0A0A]"
          >
            <div className="px-5 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-${l.id}`}
                  onClick={() => go(l.id)}
                  className="font-display text-2xl uppercase tracking-tight text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
