import React from "react";

const styles = {
  divider: {
    height: 24,
    maxWidth: 1180,
    margin: "0 auto",
    background: "linear-gradient(180deg, rgba(148,163,184,0.15), rgba(148,163,184,0.05), transparent)",
    borderRadius: 999,
    filter: "blur(0.2px)",
  },
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #fffaf6 0%, #f6f1ff 52%, #eef7ff 100%)",
    color: "#0f172a",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    borderBottom: "1px solid rgba(226,232,240,.9)",
    background: "rgba(255,250,246,.9)",
    backdropFilter: "blur(12px)",
  },
  nav: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  navBrand: {
    fontSize: 14,
    fontWeight: 800,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#334155",
  },
  navLinks: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
  },
  navLink: {
    color: "#475569",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
  },
  container: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "72px 24px 32px",
  },
  hero: {
    textAlign: "center",
  },
  avatar: {
    width: 148,
    height: 148,
    borderRadius: "9999px",
    background: "linear-gradient(135deg, #f9d7e4, #ddd6fe)",
    margin: "0 auto",
    border: "5px solid white",
    boxShadow: "0 20px 50px rgba(15,23,42,.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#475569",
    overflow: "hidden",
  },
  heroTitle: {
    marginTop: 24,
    fontSize: 58,
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: "-.04em",
  },
  heroSubtitle: {
    marginTop: 12,
    fontSize: 24,
    color: "#475569",
    fontWeight: 500,
  },
  heroBlurb: {
    marginTop: 22,
    maxWidth: 760,
    marginInline: "auto",
    color: "#475569",
    fontSize: 18,
    lineHeight: 1.8,
  },
  socialRow: {
    marginTop: 24,
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 9999,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255,255,255,.88)",
    border: "1px solid #eadff4",
    boxShadow: "0 10px 24px rgba(91,75,138,.08)",
    color: "#5b4b8a",
    textDecoration: "none",
  },
  section: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "24px 24px 8px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: "-.03em",
    margin: 0,
    textAlign: "center",
  },
  sectionLead: {
    marginTop: 12,
    color: "#475569",
    maxWidth: 760,
    marginInline: "auto",
    lineHeight: 1.8,
    fontSize: 16,
    textAlign: "center",
  },
  projectsGrid: {
    justifyContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 16,
    marginTop: 18,
    alignItems: "start",
  },
  projectCard: {
    padding: 16,
    borderRadius: 20,
    border: "1px solid #e2e8f0",
    background: "white",
    boxShadow: "0 10px 30px rgba(15,23,42,.04)",
  },
  projectTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  projectTag: {
    display: "inline-block",
    padding: "6px 10px",
    background: "#f7dce7",
    color: "#9d3f6b",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: ".04em",
    textTransform: "uppercase",
  },
  projectTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 1.35,
  },
  projectText: {
    marginTop: 8,
    color: "#475569",
    lineHeight: 1.7,
    fontSize: 14,
  },
  iconBadge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    background: "#f3ecff",
    border: "1px solid #e2d6ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#7c3aed",
    flexShrink: 0,
  },
  chips: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  },
  chip: {
    padding: "7px 12px",
    background: "#f1f5f9",
    borderRadius: 999,
    fontSize: 11,
    color: "#334155",
    fontWeight: 700,
  },
  featuredWrap: {
    marginTop: 18,
    padding: 20,
    borderRadius: 24,
    border: "1px solid #dbe4f0",
    background: "rgba(255,255,255,.88)",
    boxShadow: "0 18px 50px rgba(15,23,42,.06)",
  },
  featuredGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 16,
  },
  caseBlock: {
    padding: 22,
    background: "#f8fafc",
    borderRadius: 22,
    border: "1px solid #e2e8f0",
  },
  caseTitle: {
    fontWeight: 800,
    marginBottom: 10,
    fontSize: 18,
  },
  caseMiniLabel: {
    fontWeight: 700,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: ".08em",
    color: "#64748b",
    marginBottom: 8,
  },
  caseText: {
    color: "#334155",
    lineHeight: 1.8,
    fontSize: 15,
    margin: 0,
  },
  skillsWrap: {
    marginTop: 18,
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  skillsCard: {
    marginTop: 18,
    borderRadius: 24,
    padding: 22,
    border: "1px solid #dbe4f0",
    background: "rgba(255,255,255,.88)",
    boxShadow: "0 18px 50px rgba(15,23,42,.05)",
  },
  connectGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 14,
  },
  connectCard: {
    borderRadius: 20,
    padding: 18,
    border: "1px solid #dbe4f0",
    background: "white",
  },
  connectValue: {
    marginTop: 8,
    color: "#334155",
    lineHeight: 1.7,
    fontSize: 15,
    wordBreak: "break-word",
  },
  copyButton: {
    marginTop: 10,
    border: "1px solid #eadff4",
    background: "#fff7fb",
    color: "#9d3f6b",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
  },
  visualCard: {
    borderRadius: 18,
    background: "white",
    border: "1px solid #eadff4",
    padding: 14,
  },
  footerPad: {
    height: 10,
  },
  modalOverlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(15, 23, 42, 0.45)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    zIndex: 50,
  },
  modalCard: {
    width: "min(760px, 100%)",
    maxHeight: "85vh",
    overflowY: "auto",
    background: "rgba(255,255,255,.98)",
    border: "1px solid #eadff4",
    borderRadius: 28,
    boxShadow: "0 24px 80px rgba(15,23,42,.18)",
    padding: 24,
    textAlign: "left",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 16,
  },
  modalClose: {
    border: "1px solid #eadff4",
    background: "white",
    borderRadius: 999,
    width: 38,
    height: 38,
    cursor: "pointer",
    color: "#5b4b8a",
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1,
  },
  modalGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },
  modalSection: {
    padding: 16,
    borderRadius: 18,
    border: "1px solid #eadff4",
    background: "#fffafc",
  },
  modalSectionTitle: {
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    color: "#9d3f6b",
    marginBottom: 8,
  },
  modalList: {
    margin: 0,
    paddingLeft: 18,
    color: "#475569",
    lineHeight: 1.7,
    fontSize: 14,
  },
  clickableCard: {
    cursor: "pointer",
    transition: "transform .18s ease, box-shadow .18s ease",
  },
};

