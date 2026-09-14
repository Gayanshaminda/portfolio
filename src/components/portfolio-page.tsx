"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Braces,
  BriefcaseBusiness,
  CloudCog,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Network,
  Plus,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import heroPortrait from "@/assets/gayan-hero-portrait.jpg";
import { Button } from "@/components/ui/button";
import { projects, skillGroups, type Project } from "@/data/portfolio";

const navItems = [
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const skillIcons = [Code2, Braces, Database, Sparkles, CloudCog, Network];

function SectionHeading({
  index,
  eyebrow,
  title,
  text,
}: {
  index: string;
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div {...fadeUp} className="mb-12 max-w-3xl md:mb-16">
      <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary">
        <span>{index}</span>
        <span className="h-px w-8 bg-primary/50" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          {text}
        </p>
      )}
    </motion.div>
  );
}

function ProjectSlide({
  project,
  index,
  onViewDetails,
}: {
  project: Project;
  index: number;
  onViewDetails: () => void;
}) {
  return (
    <article className="group grid min-h-[560px] overflow-hidden rounded-md border border-border bg-card md:h-[440px] md:min-h-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border md:aspect-auto md:h-full md:border-b-0 md:border-r">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          width={1280}
          height={800}
          className="absolute inset-0 h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-project-overlay" aria-hidden="true" />
        <span className="absolute left-4 top-4 rounded-sm border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-md">
          0{index + 1}
        </span>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 md:overflow-hidden md:p-10">
        <span className="mb-3 font-mono text-xs uppercase tracking-wider text-primary">
          Completed {project.completed}
        </span>
        <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:line-clamp-2 md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-6 flex h-[68px] flex-wrap content-start gap-2 overflow-hidden">
          {project.technologies.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 6 && (
            <span className="rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground">
              +{project.technologies.length - 6}
            </span>
          )}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <Button asChild variant="outline">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <Github /> GitHub
            </a>
          </Button>
          <Button
            variant="ghost"
            className="px-0 text-muted-foreground hover:bg-transparent hover:text-primary"
            onClick={onViewDetails}
          >
            View details <ArrowUpRight />
          </Button>
        </div>
      </div>
    </article>
  );
}

