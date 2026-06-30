import { motion } from "framer-motion";
import { Award, BookOpen, CheckCircle2, Clock, type LucideIcon } from "lucide-react";
import { profile } from "../data/profile";

const statusConfig: Record<string, { icon: LucideIcon; cls: string }> = {
  Active:   { icon: CheckCircle2, cls: "border-emerald-100 bg-emerald-50 text-emerald-700" },
  Pursuing: { icon: Clock,        cls: "border-amber-100  bg-amber-50  text-amber-700"  },
};

export function Education() {
  return (
    <section id="education" className="page-section bg-dark">
      <div className="pointer-events-none absolute inset-0 grid-dark" />
      <div className="glow-blue right-0 bottom-0 h-[400px] w-[400px] opacity-30" />

      <div className="section-inner">
        <div className="mb-12">
          <span className="eyebrow text-brand">Background</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Education & certifications
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          {/* Education */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 eyebrow text-white/40">
              <BookOpen size={13} />
              Education
            </h3>
            <div className="space-y-4">
              {profile.education.map((edu) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="card-dark rounded-2xl border-l-2 border-l-brand p-6"
                >
                  <p className="text-lg font-bold text-white">{edu.degree}</p>
                  <p className="mt-1 font-semibold text-brand">{edu.school}</p>
                  <div className="mt-3 flex items-center gap-3 text-sm text-white/45">
                    <span>{edu.year}</span>
                    {edu.detail && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-white/20" />
                        <span className="font-semibold text-white/70">{edu.detail}</span>
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-5 flex items-center gap-2 eyebrow text-white/40">
              <Award size={13} />
              Certifications
            </h3>
            <div className="space-y-3">
              {profile.certifications.map((cert, i) => {
                const cfg = statusConfig[cert.status ?? "Active"];
                const Icon = cfg.icon;
                return (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="card-dark flex items-center justify-between gap-4 rounded-xl px-5 py-4"
                  >
                    <div>
                      <p className="font-semibold text-white">{cert.name}</p>
                      <p className="mt-0.5 text-sm text-white/40">{cert.issuer}</p>
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
    </section>
  );
}
