import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";

const cards = [
  { icon: Mail,     label: "Email",    value: profile.email,       href: `mailto:${profile.email}`,                  cta: "Send a message" },
  { icon: Phone,    label: "Phone",    value: profile.phone,       href: `tel:${profile.phone.replace(/\s/g, "")}`,  cta: "Call directly"  },
  { icon: Linkedin, label: "LinkedIn", value: "chinmaypatil04",    href: profile.linkedin,                            cta: "Connect"        },
  { icon: Github,   label: "GitHub",   value: "Chinmay-Patil04",   href: profile.github,                              cta: "See code"       },
];

export function Contact() {
  return (
    <div className="page bg-bg-soft">
      <div className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent-light opacity-70 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[400px] w-[400px] rounded-full bg-accent-light opacity-50 blur-[100px]" />

      <div className="page-inner">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <span className="eyebrow">Get in touch</span>
          <h1 className="mt-3 font-display text-4xl font-extrabold text-ink md:text-5xl lg:text-6xl">
            Open to opportunities
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-ink-secondary md:text-lg">
            Targeting PMO, consulting, and strategic delivery roles — Big 4, tier-1 consulting, and high-growth organisations.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, label, value, href, cta }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="group card flex flex-col justify-between p-6"
            >
              <div>
                <div className="mb-4 inline-flex rounded-xl bg-accent-light p-3 text-accent">
                  <Icon size={20} />
                </div>
                <p className="eyebrow">{label}</p>
                <p className="mt-1 text-sm font-semibold text-ink break-all">{value}</p>
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition group-hover:opacity-100">
                {cta} <ArrowUpRight size={13} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 rounded-2xl border border-accent/20 bg-accent-light p-8 text-center"
        >
          <h2 className="font-display text-2xl font-bold text-ink">Ready to collaborate?</h2>
          <p className="mx-auto mt-2 max-w-md text-ink-secondary">
            Drop an email or connect on LinkedIn — I respond within 24 hours.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-white shadow-accent transition hover:bg-accent-dim"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </motion.div>

        <div className="mt-10 text-center text-sm text-ink-muted">
          © {new Date().getFullYear()} {profile.name} · Last updated {profile.lastUpdated}
        </div>
      </div>
    </div>
  );
}
