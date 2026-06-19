import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeading } from "./SectionHeading";

const skillGroups = [
  {
    category: "Frontend",
    icon: "🎨",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "Vue.js", level: 30 },
      { name: "TypeScript", level: 60 },
      { name: "Tailwind CSS", level: 95 },
      { name: "material ui", level: 60 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [{ name: "Node.js", level: 40 }],
  },
  {
    category: "Tools & DevOps",
    icon: "🛠️",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Docker", level: 30 },
      { name: "Figma", level: 60 },
      { name: "photoshop", level: 50 },
    ],
  },
];

const tools = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Tailwind CSS",
  "Docker",
  "Figma",
  "Vue.js",
  "Git",
  "Vite",
  "Vercel",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-28"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Expertise"
          title="Skills & Technologies"
          subtitle="Technologies I use daily to bring ideas to life."
        />

        <div className="grid md:grid-cols-3 gap-7 mb-16">
          {skillGroups.map((group, gi) => (
            <SkillGroup key={group.category} group={group} groupIndex={gi} />
          ))}
        </div>

        {/* Tech pill cloud */}
        <ToolsCloud />
      </div>
    </section>
  );
}

function SkillGroup({
  group,
  groupIndex,
}: {
  group: (typeof skillGroups)[0];
  groupIndex: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: groupIndex * 0.12 }}
      className="rounded-2xl p-7"
      style={{
        background: "#fff",
        border: "1px solid var(--border)",
        boxShadow: "0 2px 16px rgba(26,58,107,0.05)",
      }}
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">{group.icon}</span>
        <h3
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "var(--blue-primary)",
          }}
        >
          {group.category}
        </h3>
      </div>
      <div className="flex flex-col gap-5">
        {group.skills.map((skill, si) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            delay={groupIndex * 0.12 + si * 0.08}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({
  skill,
  delay,
  inView,
}: {
  skill: { name: string; level: number };
  delay: number;
  inView: boolean;
}) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "var(--foreground)",
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8rem",
            color: "var(--muted-foreground)",
            fontWeight: 500,
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div
        className="w-full rounded-full h-2"
        style={{ background: "var(--muted)" }}
      >
        <motion.div
          className="h-2 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, var(--blue-primary), var(--blue-bright))",
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.9, delay: delay + 0.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function ToolsCloud() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="rounded-2xl p-8"
      style={{ background: "#fff", border: "1px solid var(--border)" }}
    >
      <p
        className="text-center mb-6 text-sm"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          color: "var(--muted-foreground)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Also experienced with
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {tools.map((tool, i) => (
          <motion.span
            key={tool}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            whileHover={{
              scale: 1.08,
              background: "var(--yellow-accent)",
              color: "var(--blue-primary)",
            }}
            className="px-4 py-2 rounded-xl text-sm cursor-default transition-colors duration-200"
            style={{
              background: "var(--secondary)",
              color: "var(--blue-primary)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              border: "1px solid var(--border)",
            }}
          >
            {tool}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
