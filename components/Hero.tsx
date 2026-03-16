"use client";
import { useEffect, useState } from "react";

function RichText({
  parts,
}: {
  parts: Array<{ text: string; color?: string; bold?: boolean; href?: string }>;
}) {
  return (
    <>
      {parts.map((p, i) => {
        const style: React.CSSProperties = {
          color: p.color ?? "inherit",
          fontWeight: p.bold ? 600 : "inherit",
        };

        if (p.href) {
          return (
            <a
              key={i}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...style,
                textDecoration: "none",
                borderBottom: `1px solid ${p.color ?? "var(--accent)"}`,
              }}
            >
              {p.text}
            </a>
          );
        }

        return (
          <span key={i} style={style}>
            {p.text}
          </span>
        );
      })}
    </>
  );
}

const ACC = "var(--accent)";
const BOLD = true;

const aboutParagraphs: Array<
  Array<{ text: string; color?: string; bold?: boolean; href?: string }>
> = [
  [
    { text: "I am a " },
    { text: "Senior Software Developer", color: ACC, bold: BOLD },
    { text: " with " },
    { text: "4+ years of experience", color: ACC, bold: BOLD },
    { text: " building scalable, responsive SaaS applications using " },
    { text: "React.js, Next.js, TypeScript", color: ACC, bold: BOLD },
    {
      text: ", and modern CSS. I specialise in translating complex product requirements and ",
    },
    { text: "high-fidelity mockups", bold: BOLD },
    { text: " into elegant, maintainable user interfaces." },
  ],
  [
    { text: "My career spans roles at " },
    {
      text: "Acefone",
      color: ACC,
      bold: BOLD,
      href: "https://www.acefone.com",
    },
    { text: " (VoIP SaaS), " },
    { text: "Eprosign", color: ACC, bold: BOLD },
    { text: ", and " },
    { text: "Pankhuri", color: ACC, bold: BOLD },
    { text: " where I built everything from " },
    { text: "lead analytics dashboards", bold: BOLD },
    { text: " and " },
    { text: "design systems", bold: BOLD },
    { text: " to " },
    { text: "AI-powered content APIs", color: ACC, bold: BOLD },
    { text: " using " },
    { text: "LangChain and OpenAI", color: ACC, bold: BOLD },
    { text: "." },
  ],
  [
    { text: "On the backend I work with " },
    {
      text: "Node.js, Express, Python, and Flask",
      color: ACC,
      bold: BOLD,
    },
    { text: ", designing " },
    { text: "REST APIs", bold: BOLD },
    { text: " and integrating third-party platforms like " },
    { text: "Zoho CRM, Zoho Desk", color: ACC, bold: BOLD },
    { text: ", " },
    { text: "Google Ads", color: ACC, bold: BOLD },
    { text: ", and " },
    { text: "Wotnot", color: ACC, bold: BOLD },
    { text: " to build end-to-end automated workflows." },
  ],
  [
    { text: "I hold " },
    { text: "3 Oracle certifications", color: ACC, bold: BOLD },
    {
      text: " in Cloud Infrastructure, Developer, and AI Foundations and I actively use ",
    },
    { text: "GitHub Copilot", bold: BOLD },
    { text: " and " },
    { text: "prompt engineering", bold: BOLD },
    { text: " to ship faster without compromising code quality." },
  ],
  [
    { text: "Outside of code, I am passionate about building things that are both " },
    { text: "functional and beautiful", color: ACC, bold: BOLD },
    {
      text: " whether that is a polished UI or a well-structured API. I thrive in ",
    },
    { text: "Agile, cross-functional teams", bold: BOLD },
    { text: " and love turning ambiguous requirements into " },
    { text: "production-ready experiences", color: ACC, bold: BOLD },
    { text: "." },
  ],
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,98,42,0.055) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "-8%",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(200,98,42,0.035) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          paddingTop: "80px",
          paddingBottom: "4rem",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.7s ease",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "3rem",
            alignItems: "start",
            marginBottom: "2.5rem",
          }}
          className="hero-top"
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "0.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "var(--text-muted)",
                }}
              >
                Hi there, I am
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  backgroundColor: "var(--border)",
                }}
              />
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 400,
                color: "var(--accent)",
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                marginBottom: "0.6rem",
              }}
            >
              Moballighul Islam
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "2px",
                  backgroundColor: "var(--accent)",
                  borderRadius: "2px",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.03em",
                }}
              >
                Full Stack Developer and React Specialist
              </span>
            </div>

            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {[
                { num: "4+", label: "Years Exp." },
                { num: "10+", label: "Projects" },
                { num: "3", label: "Certifications" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{ display: "flex", alignItems: "baseline", gap: "0.35rem" }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.6rem",
                      color: "var(--text-primary)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </span>
                  <span
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
            className="hero-photo"
          >
            <div
              style={{
                width: "160px",
                height: "180px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid var(--border)",
                backgroundColor: "var(--bg)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  background:
                    "linear-gradient(135deg, var(--bg) 0%, var(--accent-light) 100%)",
                }}
              >
                <span
  style={{
    display: "inline-block",
    marginTop: "8px",
  }}
>
  <img
    src="/projects/Media.jpg"
    alt="Moballighul Islam"
    style={{
      width: "155px",
      height: "190px",
      objectFit: "cover",
      borderRadius: "8px",
      display: "block",
    }}
  />
</span>
              </div>
            </div>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                backgroundColor: "var(--accent-light)",
                border: "1px solid rgba(200,98,42,0.2)",
                borderRadius: "100px",
                padding: "0.25rem 0.75rem",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: "#22c55e",
                  display: "inline-block",
                  boxShadow: "0 0 0 2px rgba(34,197,94,0.2)",
                }}
              />
              <span
                style={{
                  fontSize: "0.72rem",
                  color: "var(--accent)",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  whiteSpace: "nowrap",
                }}
              >
                Open to opportunities
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            height: "1px",
            backgroundColor: "var(--border)",
            marginBottom: "2rem",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: "3rem",
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {aboutParagraphs.map((parts, i) => (
              <p
                key={i}
                style={{
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  margin: 0,
                }}
              >
                <RichText parts={parts} />
              </p>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              paddingTop: "0.2rem",
            }}
          >
            <a
              href="/resume.pdf"
              download
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "var(--accent)",
                color: "#fff",
                padding: "0.65rem 1.25rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.85rem",
                letterSpacing: "0.01em",
                transition: "background-color 0.2s",
                boxShadow: "0 4px 14px rgba(200,98,42,0.22)",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent-hover)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "var(--accent)";
              }}
            >
              Download Resume
            </a>

            <a
              href="#contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                color: "var(--text-primary)",
                padding: "0.65rem 1.25rem",
                borderRadius: "100px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.85rem",
                border: "1.5px solid var(--border)",
                transition: "border-color 0.2s",
                letterSpacing: "0.01em",
                textAlign: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--border)";
              }}
            >
              Lets Talk
            </a>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                paddingTop: "0.5rem",
                borderTop: "1px solid var(--border)",
              }}
            >
              {[
                { label: "GitHub", href: "https://github.com/Moballigh5225" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/moballighul-islam-620a8a160",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontWeight: 400,
                    transition: "color 0.2s",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--text-muted)";
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-top { grid-template-columns: 1fr !important; }
          .hero-photo { flex-direction: row !important; align-items: center !important; gap: 1rem !important; }
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}