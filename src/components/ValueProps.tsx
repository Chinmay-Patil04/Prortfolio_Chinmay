import { motion } from "framer-motion";
import { BarChart3, Target, Users, type LucideIcon } from "lucide-react";
import { profile } from "../data/profile";

const iconMap: Record<string, LucideIcon> = { Target, Users, BarChart3 };

export function ValueProps() {
  return (
    <section id="about" className="page-section bg-panel">
      <div className="section-inner">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Left — text */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow text-brand-dim"
            >
              About me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl lg:text-5xl"
            >
              Delivery. Governance.{" "}
              <span className="text-brand-gradient">Results.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-brand/20 bg-brand-light px-4 py-1.5 text-sm font-medium text-brand-dim"
                >
                  {interest}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — pillars */}
          <div className="grid gap-4">
            {profile.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon] ?? Target;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card flex items-start gap-5 p-6"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">{pillar.body}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
