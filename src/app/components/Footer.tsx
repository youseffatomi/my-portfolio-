import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="py-10 border-t"
      style={{
        background: "var(--blue-primary)",
        borderColor: "rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div>
          <span
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 800,
              fontSize: "1.15rem",
              color: "#fff",
            }}
          >
            Yousof Fatomi
          </span>
        </div>

        <div className="flex items-center gap-4">
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
            { icon: Mail, href: "joseph00631@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.1)",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p
          className="text-sm flex items-center gap-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Built with{" "}
          <Heart
            size={13}
            style={{ color: "var(--yellow-accent)" }}
            fill="var(--yellow-accent)"
          />{" "}
          in 2026
        </p>
      </div>
    </footer>
  );
}
