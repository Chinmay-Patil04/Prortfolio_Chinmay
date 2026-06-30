import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { profile } from "../data/profile";

export function Achievements() {
  return (
    <div className="page bg-bg-soft">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[450px] w-[450px] rounded-full bg-accent-light opacity-60 blur-[120px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="eyebrow">Recognition</span>
          <h1 className="page-title mt-2">Achievements</h1>
          <p className="page-subtitle">
            Recognised by clients and employers for delivering measurable outcomes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {profile.achievements.map((item, i) => (
            <motion.div
              key={item.award}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="card border-l-2 border-l-accent p-5 sm:p-7"
            >
              <div className="mb-4 inline-flex rounded-xl bg-accent-light p-3 text-accent">
                <Award size={22} />
              </div>
              <h2 className="font-display text-xl font-bold text-ink">{item.award}</h2>
              <p className="mt-1 text-sm font-medium text-accent">{item.date}</p>
              <p className="mt-3 leading-relaxed text-ink-secondary">{item.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-6 text-center"
            >
              <p className="text-accent-gradient font-display text-3xl font-extrabold">{stat.value}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-xs text-ink-muted">{stat.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
