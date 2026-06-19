import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { ProjectModal } from "./ProjectModal";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "zarinkala admin panel",
    image: "images/zarin_kala_admin.jpg",
    tags: ["React"],
  },
  {
    id: 2,
    title: "zarinkala",
    image: "images/zarin_kala.jpg",
    tags: ["React", "tailwind CSS"],
  },
  {
    id: 3,
    title: "zarinfanavaran",

    image: "images/zarinfanavaran.png",
    tags: ["React", "tailwind CSS"],
  },
  {
    id: 4,
    title: "Game Clude",

    image: "images/game_clude.jpg",
    tags: ["Vue", "tailwind CSS"],
  },
  {
    id: 5,
    title: "Limix Food",

    image: "images/limix.jpg",
    tags: ["React", "tailwind CSS"],
  },
  {
    id: 6,
    title: "Biaupload",

    image: "images/biaupload.jpg",
    tags: ["React", "tailwind CSS"],
  },
  {
    id: 7,
    title: "Shiraz Store",

    image: "images/shiraz-store.png",
    tags: ["tailwind CSS"],
  },
  {
    id: 8,
    title: "panel for manage back-links",

    image: "images/x67.jpg",
    tags: ["React", "tailwind CSS"],
  },
  {
    id: 9,
    title: "Nimkat Store",

    image: "images/nimkat.jpg",
    tags: ["React", "bootstrap"],
  },
  {
    id: 10,
    title: "Iran MTA landing Page",
    image: "images/iran_mta.jpg",
    tags: ["tailwind CSS"],
  },
  {
    id: 11,
    title: "Iran Mincraft - Full Stack",

    image: "images/iran_mincraft.jpg",
    tags: ["React", "Node.js", "tailwindCss", "MongoDB", "express"],
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = projects;

  return (
    <section id="projects" className="py-28" style={{ background: "#fff" }}>
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of products I've built, from SaaS platforms to consumer apps."
        />

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpen={() => setSelected(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.article
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="group rounded-2xl overflow-hidden cursor-pointer"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 16px rgba(26,58,107,0.05)",
      }}
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(26,58,107,0.12)" }}
      onClick={onOpen}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="mt-1.5 mb-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            color: "var(--blue-primary)",
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs"
              style={{
                background: "var(--muted)",
                color: "var(--blue-primary)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span
              className="px-2.5 py-1 rounded-lg text-xs"
              style={{
                background: "var(--secondary)",
                color: "var(--blue-bright)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
