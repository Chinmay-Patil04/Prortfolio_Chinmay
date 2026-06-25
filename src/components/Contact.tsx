import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "../data/profile";
import { AnimatedSection, SectionHeading } from "./ui";

export function Contact() {
  return (
    <AnimatedSection id="contact">
      <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[80px]" />

        <SectionHeading
          label="Contact"
          title="Let's connect"
          description="Open to opportunities in project delivery, telecom infrastructure, and enterprise IT."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <motion.a
            href={`mailto:${profile.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group flex items-center gap-4 rounded-2xl border border-surface-border/50 bg-surface-raised/50 p-5 transition hover:border-accent/40"
          >
            <div className="rounded-xl bg-accent/10 p-3 text-accent">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="text-sm font-medium text-gray-200 group-hover:text-accent">
                {profile.email}
              </p>
            </div>
          </motion.a>

          <motion.a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="group flex items-center gap-4 rounded-2xl border border-surface-border/50 bg-surface-raised/50 p-5 transition hover:border-accent/40"
          >
            <div className="rounded-xl bg-accent/10 p-3 text-accent">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="text-sm font-medium text-gray-200 group-hover:text-accent">
                {profile.phone}
              </p>
            </div>
          </motion.a>

          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group flex items-center gap-4 rounded-2xl border border-surface-border/50 bg-surface-raised/50 p-5 transition hover:border-accent/40"
          >
            <div className="rounded-xl bg-accent/10 p-3 text-accent">
              <Linkedin size={20} />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500">LinkedIn</p>
              <p className="text-sm font-medium text-gray-200 group-hover:text-accent">
                chinmaypatil04
              </p>
            </div>
            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-accent" />
          </motion.a>
        </div>
      </div>

      <footer className="mt-16 border-t border-surface-border/30 pt-8 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind.
        </p>
      </footer>
    </AnimatedSection>
  );
}
