import { motion } from "framer-motion";
import { profile } from "../data/profile";

export function Skills() {
  return (
    <div className="page bg-bg-soft">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full bg-accent-light opacity-60 blur-[120px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="eyebrow">Expertise</span>
          <h1 className="page-title mt-2">Skills & capabilities</h1>
          <p className="page-subtitle">
            Structured by consulting relevance — governance frameworks to GenAI.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="card p-5 sm:p-6"
            >
              <h3 className="eyebrow">{group.label}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill">{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
