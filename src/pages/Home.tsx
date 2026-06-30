import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { StatsCard } from "../components/StatsCard";
import { profile } from "../data/profile";

export function Home() {
  return (
    <div className="page bg-bg-soft">
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent-light opacity-70 blur-[120px]" />

      <div className="page-inner">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px] lg:items-center lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-accent/20 bg-accent-light px-3 py-2 sm:mb-7 sm:px-4"
            >
              <Sparkles size={13} className="shrink-0 text-accent" />
              <span className="eyebrow">{profile.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.55 }}
              className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[5.5rem]"
            >
              <span className="text-accent-gradient">{profile.nameFirst}</span>
              <br />
              {profile.nameLast}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-4 text-lg font-semibold text-ink-secondary sm:mt-5 sm:text-xl md:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="mt-3 max-w-lg text-sm leading-relaxed text-ink-muted sm:mt-4 sm:text-base md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 flex items-start gap-2 text-sm text-ink-muted sm:mt-5"
            >
              <MapPin size={13} className="mt-0.5 shrink-0 text-accent" />
              <span>{profile.location}</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap"
            >
              <Link
                to="/experience"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-accent transition hover:bg-accent-dim sm:w-auto"
              >
                View my work <ArrowRight size={15} />
              </Link>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                download="Chinmay_Patil_Resume.pdf"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-medium text-ink-secondary shadow-sm transition hover:border-accent/30 hover:text-accent active:scale-[0.98] sm:w-auto"
              >
                <Download size={15} />
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-medium text-ink-secondary shadow-sm transition hover:border-accent/30 hover:text-accent sm:w-auto"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-2 sm:mt-10"
            >
              {[
                { label: "About", to: "/about" },
                { label: "Experience", to: "/experience" },
                { label: "Projects", to: "/projects" },
                { label: "Achievements", to: "/achievements" },
                { label: "Skills", to: "/skills" },
                { label: "Education", to: "/education" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-muted transition hover:border-accent/30 hover:bg-accent-light hover:text-accent sm:px-4"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="w-full lg:sticky lg:top-28"
          >
            <StatsCard animate />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
