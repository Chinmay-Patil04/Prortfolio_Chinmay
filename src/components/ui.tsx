import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-gray-400 md:text-lg">{description}</p>
      )}
    </motion.div>
  );
}

interface AnimatedSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function AnimatedSection({ id, children, className = "" }: AnimatedSectionProps) {
  return (
    <section id={id} className={`relative px-6 py-20 md:px-10 md:py-28 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
