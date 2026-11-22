import { lazy, Suspense, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Award,
  Braces,
  Code2,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Layers2,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  Send,
  Server,
  Settings2,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import portraitLogo from "@/assets/portfolio/marvellous-benji-high-resolution-logo-transparent_1.png.asset.json";
import skyImage from "@/assets/portfolio/cosmic-bg-2m4tagmk1g.jpg.asset.json";
import { portfolioExperience, visibleProjects, type PortfolioProject } from "./portfolio-data";
import { contactSubmissionSchema } from "@/lib/portfolio-contact";

const PortfolioBackground = lazy(() => import("./PortfolioBackground"));

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const skillGroups = [
  { title: "Frontend", index: "01", icon: Braces, skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"] },
  { title: "Backend", index: "02", icon: Server, skills: ["Node.js", "Express.js", "MongoDB"] },
  { title: "Tools & more", index: "03", icon: Settings2, skills: ["Git", "GitHub", "REST APIs", "Cloud basics"] },
];

const experienceIcons = [GraduationCap, Award, Code2, Layers2];
const motionEase = [0.22, 1, 0.36, 1] as const;

function SectionIntro({ index, kicker, title, accent, detail }: { index: string; kicker: string; title: string; accent: string; detail: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: motionEase }}
      className="mb-12 grid grid-cols-1 gap-5 md:mb-16 md:grid-cols-[1fr_minmax(15rem,24rem)] md:items-end"
    >
      <div>
        <p className="portfolio-eyebrow mb-4 flex items-center gap-3"><span className="opacity-60">{index}</span><span className="h-px w-8 bg-portfolio-accent/60" />{kicker}</p>
        <h2 className="portfolio-display max-w-3xl text-4xl font-medium leading-[1.05] tracking-normal text-foreground sm:text-5xl md:text-6xl">
          {title} <span className="text-portfolio-accent">{accent}</span>
        </h2>
      </div>
      <p className="max-w-sm text-sm leading-7 text-muted-foreground md:justify-self-end">{detail}</p>
    </motion.div>
  );
}

function TopNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (target: string) => {
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: motionEase }}
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${scrolled ? "border-b border-foreground/10 bg-background/85 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-[4.6rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <button onClick={() => scrollTo("#home")} className="group flex min-h-11 items-center gap-3 text-left" aria-label="Return to top">
          <span className="flex size-9 items-center justify-center overflow-hidden rounded-full border border-foreground/15 bg-secondary/80">
            <img src={portraitLogo.url} alt="" className="size-full object-contain" />
          </span>
          <span className="portfolio-display text-sm font-medium text-foreground sm:text-base"><span className="text-portfolio-accent">Omatule</span> Marvellous</span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <button key={item.href} onClick={() => scrollTo(item.href)} className="group relative py-2 text-xs text-foreground/75 transition-colors hover:text-portfolio-accent">
              {item.name}
              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-portfolio-accent transition-transform group-hover:scale-x-100" />
            </button>
          ))}
        </nav>

        <Button variant="outline" size="sm" onClick={() => scrollTo("#contact")} className="hidden h-9 gap-2 border-foreground/20 bg-transparent text-xs text-foreground hover:border-portfolio-accent/70 hover:bg-portfolio-accent/10 md:inline-flex">
          Get in touch <ArrowUpRight className="size-3.5" />
        </Button>

        <Button variant="ghost" size="icon" onClick={() => setMobileOpen((value) => !value)} className="md:hidden" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
          {mobileOpen ? <X /> : <Menu />}
        </Button>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-foreground/10 bg-background/95 px-5 backdrop-blur-xl md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl py-3 sm:px-3">
              {navItems.map((item, index) => (
                <button key={item.href} onClick={() => scrollTo(item.href)} className="flex min-h-12 items-center justify-between border-b border-foreground/10 text-left text-sm text-foreground/85 last:border-0">
                  <span>{item.name}</span><span className="portfolio-eyebrow text-[0.62rem] opacity-60">0{index + 1}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function Hero() {
  const scrollToProjects = () => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative flex min-h-[min(880px,100svh)] scroll-mt-20 items-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_19rem] lg:gap-12">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: motionEase }}>
          <p className="portfolio-eyebrow mb-7 flex items-center gap-3"><span className="size-2 rounded-full bg-portfolio-accent shadow-[0_0_14px_var(--portfolio-accent)]" />Independent developer · Port Harcourt, Nigeria</p>
          <h1 className="portfolio-display portfolio-glow-text max-w-5xl text-6xl font-medium leading-[0.9] tracking-normal text-foreground sm:text-7xl lg:text-8xl">
            Omatule<br /><span className="text-portfolio-accent">Marvellous</span>
          </h1>
          <div className="mt-7 flex min-h-8 items-center gap-3">
            <span className="h-px w-7 bg-portfolio-coral" />
            <p className="portfolio-display text-lg text-foreground/90 sm:text-xl">Full-Stack Developer</p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button onClick={scrollToProjects} className="h-12 gap-3 rounded-sm bg-portfolio-accent px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-portfolio-accent/90">
              Explore selected work <ArrowDownRight className="size-4" />
            </Button>
            <Button asChild variant="outline" className="h-12 gap-3 rounded-sm border-foreground/25 bg-background/20 px-5 text-sm text-foreground">
              <a href="/Omatule-Marvellous-CV.docx" download="Omatule-Marvellous-CV.docx">
                <FileText className="size-4" /> Download my CV
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: motionEase }}
          className="hidden self-center border-l border-foreground/20 pl-7 lg:block"
        >
          <p className="portfolio-eyebrow mb-6">A little about me</p>
          <p className="portfolio-display text-xl leading-relaxed text-foreground/85">
            Thoughtful digital craft,<br />built with <span className="text-portfolio-accent">curiosity</span><br />and a love for the details.
          </p>
          <div className="portfolio-line my-7" />
          <p className="text-xs leading-6 text-muted-foreground">Full-stack development · Modern web technologies · Creative problem solving</p>
        </motion.aside>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ opacity: { delay: 1.1 }, y: { duration: 2.3, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-6 left-5 flex items-center gap-3 text-muted-foreground sm:left-8 lg:left-12"
      >
        <ArrowDown className="size-3.5 text-portfolio-accent" /><span className="portfolio-eyebrow text-[0.62rem]">Scroll to explore</span>
      </motion.div>
      <span className="absolute bottom-7 right-5 portfolio-eyebrow text-[0.62rem] text-foreground/50 sm:right-8 lg:right-12">01 — 06</span>
    </section>
  );
}

