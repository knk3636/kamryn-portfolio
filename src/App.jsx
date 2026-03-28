const styles = {
  page: {
    minHeight: "100vh",
    background: "#f8fafc",
    color: "#0f172a",
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 20,
    borderBottom: "1px solid #e2e8f0",
    background: "rgba(248, 250, 252, 0.95)",
    backdropFilter: "blur(10px)",
  },
  nav: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "16px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },
  navTitle: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    color: "#64748b",
  },
  navLinks: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  navLink: {
    color: "#475569",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
  },
  container: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "64px 24px",
  },
  hero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  avatar: {
    width: "160px",
    height: "160px",
    borderRadius: "9999px",
    background: "#e2e8f0",
    border: "4px solid #ffffff",
    boxShadow: "0 10px 30px rgba(15, 23, 42, 0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  heroTitle: {
    marginTop: "24px",
    fontSize: "56px",
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  heroSubtitle: {
    marginTop: "12px",
    fontSize: "28px",
    color: "#475569",
  },
  heroSubtitleStrong: {
    fontWeight: 700,
    color: "#0f172a",
  },
  heroBlurb: {
    marginTop: "24px",
    maxWidth: "840px",
    fontSize: "18px",
    lineHeight: 1.8,
    color: "#475569",
  },
  socialRow: {
    marginTop: "28px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
  },
  socialButton: {
    width: "48px",
    height: "48px",
    borderRadius: "9999px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    boxShadow: "0 4px 14px rgba(15, 23, 42, 0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: "#334155",
  },
  section: {
    maxWidth: "1120px",
    margin: "0 auto",
    padding: "16px 24px 40px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "32px",
    padding: "32px",
    boxShadow: "0 8px 28px rgba(15, 23, 42, 0.05)",
  },
  sectionTitle: {
    fontSize: "34px",
    fontWeight: 700,
    margin: 0,
  },
  sectionText: {
    marginTop: "16px",
    maxWidth: "820px",
    fontSize: "17px",
    lineHeight: 1.85,
    color: "#475569",
  },
  grid2: {
    marginTop: "28px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
  },
  strengthCard: {
    borderRadius: "24px",
    background: "#f8fafc",
    padding: "24px",
  },
  strengthTitle: {
    margin: 0,
    fontSize: "20px",
    fontWeight: 700,
  },
  strengthText: {
    marginTop: "10px",
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#475569",
  },
  overline: {
    margin: 0,
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#64748b",
  },
  projectsGrid: {
    marginTop: "28px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  projectCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "32px",
    padding: "24px",
    boxShadow: "0 8px 28px rgba(15, 23, 42, 0.05)",
  },
  projectHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "16px",
  },
  projectSubtitle: {
    margin: 0,
    fontSize: "14px",
    fontWeight: 600,
    color: "#64748b",
  },
  projectTitle: {
    margin: "8px 0 0",
    fontSize: "24px",
    fontWeight: 700,
    lineHeight: 1.25,
  },
  iconCircle: {
    width: "48px",
    height: "48px",
    borderRadius: "9999px",
    background: "#f1f5f9",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    color: "#334155",
  },
  projectText: {
    marginTop: "18px",
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#334155",
  },
  chips: {
    marginTop: "18px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  chip: {
    borderRadius: "9999px",
    padding: "8px 14px",
    background: "#f1f5f9",
    fontSize: "12px",
    fontWeight: 600,
    color: "#334155",
  },
  skillLayout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
  },
  darkCard: {
    background: "#0f172a",
    color: "#ffffff",
    border: "1px solid #0f172a",
    borderRadius: "32px",
    padding: "32px",
    boxShadow: "0 8px 28px rgba(15, 23, 42, 0.12)",
  },
  darkText: {
    marginTop: "16px",
    fontSize: "15px",
    lineHeight: 1.9,
    color: "#cbd5e1",
  },
  bulletRow: {
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginTop: "12px",
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#e2e8f0",
  },
  connectTop: {
    display: "flex",
    justifyContent: "space-between",
    gap: "24px",
    alignItems: "flex-end",
    flexWrap: "wrap",
  },
  contactGrid: {
    marginTop: "28px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
  },
  contactCard: {
    borderRadius: "24px",
    background: "#f8fafc",
    padding: "20px",
  },
  contactLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: 700,
  },
  contactText: {
    marginTop: "12px",
    fontSize: "15px",
    lineHeight: 1.7,
    color: "#475569",
  },
};

