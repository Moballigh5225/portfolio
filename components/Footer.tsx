"use client";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        backgroundColor: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          MI<span style={{ color: "var(--accent)" }}>.</span>
        </div>

        <p
          style={{
            fontSize: "0.8125rem",
            color: "var(--text-muted)",
          }}
        >
          © {new Date().getFullYear()} {personal.name} · New Delhi, India
        </p>

        <div style={{ display: "flex", gap: "1.5rem" }}>
          {[
            { label: "GitHub", href: personal.github },
            { label: "LinkedIn", href: personal.linkedin },
            { label: "Email", href: `mailto:${personal.email}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text-primary)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
