import { motion } from "framer-motion";
import { useState } from "react";
import { profile } from "../data/profile";

export function Experience() {
  const [active, setActive] = useState(0);
  const job = profile.experience[active];

  return (
    <div className="page bg-bg-soft">
      <div className="pointer-events-none absolute -right-32 top-1/4 h-[400px] w-[400px] rounded-full bg-accent-light opacity-50 blur-[120px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="eyebrow">Experience</span>
          <h1 className="page-title mt-2">Career journey</h1>
          <p className="page-subtitle">
            4+ years delivering at the intersection of telecom, banking, and enterprise IT.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          {/* Company tabs */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="scroll-tabs lg:flex-col lg:gap-2"
          >
            {profile.experience.map((j, i) => (
              <button
                key={`${j.company}-${i}`}
                onClick={() => setActive(i)}
                className={`scroll-tab ${
                  active === i
                    ? "border-accent bg-accent-light shadow-sm"
                    : "border-line bg-bg hover:border-accent/30 hover:bg-accent-light/40"
                }`}
              >
                <p className={`text-sm font-bold ${active === i ? "text-accent-dim" : "text-ink"}`}>
                  {j.company}
                  {j.type === "Internship" && (
                    <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700">
                      Internship
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-ink-muted">
                  {j.type === "Internship" ? `Internship · ${j.period}` : j.period}
                </p>
              </button>
            ))}
          </motion.div>

          {/* Job detail */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="card overflow-hidden"
          >
            {/* Accent top bar for current role */}
            {active === 0 && (
              <div className="h-1 w-full bg-gradient-to-r from-accent to-violet-400" />
            )}

            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-light font-display text-sm font-bold text-accent-dim sm:h-12 sm:w-12">
                    {job.companyShort.slice(0, 2)}
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg font-bold text-ink sm:text-xl">{job.role}</h2>
                    <p className="mt-0.5 font-semibold text-accent">
                      {job.company}
                      {job.type === "Internship" && (
                        <span className="ml-1.5 text-xs font-semibold text-amber-700">· Internship</span>
                      )}
                    </p>
                  </div>
                </div>
                <div className="text-left text-sm text-ink-muted sm:text-right">
                  <p className="font-medium text-ink-secondary">{job.period}</p>
                  <p>{job.location}</p>
                  <span
                    className={`mt-1 inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
                      job.type === "Full-time"
                        ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                        : "border-amber-100 bg-amber-50 text-amber-700"
                    }`}
                  >
                    {job.type}
                  </span>
                </div>
              </div>

              {/* Outcome */}
              <div className="mt-5 rounded-xl border border-accent/20 bg-accent-light px-5 py-3">
                <p className="text-sm font-semibold text-accent-dim">
                  Key outcome:{" "}
                  <span className="font-normal text-ink-secondary">{job.outcome}</span>
                </p>
              </div>

              {/* Tech stack */}
              {job.techStack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.techStack.map((tech) => (
                    <span key={tech} className="pill">{tech}</span>
                  ))}
                </div>
              )}

              {/* Bullets */}
              <ul className="mt-5 space-y-3">
                {job.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