function IconBase({ children, size = 20, fill = "none", strokeWidth = 1.8 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      stroke="currentColor"
      fill={fill}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </IconBase>
  );
}

function LinkedInIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.1.9 2 2.02 2a2.02 2.02 0 1 0 .03-4.03ZM20.8 12.9c0-3.48-1.86-5.1-4.35-5.1-2 0-2.9 1.1-3.4 1.87V8.5H9.68c.04.78 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.4 1.92-1.4 1.35 0 1.9 1.03 1.9 2.54V20H20.8v-7.1Z" />
    </svg>
  );
}

function GitHubIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M9 18c-4 1.5-4-2-6-2" />
      <path d="M15 21v-4a3 3 0 0 0-.9-2.2c3-.3 6.1-1.5 6.1-6.3A4.9 4.9 0 0 0 19 5a4.5 4.5 0 0 0-.1-3s-1.1-.3-3.4 1.3a11.8 11.8 0 0 0-6 0C7.2 1.7 6.1 2 6.1 2A4.5 4.5 0 0 0 6 5a4.9 4.9 0 0 0-1.2 3.5c0 4.8 3.1 6 6.1 6.3A3 3 0 0 0 10 17v4" />
    </IconBase>
  );
}

function UserIcon({ size = 64 }) {
  return (
    <IconBase size={size}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </IconBase>
  );
}

function UtensilsIcon({ size = 24 }) {
  return (
    <IconBase size={size}>
      <path d="M6 3v7" />
      <path d="M8.5 3v7" />
      <path d="M6 7h2.5" />
      <path d="M7.25 10v11" />
      <path d="M15 3c1.7 2 1.7 5 0 7v11" />
      <path d="M13.5 10H16.5" />
    </IconBase>
  );
}

function ClockIcon({ size = 18 }) {
  return (
    <IconBase size={size}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </IconBase>
  );
}

function SparklesIcon({ size = 18 }) {
  return (
    <IconBase size={size}>
      <path d="M12 3l1.5 4L18 8.5l-4.5 1.5L12 14l-1.5-4L6 8.5 10.5 7 12 3Z" />
      <path d="M18.5 15l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" />
    </IconBase>
  );
}

function BarIcon({ size = 18 }) {
  return (
    <IconBase size={size}>
      <path d="M5 19V9" />
      <path d="M12 19V5" />
      <path d="M19 19v-7" />
    </IconBase>
  );
}

