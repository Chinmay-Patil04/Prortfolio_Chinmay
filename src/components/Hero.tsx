import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent"
          >
            <Sparkles size={14} />
            {profile.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {profile.name.split(" ").map((word, i) => (
              <span key={i} className={i === 0 ? "text-gradient" : ""}>
                {word}{" "}
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 text-xl text-gray-300 md:text-2xl"
          >
            {profile.title}
            <span className="text-gray-500"> · </span>
            <span className="text-gray-400">{profile.subtitle}</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 flex items-center gap-2 text-gray-400"
          >
            <MapPin size={16} className="text-accent" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#experience"
              className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-surface transition hover:bg-accent-glow hover:shadow-lg hover:shadow-accent/20"
            >
              View my work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full px-7 py-3 text-sm font-medium text-gray-200 transition hover:border-accent/40 hover:text-accent"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="relative hidden lg:block"
        >
          <div className="glass animate-float relative rounded-3xl p-8">
            <div className="absolute -right-3 -top-3 h-24 w-24 rounded-full bg-accent/20 blur-2xl" />
            <p className="font-mono text-xs uppercase tracking-widest text-accent">Impact at scale</p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {profile.highlights.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-surface-border/50 bg-surface-raised/60 p-4"
                >
                  <p className="text-sm font-medium leading-snug text-gray-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-4">
              <p className="text-xs text-gray-400">Currently</p>
              <p className="mt-1 font-semibold text-white">{profile.experience[0].company}</p>
              <p className="text-sm text-gray-400">{profile.experience[0].role}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 transition hover:text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