function IconBase({ size = 20, children, fill = "none" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      stroke="currentColor"
      strokeWidth="1.8"
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.03 2.03 0 0 0 3.2 5.03c0 1.1.9 2 2.02 2a2.02 2.02 0 1 0 .03-4.03ZM20.8 12.9c0-3.48-1.86-5.1-4.35-5.1-2 0-2.9 1.1-3.4 1.87V8.5H9.68c.04.78 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.4 1.92-1.4 1.35 0 1.9 1.03 1.9 2.54V20H20.8v-7.1Z" />
    </svg>
  );
}

function GitHubIcon({ size = 20 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.8.5 12.35c0 5.24 3.3 9.68 7.87 11.24.58.11.79-.26.79-.57 0-.28-.01-1.21-.02-2.2-3.2.71-3.88-1.39-3.88-1.39-.52-1.38-1.28-1.75-1.28-1.75-1.05-.74.08-.72.08-.72 1.16.09 1.77 1.23 1.77 1.23 1.04 1.83 2.72 1.31 3.38 1 .1-.77.4-1.31.73-1.61-2.56-.3-5.25-1.31-5.25-5.86 0-1.3.45-2.36 1.19-3.19-.12-.3-.52-1.5.11-3.12 0 0 .97-.32 3.19 1.22a10.7 10.7 0 0 1 5.82 0c2.22-1.54 3.19-1.22 3.19-1.22.63 1.62.23 2.82.11 3.12.74.83 1.19 1.89 1.19 3.19 0 4.56-2.7 5.55-5.28 5.84.41.36.78 1.07.78 2.16 0 1.56-.01 2.81-.01 3.2 0 .31.21.69.8.57 4.56-1.56 7.85-6 7.85-11.24C23.5 5.8 18.35.5 12 .5Z" />
    </svg>
  );
}

function UserIcon({ size = 56 }) {
  return (
    <IconBase size={size}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19" />
    </IconBase>
  );
}

function FolderKanbanIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
      <path d="M8 11h3" />
      <path d="M8 15h2" />
      <path d="M14 11h2" />
      <path d="M14 15h3" />
    </IconBase>
  );
}

function SparklesIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M12 3l1.4 3.6L17 8l-3.6 1.4L12 13l-1.4-3.6L7 8l3.6-1.4L12 3Z" />
      <path d="M18.5 14l.8 2 .7.3-2 .8-.8 2-.8-2-2-.8 2-.8.8-1.5Z" />
      <path d="M5.5 13l.9 2.2L9 16l-2.6.8-.9 2.2-.9-2.2L2 16l2.6-.8.9-2.2Z" />
    </IconBase>
  );
}

function HandshakeIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M8.5 11.5 11 14c.8.8 2.2.8 3 0l3.5-3.5" />
      <path d="M3 10l4-4c.8-.8 2-.8 2.8 0L12 8.2l2.2-2.2c.8-.8 2-.8 2.8 0l4 4" />
      <path d="M6 13l-2.5 2.5a1.4 1.4 0 0 0 2 2L8 15" />
      <path d="M18 13l2.5 2.5a1.4 1.4 0 0 1-2 2L16 15" />
    </IconBase>
  );
}

