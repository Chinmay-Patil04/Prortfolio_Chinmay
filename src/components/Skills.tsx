import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { AnimatedSection, SectionHeading } from "./ui";

export function Skills() {
  return (
    <AnimatedSection id="skills">
      <SectionHeading
        label="Expertise"
        title="Skills & tools"
        description="From network rollouts to stakeholder management — built for enterprise delivery."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-gray-500">
            Core competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="glass rounded-full px-4 py-2 text-sm text-gray-200 transition hover:border-accent/40 hover:text-accent"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-gray-500">
            Tools & technologies
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profile.tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-xl border border-surface-border/40 bg-surface-card/60 px-4 py-3 text-center text-sm font-medium text-gray-300 transition hover:border-accent/30 hover:text-white"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
