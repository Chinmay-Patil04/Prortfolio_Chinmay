import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection, SectionHeading } from "./ui";

export function Education() {
  return (
    <AnimatedSection id="education" className="bg-surface-raised/30">
      <SectionHeading label="Background" title="Education & certifications" />

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500">
            <GraduationCap size={14} />
            Education
          </h3>
          <div className="space-y-4">
            {profile.education.map((edu) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-lg font-semibold text-white">{edu.degree}</p>
                <p className="mt-1 text-accent">{edu.school}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {edu.year} · {edu.location}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-500">
            <Award size={14} />
            Certifications
          </h3>
          <div className="space-y-3">
            {profile.certifications.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start justify-between gap-4 rounded-xl border border-surface-border/40 bg-surface-card/40 px-5 py-4"
              >
                <div>
                  <p className="font-medium text-gray-200">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-gray-500">{cert.issuer}</p>
                </div>
                {cert.status && (
                  <span className="shrink-0 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
                    {cert.status}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
