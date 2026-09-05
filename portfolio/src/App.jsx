import { useEffect, useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Code2,
  Cpu,
  GraduationCap,
  Mail,
  Menu,
  Moon,
  Network,
  Sparkles,
  Sun,
  Trophy,
  X,
  Zap,
} from 'lucide-react'


function GithubIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.72c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.16A10.8 10.8 0 0 1 12 6.18c.96 0 1.92.13 2.82.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.34-2.64 5.29-5.15 5.57.4.35.76 1.04.76 2.1v3.09c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" />
    </svg>
  )
}

function LinkedinIcon({ size = 24, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M5.37 3.5A2.18 2.18 0 1 1 5.36 7.86 2.18 2.18 0 0 1 5.37 3.5ZM3.5 9.5h3.74V21H3.5V9.5Zm6.06 0h3.58v1.57h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.5 4.49 5.74V21h-3.73v-5.44c0-1.3-.03-2.97-1.81-2.97-1.81 0-2.09 1.42-2.09 2.88V21H9.56V9.5Z" />
    </svg>
  )
}

const LINKS = {
  github: 'https://github.com/aadith247',
  linkedin: 'https://linkedin.com/in/aadithhya247',
  leetcode: 'https://leetcode.com/u/Aadithhya247/',
  codechef: 'https://www.codechef.com/users/aadithh1',
  email: 'mailto:taadithhya@gmail.com',
  resume: '/Thatipally_Aadithhya_Resume.pdf',
}

const projects = [
  {
    num: '01',
    title: 'QuickLearn.AI',
    label: 'AI learning platform',
    copy: 'Turns a single topic into a structured learning path with generated chapters, code examples, key points and curated video resources.',
    impact: ['<10s generation', '80% less manual course creation', '+25% engagement'],
    stack: ['Next.js 15', 'React 19', 'PostgreSQL', 'Gemini', 'YouTube API'],
    github: 'https://github.com/aadith247/QuickLearn.AI',
    live: 'https://quick-learn-ai-ynxs.vercel.app/',
    visual: 'ai',
  },
  {
    num: '02',
    title: 'LiveDocs',
    label: 'Distributed collaborative editor',
    copy: 'A Google-Docs-style editor built around a custom RGA CRDT, authenticated WebSockets, room isolation and persistent storage.',
    impact: ['10+ concurrent users', 'sub-50ms sync', 'conflict-free edits'],
    stack: ['TypeScript', 'WebSockets', 'PostgreSQL', 'CRDT', 'JWT'],
    github: 'https://github.com/aadith247/realtime-docs',
    visual: 'crdt',
  },
  {
    num: '03',
    title: 'Astra',
    label: 'Compiler from scratch',
    copy: 'A Hindi-inspired programming language compiler with lexical analysis, CFG parsing, AST construction and single-pass code generation to C.',
    impact: ['5+ language constructs', 'O(n) code generation', 'GCC-runnable output'],
    stack: ['C', 'Flex', 'Bison', 'AST', 'GCC'],
    github: 'https://github.com/aadith247/Astra/tree/main',
    visual: 'compiler',
  },
]

const skillGroups = [
  { title: 'Languages', icon: Code2, items: ['C++', 'Java', 'C', 'C#', 'Go', 'JavaScript', 'TypeScript'] },
  { title: 'Backend + Systems', icon: Cpu, items: ['.NET', 'Node.js', 'REST APIs', 'WebSockets', 'Multithreading', 'Distributed Systems'] },
  { title: 'Frontend', icon: Sparkles, items: ['React', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'] },
  { title: 'Data + Tools', icon: Braces, items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Git', 'Linux', 'Vercel'] },
]

function useTheme() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])
  return [theme, setTheme]
}

