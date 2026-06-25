import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection, SectionHeading } from "./ui";

export function Experience() {
  return (
    <AnimatedSection id="experience" className="bg-surface-raised/30">
      <SectionHeading
        label="Experience"
        title="Career journey"
        description="4+ years driving telecom and IT infrastructure delivery for enterprise banking clients."
      />

      <div className="relative space-y-0">
        <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent md:block" />

        {profile.experience.map((job, index) => (
          <motion.article
            key={`${job.company}-${job.period}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.08 }}
            className="relative grid gap-6 pb-12 md:grid-cols-[40px_1fr] md:gap-8"
          >
            <div className="relative z-10 hidden md:flex md:justify-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-surface-card">
                <Briefcase size={16} className="text-accent" />
              </div>
            </div>

            <div className="glass group rounded-2xl p-6 transition hover:border-accent/30 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors">
                    {job.role}
                  </h3>
                  <p className="mt-1 text-accent">{job.company}</p>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <p>{job.period}</p>
                  <p className="mt-0.5">{job.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3">
                {job.highlights.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-relaxed text-gray-400 md:text-base"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </AnimatedSection>
  );
}
