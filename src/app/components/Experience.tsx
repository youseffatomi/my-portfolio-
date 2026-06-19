import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "GameClude - remote",
    role: "Front-end Developer",
    period: "2023 – 2024",
    desc: `<p>A wagering platform for competitive gamers, serving users across desktop and mobile environments.</p><ul><li><p>Architected and developed a fully responsive <strong>desktop web application</strong> using <strong>Vue.js</strong>, aligned with UI/UX design specifications</p></li><li><p>Built and deployed a <strong>Progressive Web App (PWA)</strong>, enabling offline functionality and mobile-native experience</p></li><li><p>Maintained and iterated on UI components to stay in sync with evolving product designs</p></li></ul>`,
    tags: ["Vuejs", "TailwindCss", "Figma", "PWA", "Sass"],
  },
  {
    company: "zarinfanavaran.ir - Remote",
    role: "Front-end Developer",
    period: "2022 – 2023",
    desc: "<p>A startup-focused software company building innovative digital products.</p><ul><li><p>Successfully delivered <strong>6 front-end projects</strong> from design handoff to production deployment</p></li><li><p>Built scalable, maintainable UIs using <strong>React.js</strong>, <strong>Vue.js</strong>, and <strong>Tailwind CSS</strong></p></li><li><p>Collaborated cross-functionally to translate product requirements into polished user interfaces</p></li></ul>",
    tags: ["Vue.js", "Tailwind CSS", "Figma", "ReactJs"],
  },
  {
    company: "Iran MTA - Remote",
    role: "Front-end Developer",
    period: "02‑2021 – 11‑2021",
    desc: "<p>A fan-built platform for Rockstar Games online multiplayer communities.</p><ul><li><p>Designed and developed key sections of the <strong>public-facing website</strong> and <strong>admin management panel</strong> using <strong>React.js</strong></p></li><li><p>Implemented game-related UI features and interactive components tailored to the gaming community</p></li></ul>",
    tags: ["JavaScript", "HTML/CSS", "React", "REST APIs"],
  },
];

export function Experience() {
  const ref = useRef(null);

  return (
    <section id="experience" className="py-28" style={{ background: "#fff" }}>
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Career Path"
          title="Work Experience"
          subtitle="A track record of building reliable, scalable products at companies of all sizes."
        />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, var(--yellow-accent), var(--blue-light), transparent)",
            }}
          />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -32 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="md:pl-16 relative"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-3.5 top-7 w-5 h-5 rounded-full border-2 hidden md:flex items-center justify-center"
        style={{ borderColor: "var(--blue-primary)", background: "#fff" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: "var(--yellow-accent)" }}
        />
      </div>

      <motion.div
        className="rounded-2xl p-7 group"
        style={{
          background: "#fff",
          border: "1px solid var(--border)",
          boxShadow: "0 2px 16px rgba(26,58,107,0.05)",
        }}
        whileHover={{
          y: -3,
          boxShadow: "0 12px 32px rgba(26,58,107,0.1)",
          borderColor: "var(--blue-bright)",
        }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div>
            <h3
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "var(--blue-primary)",
              }}
            >
              {exp.role}
            </h3>
            <p
              className="flex items-center gap-2 mt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: "var(--blue-bright)",
                fontSize: "0.95rem",
              }}
            >
              <Briefcase size={14} />
              {exp.company} · {exp.location}
            </p>
          </div>
          <span
            className="px-3 py-1 rounded-full text-xs"
            style={{
              background: "var(--secondary)",
              color: "var(--blue-primary)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {exp.period}
          </span>
        </div>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "var(--muted-foreground)",
            lineHeight: 1.75,
            fontSize: "0.95rem",
          }}
          dangerouslySetInnerHTML={{ __html: exp.desc }}
        />

        <div className="flex flex-wrap gap-2 mt-5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-xs"
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
        </div>
      </motion.div>
    </motion.div>
  );
}
