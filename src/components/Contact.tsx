import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";

const cards = [
  { icon: Mail,     label: "Email",    getValue: () => profile.email,            getHref: () => `mailto:${profile.email}`,               cta: "Send a message" },
  { icon: Phone,    label: "Phone",    getValue: () => profile.phone,            getHref: () => `tel:${profile.phone.replace(/\s/g,"")}`, cta: "Call directly" },
  { icon: Linkedin, label: "LinkedIn", getValue: () => "chinmaypatil04",         getHref: () => profile.linkedin,                         cta: "Connect" },
  { icon: Github,   label: "GitHub",   getValue: () => "Chinmay-Patil04",        getHref: () => profile.github,                           cta: "See code" },
];

export function Contact() {
  return (
    <section id="contact" className="page-section bg-brand">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="eyebrow text-white/60">Let's connect</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
            Open to opportunities
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/60 md:text-lg">
            Targeting PMO, consulting, and strategic delivery roles — Big 4, tier-1 consulting, and high-growth organisations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, getValue, getHref, cta }, i) => (
            <motion.a
              key={label}
              href={getHref()}
              target={getHref().startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition hover:border-white/40 hover:bg-white/15"
            >
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-white/20 p-3 text-white">
                  <Icon size={20} />
                </div>
                <p className="eyebrow text-white/50">{label}</p>
                <p className="mt-1 text-sm font-semibold text-white break-all">{getValue()}</p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-white/60 opacity-0 transition group-hover:opacity-100">
                {cta} <ArrowUpRight size={13} />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-20 border-t border-white/20 pt-8 text-center text-sm text-white/30">
          © {new Date().getFullYear()} {profile.name} · Last updated {profile.lastUpdated}
        </div>
      </div>
    </section>
  );
}