function ProjectDetailView({
  project,
  index,
  onBack,
}: {
  project: Project;
  index: number;
  onBack: () => void;
}) {
  return (
    <div className="rounded-md border border-border bg-card p-6 sm:p-8 md:p-10">
      <Button
        variant="ghost"
        className="mb-6 -ml-3 px-3 text-muted-foreground hover:bg-transparent hover:text-primary"
        onClick={onBack}
      >
        <ArrowLeft /> Back to projects
      </Button>
      <div className="grid gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-border">
          <img
            src={project.image}
            alt={project.imageAlt}
            width={1280}
            height={800}
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-project-overlay" aria-hidden="true" />
          <span className="absolute left-4 top-4 rounded-sm border border-border/80 bg-background/80 px-2.5 py-1 font-mono text-xs text-muted-foreground backdrop-blur-md">
            0{index + 1}
          </span>
        </div>
        <div>
          <span className="mb-3 block font-mono text-xs uppercase tracking-wider text-primary">
            Completed {project.completed}
          </span>
          <h3 className="font-display text-2xl font-semibold leading-tight text-foreground md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
          <Button asChild className="mt-7 w-fit">
            <a href={project.github} target="_blank" rel="noreferrer">
              <Github /> View repository
            </a>
          </Button>
        </div>
      </div>
      <div className="mt-10 border-t border-border pt-8">
        <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
          Engineering highlights
        </h4>
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.highlights.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ProjectsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [detailIndex, setDetailIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<{ x: number; y: number } | null>(null);
  const count = projects.length;

  const goTo = (index: number) => setActiveIndex((index + count) % count);
  const active = projects[(detailIndex ?? activeIndex) % count]!;

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    if (detailIndex !== null) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => {
      const el = containerRef.current;
      if (!el) return;
      if (el.matches(":focus-within")) return;
      const pointer = pointerRef.current;
      if (pointer) {
        const rect = el.getBoundingClientRect();
        if (
          pointer.x >= rect.left &&
          pointer.x <= rect.right &&
          pointer.y >= rect.top &&
          pointer.y <= rect.bottom
        )
          return;
      }
      setActiveIndex((index) => (index + 1) % count);
    }, 3000);
    return () => window.clearInterval(timer);
  }, [detailIndex, count]);

  return (
    <motion.div {...fadeUp} ref={containerRef}>
      <AnimatePresence mode="wait" initial={false}>
        {detailIndex === null ? (
          <motion.div
            key={`slide-${activeIndex}`}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ProjectSlide
              project={active}
              index={activeIndex}
              onViewDetails={() => setDetailIndex(activeIndex)}
            />
          </motion.div>
        ) : (
          <motion.div
            key={`detail-${detailIndex}`}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ProjectDetailView
              project={active}
              index={detailIndex}
              onBack={() => setDetailIndex(null)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {detailIndex === null && (
        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose project">
            {projects.map((project, index) => (
              <button
                key={project.title}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Show ${project.title}`}
                onClick={() => goTo(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === activeIndex ? "w-8 bg-primary" : "w-3 bg-border hover:bg-muted-foreground"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-muted-foreground">
              0{activeIndex + 1} / 0{count}
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous project"
              >
                <ArrowLeft />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next project"
              >
                <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Gayan Shaminda Karunarathne, home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-sm border border-primary/40 bg-primary/10 font-mono text-xs font-semibold text-primary">
              GK
            </span>
            <span className="hidden text-sm font-semibold sm:block">Gayan Karunarathne</span>
          </a>
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav
            className="border-t border-border bg-background px-5 py-5 md:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-sm px-3 py-3 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section
          id="top"
          className="relative flex min-h-[min(760px,82svh)] items-center border-b border-border pt-24"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-technical-grid opacity-40"
            aria-hidden="true"
          />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-5 pb-16 sm:px-8 md:grid-cols-[1.08fr_0.92fr] md:pb-20 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative z-10 max-w-3xl"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/8 px-3 py-1.5 text-xs text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50 motion-reduce:animate-none" />
                  <span className="relative h-2 w-2 rounded-full bg-primary" />
                </span>
                Open to Software Engineering Opportunities
              </div>
              <p className="mb-4 font-mono text-sm uppercase tracking-widest text-muted-foreground">
                Software Engineer · Sri Lanka
              </p>
              <h1 className="font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl md:text-[clamp(3.4rem,5.8vw,5.9rem)]">
                Gayan Shaminda
                <br />
                <span className="text-muted-foreground">Karunarathne</span>
              </h1>
              <p className="mt-6 font-display text-xl font-medium text-primary sm:text-2xl">
                Full-Stack · AI · Cloud
              </p>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Computer Engineering graduate with industry experience building production web
                applications across full-stack development, AI-powered systems, cloud infrastructure
                and secure software.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#projects">
                    View my work <ArrowDown />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/Gayan_Shaminda_Karunarathne_CV.pdf" download>
                    Download CV <Download />
                  </a>
                </Button>
              </div>
              <div className="mt-7 flex items-center gap-3">
                <Button asChild variant="ghost" size="icon">
                  <a
                    href="https://github.com/Gayanshaminda"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub profile"
                  >
                    <Github />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a
                    href="https://www.linkedin.com/in/gayan-shaminda"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn profile"
                  >
                    <Linkedin />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon">
                  <a href="mailto:gayanshaminda2001@gmail.com" aria-label="Email Gayan">
                    <Mail />
                  </a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto aspect-[4/5] w-full max-w-[420px]"
            >
              <div
                className="absolute -inset-3 border border-dashed border-primary/20"
                aria-hidden="true"
              />
              <div className="relative h-full overflow-hidden border border-primary/25 bg-surface shadow-2xl shadow-primary/10">
                <img
                  src={heroPortrait}
                  alt="Gayan Shaminda Karunarathne"
                  className="h-full w-full object-cover object-top"
                  width={1122}
                  height={1402}
                  fetchPriority="high"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/5"
                  aria-hidden="true"
                />
              </div>
              <span
                className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-primary/60"
                aria-hidden="true"
              />
              <span
                className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-primary/60"
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </section>

        <section id="about" className="scroll-mt-16 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              index="01"
              eyebrow="About & education"
              title="Engineering systems that hold up beyond the demo."
            />
            <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
              <motion.div
                {...fadeUp}
                className="max-w-3xl space-y-5 text-lg leading-8 text-muted-foreground"
              >
                <p>
                  I’m a Computer Engineering graduate from the University of Ruhuna with hands-on
                  experience contributing to real production applications.
                </p>
                <p>
                  My interests span full-stack systems, backend engineering, AI/ML, cloud
                  infrastructure and secure software—with an emphasis on building software that is
                  reliable, scalable and maintainable.
                </p>
              </motion.div>
              <motion.div
                {...fadeUp}
                className="grid grid-cols-1 border-y border-border sm:grid-cols-3 lg:grid-cols-1"
              >
                {[
                  ["10 Months", "Industry Experience"],
                  ["4+", "Major Engineering Projects"],
                  ["BSc Eng. (Hons)", "Computer Engineering"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="border-b border-border py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0 lg:border-b lg:border-r-0 lg:px-0"
                  >
                    <strong className="block font-display text-2xl text-foreground">{value}</strong>
                    <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.article
              {...fadeUp}
              className="mt-14 grid gap-8 border-t border-border pt-8 lg:mt-16 lg:grid-cols-[0.72fr_1.28fr]"
            >
              <div>
                <div className="mb-5 flex items-center gap-3">
                  <GraduationCap className="h-7 w-7 text-primary" />
                  <span className="font-mono text-xs uppercase tracking-widest text-primary">
                    Education
                  </span>
                </div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Jun 2022 — Sep 2026
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold">University of Ruhuna</h3>
                <p className="mt-1 text-muted-foreground">Faculty of Engineering</p>
              </div>
              <div>
                <p className="font-display text-2xl font-medium">
                  BSc Engineering (Hons) in Computer Engineering
                </p>
                <p className="mt-3 text-lg text-primary">GPA 3.46 / 4.00</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Data Structures & Algorithms",
                    "Software Engineering",
                    "Object-Oriented Design",
                    "Database Systems",
                    "Artificial Intelligence",
                    "Machine Learning",
                    "Information Security",
                    "Cloud Computing",
                  ].map((area) => (
                    <span
                      key={area}
                      className="rounded-sm border border-border px-3 py-1.5 text-sm text-muted-foreground"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section
          id="experience"
          className="scroll-mt-16 border-y border-border bg-surface py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              index="02"
              eyebrow="Experience"
              title="Production experience, from interface to release."
            />
            <motion.article
              {...fadeUp}
              className="grid gap-8 border-l border-primary/50 pl-5 sm:pl-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
            >
              <div>
                <BriefcaseBusiness className="mb-5 h-6 w-6 text-primary" />
                <p className="font-mono text-xs uppercase tracking-widest text-primary">
                  Apr 2025 — Feb 2026
                </p>
                <h3 className="mt-3 font-display text-3xl font-semibold">
                  Intern Software Engineer
                </h3>
                <p className="mt-2 text-muted-foreground">BotCalm (Private) Limited</p>
              </div>
              <div>
                <ul className="space-y-4">
                  {[
                    "Developed frontend modules across four role-based portals—Admin, Teacher, Student and Parent—within a large-scale school management platform structured as a Turborepo monorepo with shared UI and authentication packages.",
                    "Implemented data-heavy interfaces, sortable and filterable tables, multi-step forms with Zod validation, rich-text editing and file-upload workflows.",
                    "Built a real-time WebSocket chat feature with emoji support, voice recording and message search across multiple portals.",
                    "Investigated and resolved software defects during a live QA and release cycle while collaborating with developers and QA engineers.",
                    "Contributed to responsive marketing frontends using Next.js, TypeScript and Tailwind CSS based on Figma designs.",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "TanStack Table",
                    "React Hook Form",
                    "Zod",
                    "WebSockets",
                    "Git",
                    "Jira",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-border bg-background px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        <section id="projects" className="scroll-mt-16 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              index="03"
              eyebrow="Featured projects"
              title="Applied engineering across AI, security and cloud systems."
              text="Selected work that demonstrates system design, technical depth and practical implementation across the stack."
            />
            <ProjectsShowcase />
            <motion.div
              {...fadeUp}
              className="mt-6 flex flex-col items-start justify-between gap-5 border border-dashed border-border p-6 sm:flex-row sm:items-center md:p-8"
            >
              <div>
                <p className="font-display text-xl font-semibold">Other work</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Space reserved for DevOps infrastructure and future engineering projects.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <Plus className="h-4 w-4" /> Coming later
              </span>
            </motion.div>
          </div>
        </section>

        <section
          id="skills"
          className="scroll-mt-16 border-y border-border bg-surface py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <SectionHeading
              index="04"
              eyebrow="Technical skills"
              title="A practical toolkit for modern software delivery."
            />
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => {
                const Icon = skillIcons[index];
                return (
                  <motion.div {...fadeUp} key={group.name} className="bg-background p-6 md:p-8">
                    {Icon && <Icon className="h-5 w-5 text-primary" />}
                    <h3 className="mt-5 font-display text-xl font-semibold">{group.name}</h3>
                    <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                      {group.skills.map((skill) => (
                        <span key={skill} className="text-sm text-muted-foreground">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 border-t border-border bg-primary text-primary-foreground"
        >
          <motion.div
            {...fadeUp}
            className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28 lg:px-12"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-primary-foreground/70">
              Available for the right opportunity
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                  Let’s build something meaningful.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/70 md:text-lg">
                  I’m currently open to Software Engineering, Full-Stack and AI-focused
                  opportunities.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="w-fit">
                <a href="mailto:gayanshaminda2001@gmail.com">
                  Get in touch <Mail />
                </a>
              </Button>
            </div>
            <div className="mt-12 flex flex-col gap-3 border-t border-primary-foreground/20 pt-7 text-sm sm:flex-row sm:flex-wrap sm:gap-8">
              <a
                href="mailto:gayanshaminda2001@gmail.com"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                gayanshaminda2001@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/gayan-shaminda"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Gayanshaminda"
                target="_blank"
                rel="noreferrer"
                className="text-primary-foreground/70 hover:text-primary-foreground"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="bg-background">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 Gayan Shaminda Karunarathne</p>
          <a href="#top" className="inline-flex items-center gap-2 hover:text-foreground">
            Back to top <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
