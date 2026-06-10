import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Download, Mail, Linkedin, Phone, MapPin, ArrowRight, Sparkles,
  GraduationCap, Briefcase, FolderKanban, Award, Users, Star,
  BarChart3, Target, TrendingUp, Lightbulb, MessageSquare, Send,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ayeesha Khatoon — MBA Student & Business Analyst" },
      { name: "description", content: "Portfolio of Ayeesha Khatoon — MBA student specializing in Business Analysis, Project Management, Finance & Strategy." },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="relative overflow-x-hidden">
      <AmbientBackdrop />
      <Nav />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}

function AmbientBackdrop() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/30 blur-[120px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-primary/20 blur-[120px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "glass-strong shadow-2xl shadow-black/20" : ""}`}>
          <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-white text-sm">AK</span>
            <span>Ayeesha</span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map(n => (
              <a key={n.href} href={n.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:inline-flex btn-primary items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium">
            Hire Me <ArrowRight className="h-4 w-4" />
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden glass rounded-full p-2.5">
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 space-y-1">
            {NAV.map(n => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-2.5 text-sm hover:bg-white/5">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

const TYPED = ["Business Analyst", "MBA Student", "Strategy Thinker"];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = TYPED[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % TYPED.length); }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

function Hero() {
  const typed = useTyping();
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16">
      <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 space-y-7"
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> Open to internship & project opportunities
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Hello, I'm <br />
            <span className="text-gradient">Ayeesha Khatoon</span>
          </h1>
          <div className="flex items-center gap-2 text-lg sm:text-xl text-muted-foreground font-medium min-h-[1.75rem]">
            <span className="text-foreground">{typed}</span>
            <span className="h-5 w-0.5 bg-accent animate-pulse" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
            Transforming data into insights and ideas into business value. MBA candidate exploring the intersection of strategy, finance, and analytics.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
               href="/resume.pdf"
               download
               className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
             >
                <Download className="h-4 w-4" />
                Download Resume
                </a>
            <a href="#contact" className="glass-strong inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              <Mail className="h-4 w-4" /> Contact Me
            </a>
            <a
  href="https://www.linkedin.com/in/ayeesha-khatoon-563850232/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Linkedin className="h-4 w-4 text-accent" />
  LinkedIn
</a>
          </div>
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { k: "2025–27", v: "MBA Program" },
              { k: "7+", v: "Certifications" },
              { k: "5+", v: "Projects" },
            ].map(s => (
              <div key={s.v}>
                <div className="font-display text-2xl font-bold text-gradient">{s.k}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-primary/40 to-accent/40 blur-3xl" />
            <div className="relative h-full glass-strong rounded-[2.5rem] p-6 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="relative h-full rounded-[2rem] bg-gradient-to-br from-secondary to-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 90, damping: 14 }}
                  className="relative aspect-square w-[100%] rounded-[2rem] p-[3px] bg-gradient-to-br from-primary via-accent to-primary shadow-2xl shadow-primary/30"
                >
                  <motion.div
                    aria-hidden
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 rounded-[2.25rem] bg-[conic-gradient(from_0deg,oklch(0.62_0.21_260/0.5),oklch(0.78_0.15_200/0.5),transparent_60%,oklch(0.62_0.21_260/0.5))] opacity-60 blur-xl"
                  />
                  <div className="relative h-full w-full rounded-[1.85rem] overflow-hidden ring-4 ring-background/40">
                    <img
                      src="https://i.postimg.cc/FsrJv3RR/formal-front-facing-portrait.jpg"
                      alt="Ayeesha Khatoon"
                      className="h-full w-full object-cover object-[50%_20%]"
                      loading="eager"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      <div className="inline-block glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-accent mb-4">{eyebrow}</div>
      <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1500; const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function About() {
  const stats = [
    { icon: GraduationCap, label: "MBA Student", value: 1, suffix: "" , sub: "2025–2027" },
    { icon: Briefcase, label: "HR Internship", value: 1, suffix: "" , sub: "Blue Brick" },
    { icon: Award, label: "Certifications", value: 7, suffix: "+", sub: "Verified" },
    { icon: FolderKanban, label: "Business Projects", value: 5, suffix: "+", sub: "Completed" },
  ];
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="About Me" title="Driven by curiosity, guided by strategy." />
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-strong rounded-3xl p-8 sm:p-10"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Motivated MBA student with a strong interest in <span className="text-foreground font-medium">project management, finance, and marketing</span>, driven by a passion for understanding business dynamics and creating value-driven solutions.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Skilled in communication, client handling, analytical thinking, and business analysis. Passionate about data-driven decision making, customer insights, and business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Strategy", "Analytics", "Finance", "Leadership", "Communication"].map(t => (
                <span key={t} className="glass rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">{t}</span>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:bg-white/[0.08] transition group"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent mb-3 group-hover:scale-110 transition">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="font-display text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="text-sm font-semibold mt-1">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Education() {
  const items = [
    { degree: "Master of Business Administration", school: "K.R. Mangalam University, Gurugram", period: "2025 – 2027", desc: "Specializing in Business Analytics, Strategy, Finance & Marketing." },
    { degree: "Bachelor of Arts — Political Science & History", school: "University of Delhi", period: "Completed", desc: "Foundation in analytical thinking, research and communication." },
  ];
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Education" title="Academic Foundation" />
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent" />
          {items.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative mb-10 sm:grid sm:grid-cols-2 sm:gap-8 ${i % 2 ? "sm:[&>div]:col-start-2" : ""}`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-6 grid h-3 w-3 place-items-center">
                <div className="absolute h-3 w-3 rounded-full bg-accent animate-ping opacity-75" />
                <div className="relative h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
              </div>
              <div className={`ml-12 sm:ml-0 glass-strong rounded-2xl p-6 hover:bg-white/[0.08] transition ${i % 2 ? "sm:ml-8" : "sm:mr-8"}`}>
                <div className="text-xs text-accent uppercase tracking-wider mb-2">{it.period}</div>
                <h3 className="font-display text-xl font-semibold">{it.degree}</h3>
                <div className="text-sm text-muted-foreground mt-1">{it.school}</div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const items = [

{
  role: "Human Resource Specialist",
  org: "Zafify",
  period: "Jun 2026 – Present",
  tasks: [
    "Supported recruitment and talent acquisition activities",
    "Managed employee records and HR documentation",
    "Assisted in onboarding and workforce coordination",
    "Contributed to employee engagement initiatives"
  ],
},
{
      role: "Student Coordinator",
      org: "Management Club, K.R. Mangalam University",
      period: "Nov 2025 – Present",
      tasks: ["Event management", "Student engagement", "Team collaboration", "Leadership activities"],
    },
    
    {
      role: "Human Resources Intern",
      org: "Blue Brick",
      period: "Dec 2025 – Mar 2026",
      tasks: ["Recruitment support", "Employee onboarding", "HR operations", "Internal communication coordination"],
    },
    

    
  ];
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Experience" title="Where I've contributed" />
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-7 hover:bg-white/[0.08] transition group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="glass rounded-full px-3 py-1 text-[11px] text-muted-foreground">{it.period}</span>
              </div>
              <h3 className="font-display text-xl font-semibold">{it.role}</h3>
              <div className="text-sm text-accent mt-1">{it.org}</div>
              <ul className="mt-5 space-y-2">
                {it.tasks.map(t => (
                  <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const list = [
    {
      title: "Customer Insight Analysis — Uber",
      tag: "Customer Analytics",
      icon: TrendingUp,
      bullets: ["Customer feedback analysis", "User satisfaction evaluation", "Service improvement recommendations", "Customer experience enhancement"],
      skills: ["Data Analysis", "Survey Design", "Excel", "Insights"],
    },
    {
      title: "BMW vs Maruti Suzuki — Strategic Analysis",
      tag: "Competitive Strategy",
      icon: Target,
      bullets: ["Market positioning analysis", "Competitive strategy evaluation", "Business comparison study", "Strategic recommendations"],
      skills: ["Strategy", "Market Research", "SWOT", "Reporting"],
    },
  ];
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Projects" title="Selected case studies" sub="Hands-on academic & analytical work demonstrating business thinking." />
        <div className="grid md:grid-cols-2 gap-6">
          {list.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative glass-strong rounded-3xl p-7 overflow-hidden group"
            >
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl group-hover:bg-primary/30 transition" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <span className="glass rounded-full px-3 py-1 text-[11px] text-accent">{p.tag}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold leading-tight">{p.title}</h3>
                <ul className="mt-5 space-y-2">
                  {p.bullets.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.skills.map(s => (
                    <span key={s} className="glass rounded-full px-3 py-1 text-[11px] font-medium">{s}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const business = [
    { name: "Business Analysis", v: 88 },
    { name: "Project Management", v: 82 },
    { name: "Market Research", v: 85 },
    { name: "Client Relationship Management", v: 80 },
    { name: "Business Communication", v: 90 },
    { name: "Leadership", v: 84 },
    { name: "Problem Solving", v: 88 },
    { name: "Analytical Thinking", v: 90 },
  ];
  const tech = [
    "Microsoft Excel", "Google Sheets", "PowerPoint", "MS Word",
    "Google Workspace", "CRM Tools", "Digital Marketing Fundamentals",
  ];
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Skills" title="Capabilities & toolkit" />
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/20 text-primary"><Lightbulb className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-semibold">Business Skills</h3>
            </div>
            <div className="space-y-5">
              {business.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.05} />)}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-strong rounded-3xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/20 text-accent"><BarChart3 className="h-5 w-5" /></div>
              <h3 className="font-display text-xl font-semibold">Technical Toolkit</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {tech.map(t => (
                <div key={t} className="glass rounded-2xl px-4 py-3.5 text-sm font-medium flex items-center gap-3 hover:bg-white/[0.08] transition">
                  <span className="h-2 w-2 rounded-full bg-accent" /> {t}
                </div>
              ))}
            </div>
            <div className="mt-6 glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Currently exploring</div>
              <div className="text-sm">Power BI · Tableau · SQL fundamentals for analysts</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ name, v, delay }: { name: string; v: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground">{v}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${v}%` } : {}}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  );
}

function Certifications() {
  const certs = [
    { name: "Business Development", org: "Great Learning" },
    { name: "Business Analyst", org: "Coursera" },
    { name: "Digital Marketing Diploma", org: "Verified" },
    { name: "Smart English for Professionals", org: "Skill Program" },
    { name: "AI Workshop", org: "Industry Session" },
    { name: "SEBI Investor Awareness", org: "Certified" },
    { name: "NISM Financial Literacy", org: "Participation" },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Certifications" title="Continuous learning" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 hover:bg-white/[0.08] transition group"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent group-hover:scale-110 transition">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold leading-tight">{c.name}</h4>
                  <div className="text-xs text-muted-foreground mt-1">{c.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const items = [
    { title: "Student Coordinator", body: "Management Club — leading engagement & events.", icon: Users },
    { title: "Volunteer", body: "Inter-University Ad-Mad Competition.", icon: Star },
    { title: "Participant", body: "Inter-University Debate Competition.", icon: MessageSquare },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Leadership & Activities" title="Beyond the classroom" />
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-strong rounded-3xl p-7 text-center hover:bg-white/[0.08] transition"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                <it.icon className="h-6 w-6" />
              </div>
              <h4 className="font-display text-lg font-semibold">{it.title}</h4>
              <p className="text-sm text-muted-foreground mt-2">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICE_ID = "service_36344aa";
const TEMPLATE_ID = "template_ur9p7z6";
const PUBLIC_KEY = "B0ERhsChDoQ4LUKW-";

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  console.log("Submit button clicked");

  if (!formRef.current) return;

  setSending(true);

try {
  const emailjs = (await import("@emailjs/browser")).default;

  console.log("Sending email...");

  await emailjs.sendForm(
    SERVICE_ID,
    TEMPLATE_ID,
    formRef.current,
    {
      publicKey: PUBLIC_KEY,
    }
  );

  console.log("SUCCESS");

  const { toast } = await import("sonner");
  toast.success("Message sent! I'll get back to you soon.");

  formRef.current.reset();
  setSent(true);
  setTimeout(() => setSent(false), 3000);

} catch (err) {
  const { toast } = await import("sonner");

  toast.error("Failed to send. Please try again or email me directly.");

  console.error("EMAILJS ERROR:", err);

} finally {
  setSending(false);
}
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something meaningful." sub="Open to internships, collaborations and business analysis opportunities." />
        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email", value: "ayeesha7866@gmail.com" },
              { icon: Phone, label: "Phone", value: "+919354201885" },
              { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/ayeesha-khatoon-563850232/" },
              { icon: MapPin, label: "Location", value: "Delhi, India" },
            ].map(c => (
              <div key={c.label} className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] transition">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 text-accent">
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                  <div className="text-sm font-medium truncate">
  {c.label === "LinkedIn" ? (
    <a
      href={c.value}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-accent"
    >
      LinkedIn Profile
    </a>
  ) : c.label === "Email" ? (
    <a
      href={`mailto:${c.value}`}
      className="hover:text-accent"
    >
      {c.value}
    </a>
  ) : (
    c.value
  )}
</div>
                </div>
              </div>
            ))}
          </div>
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-strong rounded-3xl p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" placeholder="Your name" required />
              <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
            </div>
            <Field label="Subject" name="subject" placeholder="What's it about?" required />
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
              <textarea name="message" rows={5} required placeholder="Tell me about your opportunity…" className="mt-2 w-full glass rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60 resize-none" />
            </div>
            <button type="submit" disabled={sending} className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold disabled:opacity-60">
              {sent ? (<><CheckCircle2 className="h-4 w-4" /> Sent</>) : sending ? (<>Sending…</>) : (<>Send Message <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</label>
      <input {...props} className="mt-2 w-full glass rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/60" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-white text-xs font-bold">AK</span>
          Designed for Ayeesha Khatoon
        </div>
        <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} — All rights reserved.</div>
        <div className="flex items-center gap-2">
          {[Linkedin, Mail, Phone].map((Icon, i) => (
            <a key={i} href="#contact" className="glass grid h-9 w-9 place-items-center rounded-full hover:bg-white/10 transition">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
