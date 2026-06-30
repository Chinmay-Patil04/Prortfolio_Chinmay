import { motion } from "framer-motion";
import { ArrowDown, Download, Linkedin, MapPin, Sparkles } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section id="hero" className="page-section bg-dark">
      <div className="pointer-events-none absolute inset-0 grid-dark" />
      <div className="glow-blue -left-40 top-1/4 h-[500px] w-[500px]" />
      <div className="glow-blue right-0 bottom-0 h-[350px] w-[350px] opacity-60" />

      <div className="section-inner">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_400px]">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-brand/30 bg-brand/10 px-4 py-2"
            >
              <Sparkles size={13} className="text-brand" />
              <span className="eyebrow text-brand">{profile.badge}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.65 }}
              className="font-display text-[4rem] font-extrabold leading-[1.03] tracking-tight md:text-[5rem] lg:text-[5.5rem]"
            >
              <span className="text-brand-gradient">{profile.nameFirst}</span>
              <br />
              <span className="text-white">{profile.nameLast}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-5 text-xl font-semibold text-white/80 md:text-2xl"
            >
              {profile.headline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-4 max-w-lg text-base leading-relaxed text-white/45 md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.52 }}
              className="mt-5 flex items-center gap-2 text-sm text-white/35"
            >
              <MapPin size={13} className="text-brand/70" />
              {profile.location}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#experience"
                className="rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white shadow-glow transition hover:bg-brand-dim"
              >
                View my work
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-brand/40 hover:bg-white/10"
              >
                <Download size={15} />
                Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-brand/40 hover:bg-white/10"
              >
                <Linkedin size={15} />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — stats float card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="hidden lg:block"
          >
            <div className="card-dark animate-float rounded-3xl p-7">
              <div className="mb-5 flex items-center gap-3 border-b border-dark-border pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/20 font-display text-sm font-bold text-brand">
                  {profile.experience[0].companyShort}
                </div>
                <div>
                  <p className="eyebrow text-white/35">Currently at</p>
                  <p className="text-sm font-semibold text-white">{profile.experience[0].company}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {profile.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-dark-border bg-dark-mid p-4">
                    <p className="text-brand-gradient font-display text-2xl font-extrabold">{stat.value}</p>
                    <p className="mt-1 text-xs font-medium leading-snug text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-brand/20 bg-brand/8 px-4 py-3">
                <p className="eyebrow text-brand/60">Open to</p>
                <p className="mt-1 text-sm font-semibold text-white">PMO · Consulting · Strategy</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25 transition hover:text-brand"
          aria-label="Next section"
        >
          <ArrowDown size={18} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
