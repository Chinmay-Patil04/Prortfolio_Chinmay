import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { profile } from "../data/profile";

export function Projects() {
  return (
    <div className="page bg-bg">
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent-light opacity-60 blur-[100px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <span className="eyebrow">Projects</span>
          <h1 className="mt-2 font-display text-4xl font-bold text-ink md:text-5xl">
            Built & shipped
          </h1>
          <p className="mt-3 max-w-xl text-ink-secondary md:text-lg">
            Applying GenAI, cloud-native architecture, and product thinking to real business problems.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {profile.projects.map((project, i) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="card overflow-hidden"
            >
              <div className="h-1 w-full bg-gradient-to-r from-accent to-violet-400" />
              <div className="p-6 md:p-8 lg:grid lg:grid-cols-[1fr_280px] lg:gap-10">
                {/* Left */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-light text-accent">
                      <Layers size={22} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-ink">{project.name}</h2>
                      <p className="mt-0.5 text-ink-secondary">{project.tagline}</p>
                      <span className="mt-2 inline-block rounded-full border border-accent/20 bg-accent-light px-3 py-0.5 text-xs font-semibold text-accent-dim">
                        {project.context}
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-ink-secondary">{project.summary}</p>
                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((point, j) => (
                      <li key={j} className="flex gap-3 text-sm leading-relaxed text-ink-secondary">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="mt-8 lg:mt-0">
                  <p className="eyebrow mb-3">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="pill">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light p-4">
                    <p className="eyebrow">Status</p>
                    <p className="mt-1 text-sm font-medium text-ink-secondary">{project.status}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
