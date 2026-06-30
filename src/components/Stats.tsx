import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Stats() {
  return (
    <section id="stats" className="page-section bg-brand">
      <div className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 60%)"
        }}
      />

      <div className="section-inner">
        <div className="mb-12 text-center">
          <span className="eyebrow text-white/60">Impact at scale</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Numbers that matter
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60 md:text-lg">
            Every metric earned in the field — not in a classroom.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm md:p-8"
            >
              <p className="font-display text-4xl font-extrabold text-white md:text-5xl">{stat.value}</p>
              <p className="mt-3 text-sm font-semibold text-white">{stat.label}</p>
              <p className="mt-1 text-xs text-white/50">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
