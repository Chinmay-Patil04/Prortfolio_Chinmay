import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle2, Clock, type LucideIcon } from "lucide-react";
import { profile } from "../data/profile";

const statusConfig: Record<string, { icon: LucideIcon; cls: string }> = {
  Active:   { icon: CheckCircle2, cls: "border-emerald-100 bg-emerald-50 text-emerald-700" },
  Pursuing: { icon: Clock,        cls: "border-amber-100 bg-amber-50 text-amber-700" },
};

export function Education() {
  return (
    <div className="page bg-bg">
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-light opacity-60 blur-[100px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="eyebrow">Background</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
            Education & certifications
          </h1>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Education */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
              <BookOpen size={13} /> Education
            </h3>
            {profile.education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                className="card border-l-2 border-l-accent p-6"
              >
                <p className="text-lg font-bold text-ink">{edu.degree}</p>
                <p className="mt-1 font-semibold text-accent">{edu.school}</p>
                <div className="mt-3 flex items-center gap-3 text-sm text-ink-muted">
                  <span>{edu.year}</span>
                  {edu.detail && (
                    <>
                      <span className="h-1 w-1 rounded-full bg-line-strong" />
                      <span className="font-semibold text-ink-secondary">{edu.detail}</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-ink-muted">
              <Award size={13} /> Certifications
            </h3>
            <div className="space-y-3">
              {profile.certifications.map((cert, i) => {
                const cfg = statusConfig[cert.status ?? "Active"];
                const Icon = cfg.icon;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07 }}
                    className="card flex items-center justify-between gap-4 px-5 py-4"
                  >
                    <div>
                      <p className="font-semibold text-ink">{cert.name}</p>
                      <p className="mt-0.5 text-sm text-ink-muted">{cert.issuer}</p>
                    </div>
                    <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${cfg.cls}`}>
                      <Icon size={11} />
                      {cert.status}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
