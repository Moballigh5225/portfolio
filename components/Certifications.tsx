"use client";
import { certifications, education } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "6rem 2rem", backgroundColor: "var(--surface)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
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
            Credentials
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              color: "var(--text-primary)",
            }}
          >
            Education &{" "}
            <span style={{ fontStyle: "italic", color: "var(--text-secondary)" }}>
              Certifications
            </span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }} className="cert-grid">
          {/* Education */}
          <div>
            <h3
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Education
            </h3>
            <div
              style={{
                backgroundColor: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  backgroundColor: "var(--accent-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.25rem",
                  marginBottom: "1rem",
                }}
              >
                🎓
              </div>
              <h4
                style={{
                  fontSize: "0.9375rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                  marginBottom: "0.35rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {education.degree}
              </h4>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                  marginBottom: "0.5rem",
                  lineHeight: 1.5,
                }}
              >
                {education.institution}
              </p>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--text-muted)",
                }}
              >
                {education.period}
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
              }}
            >
              Certifications
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {certifications.map((cert, i) => (
                <a
                  key={cert.title}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: "var(--bg)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    padding: "1.25rem 1.5rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    gap: "1rem",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(200,98,42,0.35)";
                    el.style.transform = "translateX(4px)";
                    el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "var(--border)";
                    el.style.transform = "translateX(0)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "8px",
                        backgroundColor: "var(--accent-light)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      🏅
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.4,
                          marginBottom: "0.2rem",
                        }}
                      >
                        {cert.title}
                      </div>
                      <div
                        style={{
                          fontSize: "0.775rem",
                          color: "var(--text-muted)",
                          fontWeight: 400,
                        }}
                      >
                        {cert.issuer}
                      </div>
                    </div>
                  </div>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent)",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    View ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
