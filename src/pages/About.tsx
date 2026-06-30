import { motion } from "framer-motion";
import { BarChart3, Target, Users, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../data/profile";

const iconMap: Record<string, LucideIcon> = { Target, Users, BarChart3 };

export function About() {
  return (
    <div className="page bg-bg">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[400px] w-[400px] rounded-full bg-accent-light opacity-60 blur-[100px]" />

      <div className="page-inner">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="eyebrow"
            >
              About me
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-3 font-display text-3xl font-bold text-ink sm:mt-3 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Delivery.{" "}
              <span className="text-accent-gradient">Governance.</span>
              <br />
              Results.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base leading-relaxed text-ink-secondary md:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28 }}
              className="mt-7"
            >
              <p className="eyebrow mb-3">Interests</p>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-sm font-medium text-accent-dim"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.38 }}
              className="mt-8"
            >
              <Link
                to="/experience"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-accent transition hover:bg-accent-dim"
              >
                See my experience →
              </Link>
            </motion.div>
          </div>

          {/* Right — three pillars */}
          <div className="grid gap-4">
            {profile.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] ?? Target;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.14 + i * 0.1 }}
                  className="card flex items-start gap-5 p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-secondary">{pillar.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
