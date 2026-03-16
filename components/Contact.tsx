"use client";
import { personal } from "@/lib/data";

const contacts = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "✉️",
    description: "Drop me a message anytime",
  },
  // {
  //   label: "WhatsApp",
  //   value: personal.phone,
  //   href: `https://wa.me/${personal.whatsapp}`,
  //   icon: "💬",
  //   description: "Chat with me on WhatsApp",
  // },
  {
    label: "LinkedIn",
    value: "moballighul-islam",
    href: personal.linkedin,
    icon: "💼",
    description: "Let's connect professionally",
  },
  {
    label: "GitHub",
    value: "Moballigh5225",
    href: personal.github,
    icon: "⌨️",
    description: "Check out my code",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem", maxWidth: "580px" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Let's work{" "}
            <span style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
              together
            </span>
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            I'm currently open to new opportunities. Whether you have a project in mind, want to discuss a role, or just want to say hello — my inbox is always open.
          </p>
        </div>

        {/* Contact cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                backgroundColor: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "14px",
                padding: "1.5rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(200,98,42,0.35)";
                el.style.transform = "translateY(-3px)";
                el.style.boxShadow = "0 10px 30px rgba(0,0,0,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "1.5rem" }}>{c.icon}</div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}
                >
                  {c.label}
                </div>
                <div
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-primary)",
                    fontWeight: 500,
                    marginBottom: "0.2rem",
                  }}
                >
                  {c.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    fontWeight: 300,
                  }}
                >
                  {c.description}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            backgroundColor: "var(--text-primary)",
            borderRadius: "20px",
            padding: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.75rem",
                fontWeight: 400,
                color: "#fff",
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              Ready to build something great?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
              Available for full-time roles and freelance projects.
            </p>
          </div>
          <a
            href={`mailto:${personal.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--accent)",
              color: "#fff",
              padding: "0.875rem 2rem",
              borderRadius: "100px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "0.9375rem",
              whiteSpace: "nowrap",
              transition: "background-color 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent-hover)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.backgroundColor = "var(--accent)")}
          >
            Send me an email →
          </a>
        </div>
      </div>
    </section>
  );
}