function HandshakeIcon({ size = 18 }) {
  return (
    <IconBase size={size}>
      <path d="M8.5 11.5 11 14c.8.8 2.2.8 3 0l3.5-3.5" />
      <path d="M3 10l4-4c.8-.8 2-.8 2.8 0L12 8.2l2.2-2.2c.8-.8 2-.8 2.8 0l4 4" />
      <path d="M6 13l-2.5 2.5a1.4 1.4 0 0 0 2 2L8 15" />
      <path d="M18 13l2.5 2.5a1.4 1.4 0 0 1-2 2L16 15" />
    </IconBase>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a href={href} aria-label={label} style={styles.socialButton} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function AvatarIcon() {
  return <UserIcon size={70} />;
}

export default function App() {
  const [isIbsModalOpen, setIsIbsModalOpen] = React.useState(false);
  const [emailCopied, setEmailCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kamrynkopchinski@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1800);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  const project = {
    title: "IBS-Friendly Food Tracker",
    subtitle: "Personal Project · Health Product Concept",
    problem:
      "Managing IBS can feel like guesswork. Food and symptom tracking is often too manual, too generic, or too inconsistent to help users actually understand what triggers flare-ups.",
    skills: ["User research", "Health UX", "Data correlation", "Behavior tracking", "MVP design", "Roadmapping"],
    user: "Young adults with IBS who want a lightweight, non-overwhelming way to identify food triggers and symptom patterns.",
  };

  const skills = [
    "Product Thinking",
    "Backlog Management",
    "User Stories & Acceptance Criteria",
    "Roadmapping",
    "Stakeholder Alignment",
    "Cross-Functional Collaboration",
    "Agile Delivery",
    "Jira & Confluence",
    "Metrics & Reporting",
  ];

  const certifications = [
    "Certified ScrumMaster (CSM)",
    "Project Management Professional (PMP), exam scheduled June 2026",
  ];

  const projectCards = [
    {
      id: "ibs",
      tag: project.subtitle,
      title: project.title,
      blip: "Quick meal and symptom logging with timeline-based insights to identify IBS triggers.",
      chips: project.skills.slice(0, 3),
      icon: <UtensilsIcon size={20} />,
    },
    {
      id: "intake",
      tag: "Workflow / Internal Tool",
      title: "Monitoring Intake Redesign",
      blip: "Simplified intake routing across pods with clearer ownership and fewer misroutes.",
      chips: ["UX Clarity", "Routing Logic", "Stakeholder Alignment"],
      icon: <BarIcon size={20} />,
    },
    {
      id: "newsletter",
      tag: "Communication / Product Ops",
      title: "Commerce Collective Newsletter",
      blip: "Weekly digest to surface pod work, drive visibility, and align stakeholders.",
      chips: ["Storytelling", "Stakeholder Alignment", "Ops"],
      icon: <SparklesIcon size={20} />,
    },
    {
      id: "observability",
      tag: "Platform / Strategy",
      title: "Observability Roadmap",
      blip: "Defined a phased approach to OTEL, SLOs, and standardized monitoring across apps.",
      chips: ["Roadmapping", "Metrics", "Platform"],
      icon: <ClockIcon size={20} />,
    },
  ];

  const checks = {
    hasAboutAnchor: true,
    hasProjectsAnchor: true,
    hasSkillsAnchor: true,
    hasConnectAnchor: true,
    hasProjectSkills: project.skills.length >= 4,
    hasProjectCards: projectCards.length >= 4,
    hasModal: true,
  };

  return (
    <div style={styles.page}>
      <div style={{ display: "none" }}>
        {Object.values(checks).every(Boolean) ? "portfolio-ready" : "portfolio-needs-review"}
      </div>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navBrand}>Portfolio</div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}>
              About
            </a>
            <a href="#projects" style={styles.navLink}>
              Projects
            </a>
            <a href="#skills" style={styles.navLink}>
              Skills
            </a>
            <a href="#connect" style={styles.navLink}>
              Connect
            </a>
          </div>
        </nav>
      </header>

      <section style={styles.container}>
        <div style={styles.hero}>
          <div style={styles.avatar}>
            <AvatarIcon />
          </div>
          <h1 style={styles.heroTitle}>Kamryn</h1>
          <p style={styles.heroSubtitle}>
            <span style={{ fontWeight: 800, color: "#1f2440" }}>Product-Oriented Systems Engineer @ Disney</span>
          </p>
          <p style={styles.heroBlurb}>
            I currently work in Disney technology, where a lot of my day-to-day sits between execution and product thinking. I enjoy translating complex and ambiguous initiatives into clear priorities, aligned stakeholders, and outcomes that are easy to understand and execute against. While my current title is Systems Engineer, I’m intentionally building toward product by showcasing how I think about users, structure ideas, and shape solutions.
          </p>
          <div style={styles.socialRow}>
            <SocialLink href="mailto:kamrynkopchinski@gmail.com" label="Email">
              <MailIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/kamryn-kopchinski-b944651b2" label="LinkedIn">
              <LinkedInIcon />
            </SocialLink>
            <SocialLink href="https://www.github.com" label="GitHub">
              <GitHubIcon />
            </SocialLink>
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <p style={styles.sectionLead}>
          I currently work within Disney technology, partnering across engineering and leadership to bring structure, clarity, and momentum to complex work. A lot of what I enjoy most sits at the intersection of product thinking, communication, and execution, breaking down complex problems, identifying the underlying need, and shaping them into solutions that are more useful, actionable, and aligned across teams.
        </p>
        <p style={styles.sectionLead}>
          I’m especially drawn to digital products that feel thoughtful, intuitive, and genuinely supportive to the people using them. This IBS-friendly tracker concept is one example of how I like to think: start with a real user pain point, define the simplest valuable version, and then build from there.
        </p>
      </section>

      <div style={styles.divider} />

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <p style={styles.sectionLead}>
          A selection of product concepts and work samples. Each card is a quick preview, and I’m happy to dive deeper in conversation.
        </p>

        <div style={styles.projectsGrid}>
          {projectCards.map((item) => (
            <div
              key={item.id}
              style={{
                ...styles.projectCard,
                ...(item.id === "ibs" ? styles.clickableCard : {}),
              }}
              onClick={item.id === "ibs" ? () => setIsIbsModalOpen(true) : undefined}
              onMouseEnter={(e) => {
                if (item.id === "ibs") {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 18px 38px rgba(15,23,42,.08)";
                }
              }}
              onMouseLeave={(e) => {
                if (item.id === "ibs") {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = styles.projectCard.boxShadow;
                }
              }}
              role={item.id === "ibs" ? "button" : undefined}
              tabIndex={item.id === "ibs" ? 0 : undefined}
              onKeyDown={(e) => {
                if (item.id === "ibs" && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setIsIbsModalOpen(true);
                }
              }}
              aria-label={item.id === "ibs" ? "Open IBS project case study" : undefined}
            >
              <div style={styles.projectTop}>
                <span style={styles.projectTag}>{item.tag}</span>
                <span style={styles.iconBadge}>{item.icon}</span>
              </div>
              <div style={styles.projectTitle}>{item.title}</div>
              <div style={styles.projectText}>{item.blip}</div>
              <div style={styles.chips}>
                {item.chips.map((chip) => (
                  <span key={chip} style={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
              {item.id === "ibs" && (
                <div style={{ marginTop: 12, color: "#9d3f6b", fontSize: 13, fontWeight: 700 }}>
                  Click to view mini case study
                </div>
              )}
            </div>
          ))}
        </div>

        </section>

      <div style={styles.divider} />

      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills & Certifications</h2>
        <p style={styles.sectionLead}>
          These are some of the areas I’ve built experience in through my current work, along with certifications that support my product and delivery focus.
        </p>

        <div style={styles.skillsCard}>
          <div style={styles.skillsWrap}>
            {skills.map((skill) => (
              <span key={skill} style={styles.chip}>
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div style={{ ...styles.skillsCard, marginTop: 16 }}>
          <div style={{ fontWeight: 800, marginBottom: 10 }}>Certifications</div>
          <div style={styles.skillsWrap}>
            {certifications.map((certification) => (
              <span key={certification} style={styles.chip}>
                {certification}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div style={styles.divider} />

      <section id="connect" style={styles.section}>
        <h2 style={styles.sectionTitle}>Connect</h2>
        <p style={styles.sectionLead}>
          I’m always happy to connect around product, digital experiences, and opportunities where strong execution and thoughtful problem-solving come together.
        </p>
        <div style={styles.connectGrid}>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <MailIcon /> Email
            </div>
            <div style={styles.connectValue}>kamrynkopchinski@gmail.com</div>
            <button type="button" style={styles.copyButton} onClick={handleCopyEmail}>
              {emailCopied ? "Copied" : "Copy email"}
            </button>
          </div>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <LinkedInIcon /> LinkedIn
            </div>
            <a
              href="https://www.linkedin.com/in/kamryn-kopchinski-b944651b2"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.connectValue,
                textDecoration: "none",
                color: "#7c3aed",
                fontWeight: 600,
                transition: "all .18s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textDecoration = "underline";
                e.currentTarget.style.color = "#5b21b6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textDecoration = "none";
                e.currentTarget.style.color = "#7c3aed";
              }}
            >
              www.linkedin.com/in/kamryn-kopchinski-b944651b2
            </a>
          </div>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <HandshakeIcon /> Open to connect
            </div>
            <div style={styles.connectValue}>Product, strategy, delivery, and digital experience conversations.</div>
          </div>
        </div>
      </section>

      {isIbsModalOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsIbsModalOpen(false)}>
          <div style={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <div>
                <div style={styles.projectTag}>{project.subtitle}</div>
                <div style={{ ...styles.projectTitle, marginTop: 12 }}>IBS-Friendly Food Tracker</div>
                <div style={{ ...styles.projectText, fontSize: 15 }}>
                  A compact case study showing how I’d think through a product rooted in a real user pain point.
                </div>
              </div>
              <button
                type="button"
                style={styles.modalClose}
                onClick={() => setIsIbsModalOpen(false)}
                aria-label="Close case study"
              >
                ×
              </button>
            </div>

            <div style={styles.modalGrid}>
              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>Problem</div>
                <div style={styles.projectText}>
                  Users with IBS often know they should track meals and symptoms, but most tracking flows are too heavy and do not help connect food, timing, and flare-ups in a simple way.
                </div>
              </div>

              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>Target user</div>
                <div style={styles.projectText}>
                  Young adults managing IBS who want a lightweight, less overwhelming way to spot food triggers and daily patterns.
                </div>
              </div>

              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>MVP</div>
                <ul style={styles.modalList}>
                  <li>Quick meal logging with simple tags</li>
                  <li>Symptom tracking with timing and severity</li>
                  <li>Timeline view to connect food and symptoms</li>
                  <li>Basic trigger insights and weekly summaries</li>
                </ul>
              </div>

              <div style={styles.modalSection}>
                <div style={styles.modalSectionTitle}>Why it matters</div>
                <div style={styles.projectText}>
                  The value is not just logging. It is helping users feel less uncertain and giving them clearer signals about what may be affecting them.
                </div>
              </div>
            </div>

            <div style={{ ...styles.caseBlock, marginTop: 18 }}>
              <div style={styles.caseTitle}>Product preview</div>
              <div style={{ display: "grid", gap: 12, marginTop: 10 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={styles.visualCard}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>Home dashboard</div>
                    <div style={{ color: "#7c5c7a", fontSize: 12, marginTop: 4 }}>See what to log next and which patterns are starting to stand out</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 12 }}>
                      <div style={{ borderRadius: 12, background: "#faf7ff", padding: 10 }}>
                        <div style={{ fontSize: 11, color: "#7c5c7a" }}>Status</div>
                        <div style={{ marginTop: 4, fontWeight: 800 }}>Stable</div>
                      </div>
                      <div style={{ borderRadius: 12, background: "#fff7fb", padding: 10 }}>
                        <div style={{ fontSize: 11, color: "#7c5c7a" }}>Top trigger</div>
                        <div style={{ marginTop: 4, fontWeight: 800 }}>Dairy</div>
                      </div>
                    </div>
                  </div>

                  <div style={styles.visualCard}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>Quick log</div>
                    <div style={{ color: "#7c5c7a", fontSize: 12, marginTop: 4 }}>Fast enough to use consistently</div>
                    <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
                      {["Dairy", "Caffeine", "Gluten"].map((tag) => (
                        <span key={tag} style={{ ...styles.chip, background: "#fff7fb", color: "#9d3f6b" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <div style={styles.visualCard}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>Trend preview</div>
                    <div style={{ color: "#7c5c7a", fontSize: 12, marginTop: 4 }}>
                      A simple signal that helps users see patterns instead of guessing
                    </div>
                    <div style={{ display: "flex", alignItems: "end", gap: 8, height: 78, marginTop: 14 }}>
                      {[32, 54, 28, 66, 40, 22].map((height, idx) => (
                        <div
                          key={idx}
                          style={{
                            flex: 1,
                            borderRadius: 10,
                            height,
                            background: idx === 3 ? "linear-gradient(180deg, #f472b6 0%, #c084fc 100%)" : "#e9d5ff",
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <div style={styles.visualCard}>
                    <div style={{ fontWeight: 800, fontSize: 15 }}>Weekly summary</div>
                    <div style={{ color: "#7c5c7a", fontSize: 12, marginTop: 4 }}>A low-stress way to review patterns</div>
                    <div style={{ marginTop: 12, borderRadius: 12, background: "#faf7ff", padding: 10, color: "#6b5b95", fontSize: 12, lineHeight: 1.6 }}>
                      3 flare-ups this week, dairy showed up in 2 of them, caffeine appeared once, and lunch tended to be the most common symptom window.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div style={styles.footerPad} />
    </div>
  );
}
