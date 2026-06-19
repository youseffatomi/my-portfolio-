import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f0f6ff 60%, #e8f0fe 100%)",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--blue-primary) 1px, transparent 1px), linear-gradient(90deg, var(--blue-primary) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Decorative circle */}
      <motion.div
        className="absolute right-[-100px] top-[10%] w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--blue-bright) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[-60px] bottom-[15%] w-[300px] h-[300px] rounded-full opacity-10"
        style={{
          background:
            "radial-gradient(circle, var(--yellow-accent) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                lineHeight: 1.15,
                color: "var(--blue-primary)",
              }}
            >
              Yousof Fatomi
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 600,
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                color: "var(--blue-bright)",
                marginTop: "0.5rem",
              }}
            >
              Front-End Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 leading-relaxed"
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "var(--muted-foreground)",
                fontSize: "1.05rem",
                maxWidth: "480px",
              }}
            >
              Front-end Developer with over 4 years of hands-on experience in
              designing and developing modern, responsive web applications.
              Expert in creating clean, component-based architectures and
              writing highly optimized, maintainable code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button
                onClick={() => scrollTo("projects")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "var(--blue-primary)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => scrollTo("contact")}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{
                  background: "transparent",
                  color: "var(--blue-primary)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  border: "2px solid var(--blue-primary)",
                  cursor: "pointer",
                  fontSize: "0.95rem",
                }}
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="flex items-center gap-5 mt-10"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/youseffatomi?tab=repositories",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/joseph-fatomi",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:joseph00631@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  target="_blank"
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                  style={{
                    background: "var(--secondary)",
                    color: "var(--blue-primary)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Stats column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:grid grid-cols-2 gap-5"
          >
            {[
              {
                value: "4+",
                label: "Years of Experience",
                color: "var(--blue-primary)",
              },
              {
                value: "20+",
                label: "Projects Delivered",
                color: "var(--blue-bright)",
              },
              {
                value: "15+",
                label: "Happy Clients",
                color: "var(--blue-primary)",
              },
              {
                value: "99%",
                label: "Client Satisfaction",
                color: "var(--blue-bright)",
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  boxShadow: "0 4px 24px rgba(26,58,107,0.06)",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(26,58,107,0.12)",
                }}
              >
                <div
                  className="text-4xl mb-2"
                  style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    color: stat.color,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "var(--muted-foreground)",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
                <div
                  className="absolute bottom-0 left-0 h-1 w-12 rounded-t"
                  style={{ background: "var(--yellow-accent)" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => scrollTo("experience")}
        >
          <span
            className="text-xs"
            style={{
              color: "var(--muted-foreground)",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            scroll
          </span>
          <ArrowDown size={16} style={{ color: "var(--muted-foreground)" }} />
        </motion.div>
      </div>
    </section>
  );
}
