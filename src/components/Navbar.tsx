import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/",              label: "Home"         },
  { to: "/about",         label: "About"        },
  { to: "/experience",    label: "Experience"   },
  { to: "/projects",      label: "Projects"     },
  { to: "/achievements",  label: "Achievements" },
  { to: "/skills",        label: "Skills"       },
  { to: "/education",     label: "Education"    },
  { to: "/contact",       label: "Contact"      },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        {/* Logo */}
        <NavLink to="/" className="font-display text-xl font-bold tracking-tight text-ink">
          CP<span className="text-accent">.</span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
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
          className="rounded-lg p-2 text-ink-secondary lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-line bg-bg px-6 py-5 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
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
            className="mt-4 block rounded-full bg-accent py-2.5 text-center text-sm font-semibold text-white"
          >
            Let's talk
          </NavLink>
        </motion.div>
      )}
    </motion.header>
  );
}
