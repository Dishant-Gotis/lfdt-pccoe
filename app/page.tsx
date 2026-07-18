import Link from "next/link"
import {
  ArrowRight,
  Blocks,
  CalendarDays,
  ChevronRight,
  Cpu,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Users2,
  Zap,
} from "lucide-react"
import AsciiArtDemo from "@/components/ui/thread-light-demo"
import { CreativeHoverCard } from "@/components/ui/creative-hover-card"

const stats = [
  {
    badge: "Community",
    value: "40+",
    label: "student builders",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    badge: "Builds",
    value: "12",
    label: "project sprints",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    badge: "Events",
    value: "6",
    label: "hackathons hosted",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    hoverImage:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
]

const pillars = [
  {
    icon: Blocks,
    title: "Projects with real utility",
    text: "We turn blockchain fundamentals into working products, not just slides and buzzwords.",
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-default thinking",
    text: "Students learn smart contract safety, wallet hygiene, and practical protocol design.",
  },
  {
    icon: Zap,
    title: "Hackathons and demos",
    text: "Fast cycles, guided mentorship, and public showcases keep the momentum high.",
  },
]

const highlights = [
  {
    title: "Decentralized identity workshop",
    date: "September",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Student builder sprint",
    date: "October",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Campus hackathon night",
    date: "November",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen text-white">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-glow">
            <Blocks className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-wide">Lfdt Pccoe</p>
            <p className="text-sm text-slate-300">Blockchain club of PCCOE</p>
          </div>
        </div>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#about" className="transition hover:text-white">
            About
          </a>
          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>
          <a href="#events" className="transition hover:text-white">
            Events
          </a>
          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>
      </header>

      <section className="relative min-h-screen w-full overflow-hidden px-6 pt-6 lg:px-8 lg:pt-8">
        <div className="absolute inset-0">
          <AsciiArtDemo />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),rgba(2,6,23,0.8)_48%,rgba(2,6,23,0.96)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.12),transparent_34%,rgba(217,70,239,0.16)_68%,rgba(14,165,233,0.1))] mix-blend-screen" />
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 backdrop-blur-md">
            <Sparkles className="h-4 w-4" />
            Building the next wave of blockchain talent at PCCOE
          </div>

          <div className="max-w-5xl space-y-5 px-4">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-fuchsia-300/90">
              LFDT PCCOE STUDENT CHAPTER
            </p>
            <h1 className="font-display text-balance text-5xl font-semibold leading-[0.92] tracking-tight sm:text-6xl lg:text-8xl">
              LFDT PCCOE STUDENT CHAPTER
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-8 text-slate-200/90 sm:text-lg lg:text-xl">
              A student-led blockchain community at PCCOE where builders explore smart contracts, decentralized apps,
              and product ideas through projects, hackathons, and hands-on collaboration.
            </p>
            <p className="mx-auto max-w-3xl text-base leading-8 text-slate-300 sm:text-lg lg:text-xl">
              We bring together curious students who want to learn the stack, ship real prototypes, and present work
              that feels bold, technical, and future-facing.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Join the club
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
            >
              See student projects
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid w-full max-w-5xl gap-4 px-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <CreativeHoverCard
                key={stat.label}
                badge={stat.badge}
                title={`${stat.value} ${stat.label}`}
                hoverTitle={stat.label}
                description="Community, execution, and visible momentum are what make the chapter feel alive."
                imageSrc={stat.image}
                hoverImageSrc={stat.hoverImage}
                imageAlt={stat.label}
                className="h-full"
                badgeClassName="bg-cyan-400 text-slate-950"
              />
            ))}
          </div>

          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100 backdrop-blur-md">
            <Cpu className="h-4 w-4 text-cyan-300" />
            Cyberpunk hero with the animated ASCII thread light as the backdrop.
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <CreativeHoverCard
            badge="Chapter overview"
            title="Learn blockchain by building work you can actually show."
            hoverTitle="Build in public"
            description="LFDT PCCOE Student Chapter is a student-led community for blockchain, distributed systems, and digital trust. We focus on projects, mentorship, and hackathons that move members from curiosity to execution."
            imageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
            hoverImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            imageAlt="Chapter overview"
            className="min-h-[480px]"
            badgeClassName="bg-fuchsia-400 text-white"
          />

          <div className="grid gap-6">
            <CreativeHoverCard
              badge="Core values"
              title="Openness and collaboration"
              hoverTitle="Transparency and trust"
              description="The chapter works best when students share openly, contribute consistently, and build with a clear sense of community ethics."
              imageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              hoverImageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Core values"
              className="min-h-[240px]"
              badgeClassName="bg-green-400 text-slate-950"
            />

            <CreativeHoverCard
              badge="Impact metrics"
              title="100+ students"
              hoverTitle="25+ projects"
              description="A visible student base, active project work, and growing participation keep the chapter moving forward."
              imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
              hoverImageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              imageAlt="Impact metrics"
              className="min-h-[240px]"
              badgeClassName="bg-blue-400 text-white"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <CreativeHoverCard
            badge="Focus areas"
            title="Blockchain Technology"
            hoverTitle="Distributed Systems"
            description="We guide students through practical tracks that support team-building, technical depth, and club-wide contribution."
            imageSrc="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=1200&q=80"
            hoverImageSrc="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=1200&q=80"
            imageAlt="Focus areas"
            className="min-h-[280px]"
            badgeClassName="bg-orange-400 text-slate-950"
          />

          <CreativeHoverCard
            badge="Why join"
            title="Build a real portfolio"
            hoverTitle="Present polished work"
            description="Learn blockchain fundamentals, work in teams, and produce public-facing outputs that make sense to recruiters and peers."
            imageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            hoverImageSrc="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
            imageAlt="Why join"
            className="min-h-[280px]"
            badgeClassName="bg-fuchsia-400 text-white"
          />
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-amber-300">Projects</p>
            <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">What students build here</h2>
          </div>
          <MapPinned className="hidden h-6 w-6 text-slate-400 md:block" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <CreativeHoverCard
                key={pillar.title}
                badge="Project"
                title={pillar.title}
                hoverTitle={pillar.title}
                description={pillar.text}
                imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
                hoverImageSrc="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                imageAlt={pillar.title}
                className="h-full"
                badgeClassName="bg-blue-400 text-white"
              />
            )
          })}
        </div>
      </section>

      <section id="events" className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8 lg:py-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">Events</p>
            <h2 className="font-display mt-2 text-3xl font-semibold sm:text-4xl">Hackathons, meetups, and workshops</h2>
          </div>
          <CalendarDays className="hidden h-6 w-6 text-slate-400 md:block" />
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {highlights.map((item) => (
            <CreativeHoverCard
              key={item.title}
              badge={item.date}
              title={item.title}
              hoverTitle={`${item.title} live`}
              description="Sessions designed for rapid team formation, guided ideation, and demo-ready outputs."
              imageSrc={item.image}
              hoverImageSrc="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              imageAlt={item.title}
              className="h-full"
              badgeClassName="bg-green-400 text-slate-950"
            />
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-8 pb-20 lg:px-8 lg:py-16">
        <CreativeHoverCard
          badge="Join us"
          title="Want to build with us this semester?"
          hoverTitle="Start building now"
          description="Bring your interest in blockchain, design, backend, product, or community work. We’ll help you find a project and a team."
          imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
          hoverImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          imageAlt="Join us"
          className="min-h-[420px]"
          badgeClassName="bg-cyan-400 text-slate-950"
        />
      </section>

      <footer className="mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8">
        <div className="relative overflow-hidden border-t border-cyan-400/20 pt-8">
          <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:items-start">
            <div className="space-y-4">
              <p className="font-display text-2xl font-semibold tracking-wide text-white">LFDT PCCOE</p>
              <p className="max-w-xl text-sm leading-7 text-slate-300">
                The student chapter for blockchain builders at PCCOE, focused on projects, hackathons, and practical
                learning. We design, build, test, and ship in public.
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-fuchsia-300">Navigate</p>
              <div className="flex flex-col gap-3">
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
                <a href="#projects" className="transition hover:text-white">
                  Projects
                </a>
                <a href="#events" className="transition hover:text-white">
                  Events
                </a>
                <a href="#contact" className="transition hover:text-white">
                  Contact
                </a>
              </div>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Connect</p>
              <div className="flex flex-col gap-3">
                <a href="mailto:hello@lfdtpccoe.in" className="transition hover:text-white">
                  hello@lfdtpccoe.in
                </a>
                <a href="#" className="transition hover:text-white">
                  Instagram
                </a>
                <a href="#" className="transition hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="transition hover:text-white">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.25em] text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 LFDT PCCOE Student Chapter</p>
            <p>Blockchain club of PCCOE</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
