import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { profile } from "../data/profile";

export function Projects() {
  return (
    <section id="projects" className="page-section bg-dark">
      <div className="pointer-events-none absolute inset-0 grid-dark" />
      <div className="glow-blue left-1/4 top-1/4 h-[400px] w-[400px] opacity-40" />

      <div className="section-inner">
        <div className="mb-12">
          <span className="eyebrow text-brand">Projects</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Built & shipped
          </h2>
          <p className="mt-4 max-w-xl text-white/50 md:text-lg">
            Applying GenAI, cloud-native architecture, and product thinking to real business problems.
          </p>
        </div>

        <div className="grid gap-6">
          {profile.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-dark rounded-2xl overflow-hidden"
            >
              <div className="h-0.5 w-full bg-gradient-to-r from-brand via-sky-400 to-brand" />
              <div className="p-6 md:p-8 lg:grid lg:grid-cols-[1fr_300px] lg:gap-10">
                {/* Left */}
                <div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/20 text-brand">
                      <Layers size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.name}</h3>
                      <p className="mt-0.5 text-white/60">{project.tagline}</p>
                      <span className="mt-2 inline-block rounded-full border border-brand/30 bg-brand/10 px-3 py-0.5 text-xs font-semibold text-brand">
                        {project.context}
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/55">{project.summary}</p>

                  <ul className="mt-5 space-y-2.5">
                    {project.highlights.map((point, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/55">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right */}
                <div className="mt-8 lg:mt-0">
                  <p className="eyebrow text-white/35 mb-3">Tech stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="pill-dark">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 rounded-xl border border-brand/20 bg-brand/8 p-4">
                    <p className="eyebrow text-brand/60">Status</p>
                    <p className="mt-1 text-sm font-medium text-white">{project.status}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
