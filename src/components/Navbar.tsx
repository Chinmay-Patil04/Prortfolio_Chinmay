import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/achievements", label: "Achievements" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const unlockScroll = () => {
      const scrollY = document.body.style.top
        ? Math.abs(parseInt(document.body.style.top, 10) || 0)
        : window.scrollY;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    };

    if (!open) {
      unlockScroll();
      return;
    }

    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return unlockScroll;
  }, [open]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="nav-blur fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/95 pt-[env(safe-area-inset-top,0px)]"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-10 lg:px-16">
        <NavLink to="/" className="font-display text-lg font-bold tracking-tight text-ink sm:text-xl">
          CP<span className="text-accent">.</span>
        </NavLink>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition-colors xl:px-4 ${
                    isActive
                      ? "bg-accent-light text-accent-dim"
                      : "text-ink-secondary hover:bg-bg-subtle hover:text-ink"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-accent transition hover:bg-accent-dim lg:inline-block"
        >
          Let's talk
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2.5 text-ink-secondary active:bg-bg-subtle lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mobile-nav-panel overflow-y-auto border-t border-line bg-bg px-4 py-4 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      isActive ? "bg-accent-light text-accent-dim" : "text-ink-secondary hover:text-ink"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-accent py-3 text-center text-sm font-semibold text-white"
          >
            Let's talk
          </NavLink>
        </motion.div>
      )}
    </motion.header>
  );
}
