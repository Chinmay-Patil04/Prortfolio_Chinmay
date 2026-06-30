import { useEffect, useState } from "react";

const sections = [
  { id: "hero",       label: "Home" },
  { id: "stats",      label: "Impact" },
  { id: "about",      label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "education",  label: "Education" },
  { id: "contact",    label: "Contact" },
];

export function SideNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
      aria-label="Page navigation"
    >
      {sections.map(({ id, label }) => {
        const isActive = active === id;
        return (
          <a
            key={id}
            href={`#${id}`}
            title={label}
            className="group flex items-center gap-2"
          >
            {/* Label */}
            <span
              className={`text-[10px] font-mono font-semibold uppercase tracking-widest opacity-0 transition-all duration-200 group-hover:opacity-100 ${
                isActive ? "text-brand" : "text-white/40"
              }`}
            >
              {label}
            </span>
            {/* Dot */}
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "h-2.5 w-2.5 bg-brand shadow-glow"
                  : "h-2 w-2 bg-white/25 group-hover:bg-white/50"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
