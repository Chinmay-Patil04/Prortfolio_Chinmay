import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

export function Home() {
  return (
    <div className="page bg-bg-soft">
      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 dot-grid opacity-60" />
      {/* Soft accent glow top-right */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent-light opacity-70 blur-[120px]" />

      <div className="page-inner">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_400px]">

          {/* Left — text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent-light px-4 py-2"
            >
              <Sparkles size={13} className="text-accent" />
              <span className="eyebrow">{profile.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14, duration: 0.55 }}
              className="font-display text-[4rem] font-extrabold leading-[1.03] tracking-tight text-ink md:text-[5rem] lg:text-[5.5rem]"
            >
              <span className="text-accent-gradient">{profile.nameFirst}</span>
              <br />
              {profile.nameLast}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.26 }}
              className="mt-5 text-xl font-semibold text-ink-secondary md:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-5 flex items-center gap-2 text-sm text-ink-muted"
            >
              <MapPin size={13} className="text-accent" />
              {profile.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.48 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-white shadow-accent transition hover:bg-accent-dim"
              >
                View my work <ArrowRight size={15} />
              </Link>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-medium text-ink-secondary shadow-sm transition hover:border-accent/30 hover:text-accent"
              >
                <Download size={15} />
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-7 py-3.5 text-sm font-medium text-ink-secondary shadow-sm transition hover:border-accent/30 hover:text-accent"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>

            {/* Quick-nav pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {[
                { label: "About",        to: "/about"        },
                { label: "Experience",   to: "/experience"   },
                { label: "Projects",     to: "/projects"     },
                { label: "Achievements", to: "/achievements" },
                { label: "Skills",       to: "/skills"       },
                { label: "Education",    to: "/education"    },
                { label: "Contact",      to: "/contact"      },
              ].map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="rounded-full border border-line px-4 py-1.5 text-xs font-medium text-ink-muted transition hover:border-accent/30 hover:bg-accent-light hover:text-accent"
                >
                  {label}
                </Link>
              ))}
            </motion.div>
          </div>

          {/* Right — stats card */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.38, duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="card animate-float rounded-3xl p-7">
              {/* Current role */}
              <div className="mb-5 flex items-center gap-3 border-b border-line pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-light font-display text-sm font-bold text-accent-dim">
                  {profile.experience[0].companyShort}
                </div>
                <div>
                  <p className="eyebrow">Currently at</p>
                  <p className="text-sm font-semibold text-ink">{profile.experience[0].company}</p>
                </div>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-line bg-bg-soft p-4">
                    <p className="text-accent-gradient font-display text-2xl font-extrabold">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium text-ink-secondary leading-snug">{stat.label}</p>
                    <p className="mt-0.5 text-[10px] text-ink-muted">{stat.sub}</p>
                  </div>
                ))}
              </div>

              {/* Open to */}
              <div className="mt-4 rounded-xl border border-accent/20 bg-accent-light px-4 py-3">
                <p className="eyebrow">Open to</p>
                <p className="mt-1 text-sm font-semibold text-ink">PMO · Consulting · Strategy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
