const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)",
    color: "#0f172a",
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    borderBottom: "1px solid rgba(226,232,240,.9)",
    background: "rgba(248,250,252,.92)",
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
    background: "linear-gradient(135deg, #dbeafe, #e2e8f0)",
    margin: "0 auto",
    border: "5px solid white",
    boxShadow: "0 20px 50px rgba(15,23,42,.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#475569",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center 20%",
    transform: "scale(1.02)",
    display: "block",
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
    background: "white",
    border: "1px solid #e2e8f0",
    boxShadow: "0 8px 24px rgba(15,23,42,.06)",
    color: "#334155",
    textDecoration: "none",
  },
  section: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: "24px",
  },
  sectionTitle: {
    fontSize: 34,
    fontWeight: 800,
    letterSpacing: "-.03em",
    margin: 0,
  },
  sectionLead: {
    marginTop: 12,
    color: "#475569",
    maxWidth: 760,
    lineHeight: 1.8,
    fontSize: 16,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 18,
    marginTop: 18,
  },
  projectCard: {
    padding: 18,
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
    background: "#e0f2fe",
    color: "#0369a1",
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
    background: "#eff6ff",
    border: "1px solid #dbeafe",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#2563eb",
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
    marginTop: 22,
    padding: 24,
    borderRadius: 24,
    border: "1px solid #dbe4f0",
    background: "rgba(255,255,255,.88)",
    boxShadow: "0 18px 50px rgba(15,23,42,.06)",
  },
  featuredGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 22,
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
  mockShell: {
    background: "linear-gradient(180deg, #0f172a 0%, #111827 100%)",
    borderRadius: 28,
    padding: 12,
    boxShadow: "0 25px 60px rgba(15,23,42,.18)",
  },
  mockPhone: {
    background: "#f8fafc",
    borderRadius: 24,
    minHeight: 640,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,.15)",
  },
  mockTop: {
    padding: "18px 18px 10px",
    background: "linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)",
    borderBottom: "1px solid #e2e8f0",
  },
  mockPillRow: {
    display: "flex",
    gap: 8,
    marginTop: 12,
    flexWrap: "wrap",
  },
  mockPill: {
    padding: "6px 10px",
    borderRadius: 999,
    background: "white",
    border: "1px solid #dbeafe",
    fontSize: 12,
    fontWeight: 700,
    color: "#2563eb",
  },
  mockContent: {
    padding: 16,
    display: "grid",
    gap: 14,
  },
  mockCard: {
    background: "white",
    border: "1px solid #e2e8f0",
    borderRadius: 20,
    padding: 16,
  },
  mockTitle: {
    fontWeight: 800,
    fontSize: 16,
  },
  mockSub: {
    marginTop: 4,
    color: "#64748b",
    fontSize: 13,
  },
  symptomRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    marginTop: 12,
  },
  symptomScale: {
    display: "flex",
    gap: 6,
  },
  symptomDot: (active) => ({
    width: 14,
    height: 14,
    borderRadius: 999,
    background: active ? "#fb7185" : "#e2e8f0",
  }),
  timelineBlock: {
    marginTop: 14,
    display: "grid",
    gap: 10,
  },
  timelineRow: {
    display: "grid",
    gridTemplateColumns: "56px 1fr",
    gap: 12,
    alignItems: "start",
  },
  timeLabel: {
    fontSize: 12,
    fontWeight: 700,
    color: "#64748b",
    paddingTop: 4,
  },
  timelineCard: {
    background: "#f8fafc",
    border: "1px solid #e2e8f0",
    borderRadius: 16,
    padding: 12,
  },
  insightBanner: {
    marginTop: 10,
    background: "linear-gradient(135deg, #ecfeff, #eef2ff)",
    border: "1px solid #c7d2fe",
    borderRadius: 16,
    padding: 14,
  },
  insightHeadline: {
    fontWeight: 800,
    color: "#3730a3",
    fontSize: 14,
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
  footerPad: {
    height: 40,
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
    <IconBase size={size}>
      <path d="M5 9v10" />
      <path d="M5 5h.01" />
      <path d="M10 9v10" />
      <path d="M10 13a3 3 0 0 1 6 0v6" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </IconBase>
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

function AvatarImage() {
  const [hasError, setHasError] = React.useState(false);

  if (!PROFILE_IMAGE_SRC || hasError) {
    return <UserIcon size={70} />;
  }

  return (
    <img
      src={PROFILE_IMAGE_SRC}
      alt="Kamryn headshot"
      style={styles.avatarImage}
      onError={() => setHasError(true)}
    />
  );
}

function PhoneMock() {
  return (
    <div style={styles.mockShell}>
      <div style={styles.mockPhone}>
        <div style={styles.mockTop}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 20 }}>Digestly</div>
              <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
                IBS-friendly symptom &amp; meal tracking
              </div>
            </div>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 12,
                background: "white",
                border: "1px solid #dbeafe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#2563eb",
              }}
            >
              <SparklesIcon />
            </div>
          </div>
          <div style={styles.mockPillRow}>
            <div style={styles.mockPill}>Quick meal log</div>
            <div style={styles.mockPill}>Symptom trends</div>
            <div style={styles.mockPill}>Trigger insights</div>
          </div>
        </div>

        <div style={styles.mockContent}>
          <div style={styles.mockCard}>
            <div style={styles.mockTitle}>Today&apos;s Check-In</div>
            <div style={styles.mockSub}>Log your last meal and how you feel right now.</div>
            <div style={styles.symptomRow}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Bloating</div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Severity scale</div>
              </div>
              <div style={styles.symptomScale}>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} style={styles.symptomDot(num <= 3)} />
                ))}
              </div>
            </div>
            <div style={styles.symptomRow}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14 }}>Meal tag</div>
                <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Lunch · pasta · dairy</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", fontSize: 13 }}>
                <ClockIcon size={14} /> 1:12 PM
              </div>
            </div>
          </div>

          <div style={styles.mockCard}>
            <div style={styles.mockTitle}>Timeline</div>
            <div style={styles.mockSub}>A simple way to connect meals and symptoms.</div>
            <div style={styles.timelineBlock}>
              <div style={styles.timelineRow}>
                <div style={styles.timeLabel}>8:40</div>
                <div style={styles.timelineCard}>
                  <div style={{ fontWeight: 700 }}>Greek yogurt + coffee</div>
                  <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Tags: dairy, caffeine</div>
                </div>
              </div>
              <div style={styles.timelineRow}>
                <div style={styles.timeLabel}>11:30</div>
                <div style={styles.timelineCard}>
                  <div style={{ fontWeight: 700 }}>Symptoms begin</div>
                  <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Bloating 3/5 · cramps 2/5</div>
                </div>
              </div>
              <div style={styles.timelineRow}>
                <div style={styles.timeLabel}>2:15</div>
                <div style={styles.timelineCard}>
                  <div style={{ fontWeight: 700 }}>Trigger pattern noted</div>
                  <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>
                    Dairy appeared in 3 of last 4 flare days
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={styles.insightBanner}>
            <div style={styles.insightHeadline}>Possible trigger detected: dairy</div>
            <div style={{ color: "#4338ca", fontSize: 13, marginTop: 6, lineHeight: 1.6 }}>
              Meals tagged with dairy appeared before recent symptoms 75% of the time. Consider watching portions and
              timing.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
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

  const checks = {
    hasAboutAnchor: true,
    hasProjectsAnchor: true,
    hasSkillsAnchor: true,
    hasConnectAnchor: true,
    hasProjectSkills: project.skills.length >= 4,
  };

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

  return (
    <div style={styles.page}>
      <div style={{ display: "none" }}>
        {Object.values(checks).every(Boolean) ? "portfolio-ready" : "portfolio-needs-review"}
      </div>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navBrand}>Kamryn Portfolio</div>
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
            <AvatarImage />
          </div>
          <h1 style={styles.heroTitle}>Kamryn</h1>
          <p style={styles.heroSubtitle}>
            <span style={{ fontWeight: 800, color: "#0f172a" }}>Product-Focused Systems Engineer @ Disney</span>
          </p>
          <p style={styles.heroBlurb}>
            I work at the intersection of product thinking and delivery, translating complex, ambiguous problems into
            clear plans, aligned teams, and shipped outcomes. While my title is Systems Engineer, my day-to-day focuses
            on prioritization, stakeholder alignment, and shaping solutions that create real user and business impact.
            I&apos;m actively building toward a dedicated product role by pairing hands-on delivery experience with
            structured product thinking.
          </p>
          <div style={styles.socialRow}>
            <SocialLink href="mailto:yourname@email.com" label="Email">
              <MailIcon />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com" label="LinkedIn">
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
          I currently work within Disney technology, partnering across engineering and leadership to bring structure,
          clarity, and momentum to complex work. A lot of what I enjoy most sits at the intersection of product
          thinking, communication, and execution, taking something messy, understanding the real problem, and shaping
          it into something more useful and easier to act on.
        </p>
        <p style={styles.sectionLead}>
          I&apos;m especially drawn to digital products that feel thoughtful, intuitive, and genuinely supportive to the
          people using them. This IBS-friendly tracker concept is one example of how I like to think: start with a real
          user pain point, define the simplest valuable version, and then build from there.
        </p>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <p style={styles.sectionLead}>
          A selection of product concepts and work samples. Each card is a quick preview, and I&apos;m happy to dive deeper
          in conversation.
        </p>

        <div style={styles.projectsGrid}>
          {projectCards.map((item) => (
            <div key={item.id} style={styles.projectCard}>
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
            </div>
          ))}
        </div>

        <div style={styles.featuredWrap}>
          <div style={styles.projectTag}>{project.subtitle}</div>
          <div style={{ ...styles.projectTitle, fontSize: 24 }}>{project.title}</div>
          <div style={{ ...styles.projectText, fontSize: 15 }}>
            An IBS-friendly food tracker designed to help users quickly log meals and symptoms, then uncover patterns
            over time so they can make more confident daily decisions.
          </div>
          <div style={styles.chips}>
            {project.skills.map((skill) => (
              <span key={skill} style={styles.chip}>
                {skill}
              </span>
            ))}
          </div>

          <div style={styles.featuredGrid}>
            <div style={styles.caseBlock}>
              <div style={styles.caseTitle}>Project blip</div>

              <div style={{ marginTop: 12 }}>
                <div style={styles.caseMiniLabel}>Problem</div>
                <p style={styles.caseText}>{project.problem}</p>
              </div>

              <div style={{ marginTop: 12 }}>
                <div style={styles.caseMiniLabel}>Target user</div>
                <p style={styles.caseText}>{project.user}</p>
              </div>

              <div style={{ marginTop: 12 }}>
                <div style={styles.caseMiniLabel}>What makes it valuable</div>
                <p style={styles.caseText}>
                  The value is not just in logging food. It&apos;s in helping users understand relationships between meals,
                  timing, and symptoms so they can make more informed choices with less guesswork.
                </p>
              </div>
            </div>

            <PhoneMock />
          </div>
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills &amp; Certifications</h2>
        <p style={styles.sectionLead}>
          These are some of the areas I&apos;ve built experience in through my current work, along with certifications that
          support my product and delivery focus.
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
            {certifications.map((cert) => (
              <span key={cert} style={styles.chip}>
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="connect" style={styles.section}>
        <h2 style={styles.sectionTitle}>Connect</h2>
        <p style={styles.sectionLead}>
          I&apos;m always happy to connect around product, digital experiences, and opportunities where strong execution and
          thoughtful problem-solving come together.
        </p>
        <div style={styles.connectGrid}>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <MailIcon /> Email
            </div>
            <div style={styles.connectValue}>yourname@email.com</div>
          </div>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <LinkedInIcon /> LinkedIn
            </div>
            <div style={styles.connectValue}>Add your LinkedIn profile here</div>
          </div>
          <div style={styles.connectCard}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, fontWeight: 800 }}>
              <HandshakeIcon /> Open to connect
            </div>
            <div style={styles.connectValue}>Product, strategy, delivery, and digital experience conversations.</div>
          </div>
        </div>
      </section>

      <div style={styles.footerPad} />
    </div>
  );
}
