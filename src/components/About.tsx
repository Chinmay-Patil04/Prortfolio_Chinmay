import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { AnimatedSection, SectionHeading } from "./ui";

export function About() {
  return (
    <AnimatedSection id="about">
      <SectionHeading
        label="About"
        title="Delivering at national scale"
        description="Experienced in managing multi-vendor coordination, service acceptance, revenue enablement, and 24×7 operations handover."
      />

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed text-gray-300 md:text-xl"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Beyond work</p>
          <ul className="mt-4 space-y-3">
            {profile.interests.map((interest) => (
              <li
                key={interest}
                className="flex items-center gap-3 text-gray-300 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent"
              >
                {interest}
              </li>
            ))}
          </ul>
          <div className="mt-6 border-t border-surface-border/50 pt-6">
            <p className="text-sm text-gray-500">PMP certified (in progress)</p>
            <p className="mt-1 text-sm font-medium text-gray-300">
              Strong data-driven reporting & governance mindset
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