function App() {
  const [theme, setTheme] = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [mouse, setMouse] = useState({ x: 50, y: 20 })

  useEffect(() => {
    const move = (e) => setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 })
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [])

  const year = useMemo(() => new Date().getFullYear(), [])

  const go = () => setMenuOpen(false)

  return (
    <div className="site" style={{ '--mx': `${mouse.x}%`, '--my': `${mouse.y}%` }}>
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="cursor-glow" />
      <div className="grid-overlay" />

      <header className="nav-wrap">
        <nav className="nav shell" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={go} aria-label="Back to top">
            <span className="brand-mark">A</span>
            <span className="brand-name">aadithhya<span className="brand-dot">.</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#work" onClick={go}>Work</a>
            <a href="#experience" onClick={go}>Experience</a>
            <a href="#stack" onClick={go}>Stack</a>
            <a href="#about" onClick={go}>About</a>
            <a className="nav-resume" href={LINKS.resume} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14}/></a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="icon-btn menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell section-pad">
          <div className="eyebrow reveal">
            <span className="status-dot" />
            SDE Intern · Quant & Algo @ Futures First
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker reveal">Software engineer · IIIT Nagpur ’27</p>
              <h1 className="display reveal delay-1">
                I build systems that are <span className="grad-text">fast</span>,
                <br /> reliable & useful.
              </h1>
              <p className="hero-lede reveal delay-2">
                I’m Thatipally Aadithhya — a software engineer focused on low-latency systems, distributed backends and product-minded engineering.
              </p>
              <div className="hero-actions reveal delay-3">
                <a className="btn primary" href="#work">Explore my work <ArrowDownRight size={18}/></a>
                <a className="btn ghost" href={LINKS.email}>Say hello <Mail size={17}/></a>
              </div>
              <div className="social-row reveal delay-4">
                <a href={LINKS.github} target="_blank" rel="noreferrer"><GithubIcon size={18}/> GitHub</a>
                <a href={LINKS.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon size={18}/> LinkedIn</a>
                <a href={LINKS.leetcode} target="_blank" rel="noreferrer"><Code2 size={18}/> LeetCode</a>
              </div>
            </div>

            <div className="hero-visual reveal delay-2" aria-hidden="true">
              <div className="orbit-card">
                <div className="orbit-ring ring-1" />
                <div className="orbit-ring ring-2" />
                <div className="orbit-ring ring-3" />
                <div className="core-orb">
                  <span>AA</span>
                  <small>build / optimize / ship</small>
                </div>
                <div className="orbit-tag tag-1">C++</div>
                <div className="orbit-tag tag-2">.NET</div>
                <div className="orbit-tag tag-3">Go</div>
                <div className="orbit-tag tag-4">React</div>
              </div>
            </div>
          </div>

          <div className="metrics-grid reveal delay-4">
            <Metric value="<10ms" label="order placement latency" detail="from ~2 seconds" />
            <Metric value="10K+" label="trades processed daily" detail="live workflows" />
            <Metric value="1800+" label="LeetCode rating" detail="400+ problems" />
            <Metric value="9.26" label="CGPA / 10" detail="B.Tech CSE" />
          </div>
        </section>

        <section id="work" className="shell section-pad">
          <SectionHead index="01" eyebrow="Selected work" title="Things I’ve built." copy="Projects where the interesting part lives under the surface: synchronization, generation pipelines, compilers and systems design." />
          <div className="project-list">
            {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
          </div>
        </section>

        <section id="experience" className="shell section-pad">
          <SectionHead index="02" eyebrow="Experience" title="Production, not just prototypes." copy="I like working close to the critical path—where latency, correctness and reliability are visible in the result." />
          <div className="experience-grid">
            <article className="experience-card featured">
              <div className="experience-top">
                <div>
                  <span className="date">Jul 2026 — Present</span>
                  <h3>Software Development Engineer Intern</h3>
                  <p className="company">Futures First · Quant & Algo · Hyderabad</p>
                </div>
                <span className="role-icon"><Zap size={23}/></span>
              </div>
              <div className="experience-impact">
                <div><strong>2s → &lt;10ms</strong><span>Re-engineered C#/.NET backend order-management state handling.</span></div>
                <div><strong>10,000+</strong><span>Trades processed daily through low-latency production workflows.</span></div>
                <div><strong>10+</strong><span>Risk & compliance controls plus a React monitoring dashboard.</span></div>
              </div>
              <div className="mini-stack"><span>C#</span><span>.NET</span><span>Trading Systems</span><span>React</span><span>Concurrency</span></div>
            </article>

            <article className="experience-card">
              <div className="experience-top">
                <div>
                  <span className="date">Apr 2025 — Jul 2025</span>
                  <h3>Project Intern</h3>
                  <p className="company">AeroAgro AI · IIT Hyderabad</p>
                </div>
                <span className="role-icon alt"><Network size={23}/></span>
              </div>
              <p className="experience-copy">Built a Node.js drone-image pipeline with validation, structured error handling and Cloudinary CDN integration, reducing failed transfers by 30% and keeping retrieval under 2 seconds.</p>
              <div className="mini-stack"><span>Node.js</span><span>MongoDB</span><span>Cloudinary</span><span>Backend</span></div>
            </article>
          </div>
        </section>

        <section id="stack" className="shell section-pad">
          <SectionHead index="03" eyebrow="Technical core" title="A stack built for shipping." copy="Comfortable moving from low-level concepts to production APIs and polished interfaces." />
          <div className="skills-grid">
            {skillGroups.map(({title, icon: Icon, items}, i) => (
              <article className={`skill-card skill-${i+1}`} key={title}>
                <div className="skill-head"><Icon size={21}/><h3>{title}</h3></div>
                <div className="skill-cloud">{items.map(x => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="shell section-pad">
          <SectionHead index="04" eyebrow="Beyond the code" title="Competitive by default." copy="I enjoy performance engineering, systems problems and the kind of algorithmic thinking where details matter." />
          <div className="bento">
            <article className="bento-card cp-card">
              <div className="bento-icon"><Trophy size={22}/></div>
              <span className="bento-label">Competitive programming</span>
              <h3>1800+ LeetCode rating</h3>
              <p>400+ DSA problems solved, plus 200+ on CodeChef.</p>
              <div className="bento-links">
                <a href={LINKS.leetcode} target="_blank" rel="noreferrer">LeetCode <ArrowUpRight size={15}/></a>
                <a href={LINKS.codechef} target="_blank" rel="noreferrer">CodeChef <ArrowUpRight size={15}/></a>
              </div>
            </article>

            <article className="bento-card rank-card">
              <span className="big-rank">#769</span>
              <span className="bento-label">Global Rank</span>
              <p>CodeChef Contest 234C</p>
            </article>

            <article className="bento-card edu-card">
              <div className="bento-icon"><GraduationCap size={22}/></div>
              <span className="bento-label">Education</span>
              <h3>IIIT Nagpur</h3>
              <p>B.Tech, Computer Science & Engineering · 2023—2027</p>
              <strong>CGPA 9.26 / 10</strong>
            </article>

            <article className="bento-card hack-card">
              <span className="bento-label">Flipkart GRiD 8.0</span>
              <h3>National semi-finalist</h3>
              <p>Top 1,000 among 165,000+ registrations nationwide.</p>
              <div className="pulse-line"><span/><span/><span/><span/><span/></div>
            </article>

            <article className="bento-card terminal-card">
              <div className="terminal-top"><i/><i/><i/><span>aadithhya@dev</span></div>
              <div className="terminal-body">
                <p><em>$</em> focus --areas</p>
                <p className="output">low-latency · distributed-systems · backend</p>
                <p><em>$</em> status</p>
                <p className="output good">shipping consistently ✓</p>
                <p><em>$</em><span className="caret">_</span></p>
              </div>
            </article>
          </div>
        </section>

        <section className="shell section-pad contact-section">
          <div className="contact-card">
            <div>
              <span className="contact-kicker">Have an interesting engineering problem?</span>
              <h2>Let’s build something <span className="grad-text">fast.</span></h2>
              <p>I’m especially interested in backend, systems, low-latency and product engineering opportunities.</p>
            </div>
            <div className="contact-actions">
              <a className="btn light" href={LINKS.email}>taadithhya@gmail.com <Mail size={17}/></a>
              <a className="round-link" href={LINKS.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon size={21}/></a>
              <a className="round-link" href={LINKS.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon size={21}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer shell">
        <span>© {year} Thatipally Aadithhya</span>
        <span className="footer-mid">Built with React · designed for speed</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

function Metric({ value, label, detail }) {
  return <article className="metric-card">
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
    <div className="metric-detail">{detail}</div>
  </article>
}

function SectionHead({ index, eyebrow, title, copy }) {
  return <div className="section-head">
    <div className="section-index">/{index}</div>
    <div>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
    <p>{copy}</p>
  </div>
}

function ProjectCard({ p }) {
  return <article className="project-card">
    <div className="project-info">
      <div className="project-meta"><span>{p.num}</span><span>{p.label}</span></div>
      <h3>{p.title}</h3>
      <p>{p.copy}</p>
      <div className="impact-row">{p.impact.map(x => <span key={x}>{x}</span>)}</div>
      <div className="project-bottom">
        <div className="stack-row">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
        <div className="project-links">
          <a href={p.github} target="_blank" rel="noreferrer">Code <GithubIcon size={16}/></a>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live <ArrowUpRight size={16}/></a>}
        </div>
      </div>
    </div>
    <ProjectVisual type={p.visual} />
  </article>
}

function ProjectVisual({ type }) {
  if (type === 'ai') return <div className="project-visual ai-visual" aria-hidden="true">
    <div className="ai-window">
      <div className="window-head"><i/><i/><i/><span>course.generate()</span></div>
      <div className="course-line wide"/><div className="course-line mid"/><div className="course-grid"><div/><div/><div/></div>
      <div className="spark s1">✦</div><div className="spark s2">✦</div><div className="spark s3">✦</div>
    </div>
  </div>

  if (type === 'crdt') return <div className="project-visual crdt-visual" aria-hidden="true">
    <div className="doc-sheet"><div/><div/><div/><div/><div/></div>
    <svg className="network-svg" viewBox="0 0 400 260">
      <path d="M65 72 C150 45 205 60 330 48"/><path d="M65 72 C120 140 220 175 336 205"/><path d="M330 48 C302 120 292 153 336 205"/><path d="M65 72 C185 105 250 108 330 48"/>
      <circle cx="65" cy="72" r="11"/><circle cx="330" cy="48" r="11"/><circle cx="336" cy="205" r="11"/><circle cx="195" cy="125" r="8"/>
    </svg>
    <span className="user-dot u1">A</span><span className="user-dot u2">B</span><span className="user-dot u3">C</span>
  </div>

  return <div className="project-visual compiler-visual" aria-hidden="true">
    <div className="code-panel">
      <div><span className="pink">number</span> x = <span className="orange">5</span>;</div>
      <div><span className="purple">agar</span> (x &lt; <span className="orange">10</span>) {'{'}</div>
      <div className="indent"><span className="cyan">suno</span>(<span className="green">"fast"</span>);</div>
      <div>{'}'}</div>
    </div>
    <div className="compile-arrow">→</div>
    <div className="binary-cube"><span>AST</span><small>→ C → GCC</small></div>
  </div>
}

export default App
