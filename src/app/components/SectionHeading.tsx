import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <span
        className="inline-block text-xs tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          color: "var(--blue-primary)",
          background: "var(--secondary)",
          letterSpacing: "0.12em",
        }}
      >
        {label}
      </span>
      <h2
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          color: "var(--blue-primary)",
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 max-w-xl mx-auto"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--muted-foreground)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="h-px w-12" style={{ background: "var(--border)" }} />
        <div className="h-1.5 w-8 rounded-full" style={{ background: "var(--yellow-accent)" }} />
        <div className="h-px w-12" style={{ background: "var(--border)" }} />
      </div>
    </motion.div>
  );
}