function WalletIcon({ size = 20 }) {
  return (
    <IconBase size={size}>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v2H6.5A2.5 2.5 0 0 1 4 6.5v1Z" />
      <path d="M4 9h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9Z" />
      <circle cx="16.5" cy="14" r=".9" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

function UtensilsIcon({ size = 20 }) {
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

function ExternalLinkIcon({ size = 16 }) {
  return (
    <IconBase size={size}>
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" />
    </IconBase>
  );
}

function isValidLink(value) {
  return typeof value === "string" && value.length > 0;
}

export default function App() {
  const strengths = [
    {
      title: "Backlog & Delivery Leadership",
      text: "I help turn large efforts into structured epics, stories, acceptance criteria, milestones, and weekly progress updates that teams can actually execute against.",
    },
    {
      title: "Cross-Functional Alignment",
      text: "I regularly work across engineering, service owners, managers, and platform teams to clarify scope, surface blockers, and keep work moving.",
    },
    {
      title: "Executive-Ready Communication",
      text: "I create concise updates, roadmap views, status summaries, and leadership-facing materials that translate technical work into clear business value.",
    },
    {
      title: "Operational Product Thinking",
      text: "My experience sits at the intersection of product, delivery, and platform operations — especially around observability, monitoring, intake design, and service improvement.",
    },
  ];

  const skills = [
    "Product Thinking",
    "Backlog Management",
    "User Stories & Acceptance Criteria",
    "Roadmapping",
    "Stakeholder Alignment",
    "Cross-Functional Collaboration",
    "Executive Communication",
    "Agile Delivery",
    "Jira & Confluence",
    "Process Design",
    "A/B Testing Support",
    "Metrics & Reporting",
  ];

  const portfolio = [
    {
      title: "Monitoring Intake Redesign",
      subtitle: "Product Operations / Workflow Design",
      icon: FolderKanbanIcon,
      problem:
        "Monitoring requests were not clearly routed, which created confusion around ownership between teams and slowed intake.",
      impact:
        "Defined cleaner request categories, routing logic, and ownership boundaries to improve clarity and reduce friction for request submitters and delivery teams.",
      skills: ["Product requirements", "Workflow design", "Stakeholder alignment", "Process improvement"],
    },
    {
      title: "Observability Roadmap Support",
      subtitle: "Roadmapping / Strategic Communication",
      icon: SparklesIcon,
      problem:
        "Technical direction existed, but it needed to be translated into a roadmap and simple narrative that broader audiences could understand.",
      impact:
        "Built timeline and roadmap support materials to help communicate vision, dependencies, and delivery sequencing for observability initiatives.",
      skills: ["Roadmapping", "Executive storytelling", "Dependency mapping", "Strategic communication"],
    },
    {
      title: "Sprint & Backlog Quality Improvements",
      subtitle: "Delivery Excellence / Agile Execution",
      icon: FolderKanbanIcon,
      problem:
        "Stories across efforts were inconsistent in quality, with missing acceptance criteria, due dates, and descriptions, creating confusion during execution.",
      impact:
        "Drove better planning hygiene by reinforcing clear acceptance criteria, due dates, and alignment sessions to improve execution quality across workstreams.",
      skills: ["Backlog management", "Story writing", "Agile facilitation", "Team coordination"],
    },
    {
      title: "Budget Tracker Concept",
      subtitle: "Personal Finance Product Concept",
      icon: WalletIcon,
      problem:
        "People often struggle to understand where their money is going and need a simpler way to track spending, categorize purchases, and stay on budget.",
      impact:
        "A strong showcase piece for product thinking because it demonstrates user needs, feature prioritization, dashboard concepts, and measurable outcomes around habits and spending visibility.",
      skills: ["User needs", "Feature prioritization", "Dashboard thinking", "Consumer product mindset"],
    },
    {
      title: "Food & Nutrition Tracker Concept",
      subtitle: "Wellness Product Concept",
      icon: UtensilsIcon,
      problem:
        "Many users want an easier way to log meals, view nutrition trends, and stay consistent without using an overwhelming app.",
      impact:
        "This can showcase how you think through user flows, lightweight habit tracking, insight dashboards, retention features, and simple MVP planning.",
      skills: ["UX thinking", "Habit tracking", "MVP planning", "Engagement design"],
    },
  ];

  const socialLinks = [
    { icon: MailIcon, label: "Email", href: "mailto:yourname@email.com" },
    { icon: LinkedInIcon, label: "LinkedIn", href: "https://www.linkedin.com" },
    { icon: GitHubIcon, label: "GitHub", href: "https://www.github.com" },
  ].filter((link) => isValidLink(link.href));

  const checks = [socialLinks.length >= 3, portfolio.length >= 5, skills.length >= 8, strengths.length >= 4];

  return (
    <div style={styles.page}>
      <div style={{ display: "none" }}>{checks.every(Boolean) ? "portfolio-ready" : "portfolio-needs-review"}</div>

      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.navTitle}>Portfolio</div>
          <div style={styles.navLinks}>
            <a href="#about" style={styles.navLink}>About</a>
            <a href="#projects" style={styles.navLink}>Projects</a>
            <a href="#skills" style={styles.navLink}>Skills</a>
            <a href="#connect" style={styles.navLink}>Connect</a>
          </div>
        </nav>
      </header>

      <section style={styles.container}>
        <div style={styles.hero}>
          <div style={styles.avatar}>
            <UserIcon size={64} />
          </div>

          <h1 style={styles.heroTitle}>Kamryn</h1>

          <p style={styles.heroSubtitle}>
            <span style={styles.heroSubtitleStrong}>Product Manager</span>
            <span style={{ margin: "0 8px", color: "#94a3b8" }}>@</span>
            <span>Disney</span>
          </p>

          <p style={styles.heroBlurb}>
            I currently work within Disney technology, partnering across engineering and leadership to bring structure to complex technical efforts. My work blends product thinking, backlog management, roadmap communication, stakeholder alignment, and operational execution. I’m now working toward growing deeper into digital product management, with a focus on building thoughtful, user-centered experiences that create real impact.
          </p>

          <div style={styles.socialRow}>
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} style={styles.socialButton}>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="about" style={styles.section}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>About</h2>
          <p style={styles.sectionText}>
            My background is highly aligned to product work, even when my title has lived closer to systems and delivery. I already help define work, clarify requirements, improve intake processes, communicate strategy, support roadmap conversations, and keep teams aligned around execution. That makes me well-positioned to continue growing into formal product ownership roles where I can connect user needs, business priorities, and team delivery.
          </p>
          <div style={styles.grid2}>
            {strengths.map((item) => (
              <div key={item.title} style={styles.strengthCard}>
                <h3 style={styles.strengthTitle}>{item.title}</h3>
                <p style={styles.strengthText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <div>
          <p style={styles.overline}>Selected Work</p>
          <h2 style={{ ...styles.sectionTitle, marginTop: "8px" }}>Projects</h2>
        </div>

        <div style={styles.projectsGrid}>
          {portfolio.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} style={styles.projectCard}>
                <div style={styles.projectHeader}>
                  <div>
                    <p style={styles.projectSubtitle}>{item.subtitle}</p>
                    <h3 style={styles.projectTitle}>{item.title}</h3>
                  </div>
                  <div style={styles.iconCircle}>
                    <Icon size={20} />
                  </div>
                </div>

                <div style={styles.projectText}>
                  <strong>Problem: </strong>
                  {item.problem}
                </div>
                <div style={styles.projectText}>
                  <strong>Impact: </strong>
                  {item.impact}
                </div>

                <div style={styles.chips}>
                  {item.skills.map((skill) => (
                    <span key={skill} style={styles.chip}>{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="skills" style={styles.section}>
        <div style={styles.skillLayout}>
          <div style={styles.card}>
            <h2 style={styles.sectionTitle}>Skills</h2>
            <div style={styles.chips}>
              {skills.map((skill) => (
                <span key={skill} style={{ ...styles.chip, background: "#f8fafc", border: "1px solid #e2e8f0" }}>{skill}</span>
              ))}
            </div>
          </div>

          <div style={styles.darkCard}>
            <h2 style={{ ...styles.sectionTitle, color: "#ffffff" }}>Project idea to showcase product thinking</h2>
            <p style={styles.darkText}>
              A personal budget tracker or food tracker is actually a smart portfolio addition because it lets you show product skills outside of confidential company work. You can present the target user, the pain point, your MVP, sample wireframes, core features, success metrics, and what you would build next.
            </p>
            <div style={styles.bulletRow}><ExternalLinkIcon size={16} /><span><strong>Budget tracker:</strong> categories, monthly goals, spending insights, alerts, simple dashboard.</span></div>
            <div style={styles.bulletRow}><ExternalLinkIcon size={16} /><span><strong>Food tracker:</strong> meal logging, macro summaries, streaks, reminders, weekly health insights.</span></div>
          </div>
        </div>
      </section>

      <section id="connect" style={{ ...styles.section, paddingBottom: "72px", paddingTop: "24px" }}>
        <div style={styles.card}>
          <div style={styles.connectTop}>
            <div>
              <p style={styles.overline}>Let’s Connect</p>
              <h2 style={{ ...styles.sectionTitle, marginTop: "8px" }}>Connect</h2>
              <p style={{ ...styles.sectionText, marginTop: "12px", maxWidth: "700px" }}>
                I’m always excited to connect around product, digital experiences, and opportunities where thoughtful strategy and strong execution can come together.
              </p>
            </div>
            <div style={styles.socialRow}>
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} style={styles.socialButton}>
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div style={styles.contactGrid}>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}><MailIcon size={20} /><span>Email</span></div>
              <p style={styles.contactText}>yourname@email.com</p>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}><LinkedInIcon size={20} /><span>LinkedIn</span></div>
              <p style={styles.contactText}>Add your LinkedIn profile here</p>
            </div>
            <div style={styles.contactCard}>
              <div style={styles.contactLabel}><HandshakeIcon size={20} /><span>Open to connect</span></div>
              <p style={styles.contactText}>Product, strategy, delivery, and digital experience conversations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
