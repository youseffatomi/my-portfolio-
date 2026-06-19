import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="py-28"
      style={{
        background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          label="Get in Touch"
          title="Let's Work Together"
          subtitle="Have a project in mind? I'd love to hear from you."
        />

        <div ref={ref}>
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="grid  lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Mail, label: "Email", value: "joseph00631@gmail.com" },
              { icon: Phone, label: "Phone", value: "+98 916 020 631" },
              { icon: MapPin, label: "Location", value: "Abadan, Iran" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{
                  background: "#fff",
                  border: "1px solid var(--border)",
                  boxShadow: "0 2px 12px rgba(26,58,107,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--secondary)" }}
                >
                  <Icon size={18} style={{ color: "var(--blue-primary)" }} />
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-wider mb-0.5"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 600,
                      color: "var(--muted-foreground)",
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      color: "var(--blue-primary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {value}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="p-6 rounded-2xl lg:col-span-6"
              style={{ background: "var(--blue-primary)" }}
            >
              <p
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 700,
                  color: "#fff",
                  fontSize: "1.05rem",
                  marginBottom: "0.5rem",
                }}
              >
                Open to Freelance &amp; Full-time
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                }}
              >
                Currently accepting new projects. Response within 24 hours.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: "var(--yellow-accent)" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    color: "var(--yellow-accent)",
                  }}
                >
                  Available Now
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