function About() {
  const skills = [
    { name: "HTML", level: 85 }, { name: "CSS", level: 90 }, { name: "JavaScript", level: 78 },
    { name: "React", level: 90 }, { name: "Node.js", level: 80 }, { name: "APIs", level: 85 }, { name: "Python", level: 20 },
  ];

  return (
    <section id="about" className="portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="01" kicker="The person behind the pixels" title="A bit about" accent="me." detail="Curiosity driven development with an eye on the details that make software feel effortless." />
        <div className="grid gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <p className="portfolio-display text-2xl leading-relaxed text-foreground sm:text-3xl">
              I’m a passionate full-stack developer dedicated to building <span className="text-portfolio-accent">thoughtful digital experiences</span> that join modern technology with intuitive design.
            </p>
            <div className="my-8 portfolio-line" />
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              I enjoy transforming complex ideas into useful, well-crafted applications. Guided by curiosity and a commitment to continuous learning, I build with JavaScript, React, Node.js, modern web APIs and a bit of Python.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {[["06+", "core technologies"], [String(visibleProjects.length).padStart(2, "0"), "featured projects"], ["2022", "building since"]].map(([value, label]) => (
                <div key={label} className="border-l border-portfolio-accent/45 pl-4">
                  <p className="portfolio-display text-2xl text-foreground">{value}</p>
                  <p className="portfolio-eyebrow mt-1 text-[0.59rem] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12 }}>
            <div className="mb-5 flex items-end justify-between">
              <h3 className="portfolio-display text-xl text-foreground">Core technologies</h3>
              <span className="portfolio-eyebrow text-[0.6rem]">Level of focus</span>
            </div>
            <div className="border-t border-foreground/15">
              {skills.map((skill, index) => (
                <motion.div key={skill.name} initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="grid grid-cols-[1fr_auto] gap-x-5 border-b border-foreground/10 py-3.5">
                  <div className="flex items-center justify-between gap-4 text-sm"><span className="text-foreground/85">{skill.name}</span><span className="portfolio-eyebrow text-[0.6rem]">{String(skill.level).padStart(2, "0")}%</span></div>
                  <div className="col-span-2 mt-2 h-[3px] overflow-hidden bg-foreground/10">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 0.85, delay: index * 0.06 + 0.12, ease: motionEase }} className="h-full bg-portfolio-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="02" kicker="Tools of the trade" title="Built with" accent="intention." detail="A practical toolkit for turning complex requirements into clear, resilient digital experiences." />
        <div className="grid border-l border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article key={group.index} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.1 }} className="portfolio-skill-card group min-h-64 border-b border-r border-foreground/15 px-6 py-7 sm:px-7">
                <div className="mb-14 flex items-center justify-between">
                  <span className="portfolio-skill-index portfolio-eyebrow">{group.index}</span>
                  <Icon className="size-5 text-portfolio-accent transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.4} />
                </div>
                <h3 className="portfolio-display text-2xl text-foreground">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="border border-foreground/12 px-3 py-1.5 text-xs text-foreground/75 transition-colors group-hover:border-portfolio-accent/30">{skill}</span>)}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const projectIcons: Record<string, LucideIcon> = { "hr-management-system": Layers2, "health-connect": Award, "medi-core": Server };
const projectNumber = (project: PortfolioProject) => String(visibleProjects.indexOf(project) + 1).padStart(2, "0");

function ProjectArtwork({ project }: { project: PortfolioProject }) {
  const Icon = projectIcons[project.slug] ?? Code2;
  return (
    <div className={`relative flex aspect-[1.85/1] overflow-hidden ${project.tone === "one" ? "bg-portfolio-accent/10" : project.tone === "two" ? "bg-portfolio-coral/10" : "bg-portfolio-lime/10"}`}>
      {project.image ? <img src={project.image.src} alt={project.image.alt} loading="lazy" className="portfolio-project-image size-full object-cover" /> : (
        <div className="flex size-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-background via-secondary/80 to-portfolio-coral/10">
          <Icon className="size-12 text-portfolio-accent/80" strokeWidth={1} />
          <span className="portfolio-eyebrow text-[0.6rem] text-foreground/55">Project preview</span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      <span className="absolute bottom-3 left-4 portfolio-eyebrow text-[0.58rem] text-foreground/85">Selected work / {projectNumber(project)}</span>
      <span className="absolute right-3 top-3 flex size-9 items-center justify-center border border-foreground/20 bg-background/80 text-foreground backdrop-blur-sm"><ArrowUpRight className="size-4" /></span>
    </div>
  );
}

function ProjectCard({ project, index, onOpen }: { project: PortfolioProject; index: number; onOpen: () => void }) {
  return (
    <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.55, delay: (index % 3) * 0.08, ease: motionEase }}>
      <button onClick={onOpen} aria-label={`View details for ${project.title}`} className="portfolio-project-trigger block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-accent">
        <ProjectArtwork project={project} />
        <div className="flex items-start justify-between gap-4 py-5">
          <div>
            <h3 className="portfolio-display text-xl text-foreground transition-colors group-hover:text-portfolio-accent">{project.title}</h3>
            <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">{project.description}</p>
          </div>
          <span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-foreground/15 text-foreground/70 transition-all hover:border-portfolio-accent hover:text-portfolio-accent"><ArrowUpRight className="size-4" /></span>
        </div>
        <div className="flex flex-wrap gap-2 pb-5">
          {project.technologies.slice(0, 4).map((technology) => <span key={technology} className="portfolio-eyebrow text-[0.58rem] text-muted-foreground">{technology}</span>)}
        </div>
        <div className="portfolio-line" />
      </button>
    </motion.article>
  );
}

function CaseStudyBlock({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="portfolio-eyebrow mb-3">{label}</p>
      {children}
    </div>
  );
}

function CaseStudyList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
      {items.map((item) => (
        <li key={item} className="relative pl-4 before:absolute before:left-0 before:top-3 before:size-1 before:bg-portfolio-accent">{item}</li>
      ))}
    </ul>
  );
}

function ProjectDetails({ project, onClose }: { project: PortfolioProject | null; onClose: () => void }) {
  const study = project?.caseStudy;
  return (
    <Dialog open={Boolean(project)} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-h-[88svh] max-w-3xl overflow-y-auto rounded-sm border-foreground/15 bg-background/98 p-0 text-foreground backdrop-blur-xl sm:max-w-3xl">
        {project && study && (
          <>
            <ProjectArtwork project={project} />
            <div className="p-6 sm:p-9">
              <DialogHeader className="text-left">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <p className="portfolio-eyebrow">Selected work / {projectNumber(project)}</p>
                  {project.status && <span className="border border-portfolio-coral/50 px-2 py-0.5 text-[0.7rem] text-portfolio-coral">{project.status}</span>}
                  {project.companyLabel && <span className="border border-portfolio-accent/40 px-2 py-0.5 text-[0.7rem] text-portfolio-accent">{project.companyLabel}</span>}
                </div>
                <DialogTitle className="portfolio-display text-3xl font-medium text-foreground sm:text-4xl">{project.title}</DialogTitle>
                {study.short && <p className="portfolio-display max-w-2xl pt-3 text-lg leading-snug text-foreground/90">{study.short}</p>}
                <DialogDescription className="max-w-2xl pt-3 text-sm leading-7 text-muted-foreground">{study.overview}</DialogDescription>
              </DialogHeader>

              <dl className={`mt-7 grid gap-6 border-t border-foreground/10 pt-6 ${study.role ? "sm:grid-cols-2" : ""}`}>
                <div>
                  <dt className="portfolio-eyebrow mb-3">Who it’s for</dt>
                  <dd className="text-sm leading-7 text-foreground/85">{study.audience}</dd>
                </div>
                {study.role && (
                  <div>
                    <dt className="portfolio-eyebrow mb-3">My role</dt>
                    <dd className="text-sm leading-7 text-foreground/85">{study.role}</dd>
                  </div>
                )}
              </dl>

              <div className="mt-7 grid gap-7 border-t border-foreground/10 pt-6 sm:grid-cols-2">
                <CaseStudyBlock label="The challenge"><p className="text-sm leading-7 text-muted-foreground">{study.challenge}</p></CaseStudyBlock>
                <CaseStudyBlock label="The approach"><p className="text-sm leading-7 text-muted-foreground">{study.approach}</p></CaseStudyBlock>
              </div>

              <div className={`mt-7 grid gap-7 border-t border-foreground/10 pt-6 ${study.built?.length ? "sm:grid-cols-2" : ""}`}>
                {study.built?.length ? <CaseStudyBlock label="What I built"><CaseStudyList items={study.built} /></CaseStudyBlock> : null}
                <CaseStudyBlock label="Key features"><CaseStudyList items={study.features} /></CaseStudyBlock>
              </div>

              <div className="mt-7 border-t border-foreground/10 pt-6">
                <p className="portfolio-eyebrow mb-4">Technologies</p>
                <div className="flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="border border-foreground/15 px-3 py-1.5 text-xs text-foreground/75">{tech}</span>)}</div>
              </div>

              {project.gallery?.length ? (
                <div className="mt-7 border-t border-foreground/10 pt-6">
                  <p className="portfolio-eyebrow mb-4">Screens</p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {project.gallery.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" className="w-full border border-foreground/15 object-cover" />)}
                  </div>
                </div>
              ) : null}

              <div className="mt-7 border-t border-foreground/10 pt-6">
                <CaseStudyBlock label={study.outcomeLabel}><p className="text-sm leading-7 text-foreground/85">{study.outcome}</p></CaseStudyBlock>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {project.liveDemo && project.liveDemo !== "#" && <Button variant="outline" asChild className="gap-2 rounded-sm border-foreground/20 bg-transparent"><a href={project.liveDemo} target="_blank" rel="noreferrer">Live demo <ExternalLink /></a></Button>}
                {project.github && project.github !== "#" && <Button variant="ghost" asChild className="gap-2 rounded-sm"><a href={project.github} target="_blank" rel="noreferrer"><Github /> GitHub <ExternalLink className="size-3" /></a></Button>}
                {!project.liveDemo && !project.github && <Button onClick={onClose} variant="ghost">Close details</Button>}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Projects() {
  const [selected, setSelected] = useState<PortfolioProject | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  return (
    <section id="projects" className="portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="03" kicker="A few things I’ve made" title="Selected" accent="work." detail="A mix of practical platforms, thoughtful interfaces, and ambitious ideas brought to life across the web." />
        <div className="grid gap-x-7 gap-y-8 md:grid-cols-2 lg:grid-cols-3">{visibleProjects.slice(0, visibleCount).map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={() => setSelected(project)} />)}</div>
        {visibleCount < visibleProjects.length && <div className="mt-11 flex justify-center"><Button variant="outline" onClick={() => setVisibleCount((count) => count + 3)} className="h-11 gap-3 rounded-sm border-foreground/20 bg-transparent px-5 text-foreground hover:border-portfolio-accent/60 hover:bg-portfolio-accent/10">View more projects <ArrowRight /></Button></div>}
        <ProjectDetails project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="04" kicker="Learning by building" title="The journey" accent="so far." detail="A growing timeline of study, practice, and moments that shaped the way I approach software." />
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute bottom-8 left-[1.1rem] top-4 w-px bg-gradient-to-b from-portfolio-accent/80 via-foreground/15 to-transparent md:left-1/2" />
          <div className="grid gap-6 md:gap-2">
            {portfolioExperience.map((item, index) => {
              const Icon = experienceIcons[index] ?? Code2;
              const isRight = index % 2 === 1;
              return (
                <motion.article key={item.title} initial={{ opacity: 0, x: isRight ? 14 : -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-55px" }} transition={{ duration: 0.55, delay: 0.06 }} className={`relative grid gap-3 pl-12 md:grid-cols-[1fr_3.25rem_1fr] md:pl-0 ${isRight ? "md:[&>div:first-child]:col-start-3 md:[&>div:last-child]:col-start-1 md:[&>div:last-child]:row-start-1 md:[&>div:first-child]:text-left" : ""}`}>
                  <div className={`py-1 ${isRight ? "md:col-start-3" : "md:col-start-1 md:text-right"}`}>
                    <p className="portfolio-eyebrow text-[0.64rem]">{item.date}</p>
                    <h3 className="portfolio-display mt-2 text-xl text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm text-portfolio-accent">{item.organization}</p>
                    <ul className={`mt-4 space-y-2 text-sm leading-6 text-muted-foreground ${isRight ? "" : "md:list-inside"}`}>
                      {item.description.map((line) => <li key={line} className={`relative ${isRight ? "pl-4 before:absolute before:left-0 before:top-3 before:size-1 before:bg-portfolio-accent" : "md:before:ml-1 md:before:inline-block md:before:size-1 md:before:bg-portfolio-accent md:before:content-['']"}`}>{line}</li>)}
                    </ul>
                  </div>
                  <div className="absolute left-0 top-0 z-10 flex size-9 items-center justify-center border border-portfolio-accent/50 bg-background text-portfolio-accent md:relative md:left-auto md:col-start-2 md:row-start-1 md:mx-auto md:size-12">
                    <Icon className="size-4 md:size-5" strokeWidth={1.4} />
                  </div>
                  <div className={`hidden md:block ${isRight ? "md:col-start-1 md:row-start-1" : "md:col-start-3"}`} aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  async function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honeypot) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const raw = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    const parsed = contactSubmissionSchema.safeParse(raw);
    if (!parsed.success) {
      toast.error("Your message wasn’t sent", { description: "Check each field and try again." });
      return;
    }

    const accessKey = import.meta.env["VITE_WEB3FORMS_ACCESS_KEY"] as string | undefined;
    if (!accessKey) {
      toast.error("Your message wasn’t sent", { description: "Message delivery is not available right now. Please email me directly." });
      return;
    }

    const { name, email, subject, message } = parsed.data;
    setSending(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: accessKey, name, email, subject, message, from_name: "Omatule Marvellous Portfolio" }),
      });
      const result = await response.json() as { success?: boolean; message?: string };
      if (!response.ok || !result.success) throw new Error(result.message ?? "Unable to send your message.");
      toast.success("Message sent", { description: "Thanks for reaching out. I’ll get back to you soon." });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Please try again in a moment.";
      toast.error("Your message wasn’t sent", { description: message });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="portfolio-section scroll-mt-16 border-t border-foreground/10 px-5 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionIntro index="05" kicker="Have something in mind?" title="Let’s make" accent="it happen." detail="Ready to bring an idea to life? Let’s talk about how we can work together." />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:gap-20">
          <div className="max-w-md">
            <p className="portfolio-display text-2xl leading-relaxed text-foreground sm:text-3xl">I’m always excited to explore <span className="text-portfolio-accent">new opportunities</span>, meaningful projects, and good collaborations.</p>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">Whether there’s a specific challenge or you simply want to connect, I’d love to hear from you.</p>
            <div className="mt-9 grid gap-2">
              <a href="mailto:omatulemarvellous721@gmail.com" className="flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent"><Mail className="size-4 text-portfolio-accent" /> omatulemarvellous721@gmail.com <ArrowUpRight className="ml-auto size-4" /></a>
              <a href="https://github.com/Gokubanny" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent"><Github className="size-4 text-portfolio-accent" /> GitHub <ArrowUpRight className="ml-auto size-4" /></a>
              <a href="https://www.linkedin.com/in/marvellous-benji" target="_blank" rel="noreferrer" className="flex min-h-12 items-center gap-3 border-b border-foreground/12 py-3 text-sm text-foreground/80 transition-colors hover:text-portfolio-accent"><Linkedin className="size-4 text-portfolio-accent" /> LinkedIn <ArrowUpRight className="ml-auto size-4" /></a>
            </div>
          </div>

          <form onSubmit={submitMessage} className="space-y-5" aria-label="Contact form">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block"><span className="portfolio-eyebrow mb-2 block text-[0.62rem]">Your name</span><Input name="name" autoComplete="name" placeholder="Name" required minLength={2} maxLength={120} className="portfolio-contact-input h-12 rounded-sm" /></label>
              <label className="block"><span className="portfolio-eyebrow mb-2 block text-[0.62rem]">Email address</span><Input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} className="portfolio-contact-input h-12 rounded-sm" /></label>
            </div>
            <label className="block"><span className="portfolio-eyebrow mb-2 block text-[0.62rem]">Subject</span><Input name="subject" placeholder="What would you like to talk about?" required minLength={2} maxLength={160} className="portfolio-contact-input h-12 rounded-sm" /></label>
            <label className="block"><span className="portfolio-eyebrow mb-2 block text-[0.62rem]">Your message</span><Textarea name="message" placeholder="Tell me a little about it…" required minLength={10} maxLength={5000} rows={5} className="portfolio-contact-input min-h-36 resize-y rounded-sm" /></label>
            <div className="absolute -left-[9999px] top-auto size-px overflow-hidden" aria-hidden="true"><label htmlFor="contact-website">Leave blank</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(event) => setHoneypot(event.target.value)} /></div>
            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <Button type="submit" disabled={sending} className="h-12 gap-3 rounded-sm bg-portfolio-accent px-5 text-primary-foreground hover:bg-portfolio-accent/90">{sending ? "Sending…" : "Send message"}<Send className="size-4" /></Button>
              <span className="flex items-center gap-2 text-xs text-muted-foreground"><MessageCircle className="size-3.5 text-portfolio-coral" /> Usually replies within a few days</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-foreground/12 px-5 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="portfolio-display text-base text-foreground"><span className="text-portfolio-accent">Omatule</span> Marvellous</p><p className="mt-1 text-xs text-muted-foreground">Full-stack developer · Building with care</p></div>
        <p className="text-xs text-muted-foreground">© {year} Omatule Marvellous. All rights reserved.</p>
        <Button variant="ghost" size="icon" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="self-end border border-foreground/12 text-foreground/75 hover:border-portfolio-accent/50 hover:text-portfolio-accent sm:self-auto"><ArrowUp className="size-4" /></Button>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [backgroundReady, setBackgroundReady] = useState(false);

  useEffect(() => {
    setBackgroundReady(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrollProgress(max > 0 ? window.scrollY / max : 0);
      });
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", updateProgress); window.removeEventListener("resize", updateProgress); };
  }, []);

  return (
    <main className="relative min-h-screen overflow-clip text-foreground">
      <img src={skyImage.url} alt="" aria-hidden="true" className="portfolio-backdrop" />
      <div aria-hidden="true" className="portfolio-shade" />
      <div aria-hidden="true" className="portfolio-grain" />
      {backgroundReady && <Suspense fallback={null}><PortfolioBackground /></Suspense>}
      <div className="fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-portfolio-accent shadow-[0_0_10px_var(--portfolio-accent)]" style={{ transform: `scaleX(${scrollProgress})` }} aria-hidden="true" />
      <div className="relative z-10">
        <TopNavigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}