import { motion } from "motion/react";
import { X, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import type { Project } from "./Projects";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(15,23,42,0.6)", backdropFilter: "blur(6px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl"
        style={{ background: "#fff", boxShadow: "0 32px 80px rgba(26,58,107,0.25)" }}
      >
        {/* Image header */}
        <div className="relative h-56 overflow-hidden rounded-t-3xl">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(26,58,107,0.85) 0%, rgba(26,58,107,0.2) 60%, transparent 100%)" }}
          />
          <div className="absolute bottom-5 left-6 right-14">
            <span
              className="text-xs uppercase tracking-widest"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, color: "var(--yellow-accent)" }}
            >
              {project.category} · {project.year}
            </span>
            <h2
              className="mt-1"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#fff",
                lineHeight: 1.25,
              }}
            >
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(4px)", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer", color: "#fff" }}
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-8">
          {/* Description */}
          <p
            className="leading-relaxed mb-8"
            style={{ fontFamily: "'Inter', sans-serif", color: "var(--muted-foreground)", fontSize: "0.975rem", lineHeight: 1.8 }}
          >
            {project.fullDesc}
          </p>

          {/* Highlights */}
          <div className="mb-8">
            <h3
              className="mb-4"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "var(--blue-primary)", fontSize: "1rem" }}
            >
              Key Highlights
            </h3>
            <ul className="flex flex-col gap-3">
              {project.highlights.map((h, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--blue-bright)" }} />
                  <span
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", color: "var(--foreground)", lineHeight: 1.65 }}
                  >
                    {h}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="mb-8">
            <h3
              className="mb-3"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, color: "var(--blue-primary)", fontSize: "1rem" }}
            >
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-xl text-sm"
                  style={{
                    background: "var(--secondary)",
                    color: "var(--blue-primary)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    border: "1px solid var(--border)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-4 pt-2">
            <a
              href={project.liveUrl}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "var(--blue-primary)",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
              }}
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              className="flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "transparent",
                color: "var(--blue-primary)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                border: "2px solid var(--border)",
              }}
            >
              <Github size={16} />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
