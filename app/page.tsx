import Link from "next/link"
import { ArrowRight, Sparkles, Cpu, Blocks, Calendar, Zap, ArrowUpRight } from "lucide-react"
import AsciiArtDemo from "@/components/ui/thread-light-demo"
import { GlowCard } from "@/components/ui/spotlight-card"

const stats = [
  { value: "40+", label: "Student Builders" },
  { value: "12+", label: "Projects Shipped" },
  { value: "6+", label: "Hackathons Hosted" },
]

const featuredProjects = [
  {
    title: "CampuSign",
    description: "Decentralized event ticketing and QR-based attendance verification using NFTs to prevent ticket fraud and track engagement.",
    tags: ["Solidity", "Next.js", "ERC-721", "Ethers.js"],
    color: "blue" as const
  },
  {
    title: "CertiLedger",
    description: "Secure academic credentials issuance and instant verification platform on-chain, eliminating forged university certificates.",
    tags: ["Solidity", "IPFS", "Hardhat", "React"],
    color: "purple" as const
  }
]

const upcomingEvents = [
  {
    title: "Web3 HackPCCOE",
    date: "Sept 12-13, 2026",
    type: "Hackathon",
    desc: "A 36-hour student hackathon to build DeFi protocols and digital identity solutions."
  },
  {
    title: "Smart Contract Security Bootcamp",
    date: "Oct 05, 2026",
    type: "Workshop",
    desc: "An intensive session on common Solidity vulnerabilities, gas optimizations, and auditing basics."
  }
]

export default function Home() {
  return (
    <div className="text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] w-full overflow-hidden px-6 pt-24 lg:px-8 flex flex-col justify-center">
        {/* Ambient background glows and ASCII art container */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-40 mix-blend-screen">
            <AsciiArtDemo />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),rgba(2,6,23,0.92)_55%,rgba(2,6,23,1)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,182,212,0.08),transparent_40%,rgba(217,70,239,0.1)_70%,rgba(14,165,233,0.05))]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-1.5 text-xs sm:text-sm text-cyan-300 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            Empowering the next generation of Web3 talent at PCCOE
          </div>

          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.4em] text-fuchsia-400">
            LFDT PCCOE Student Chapter
          </p>

          <h1 className="font-display text-balance text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Building the <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-500 bg-clip-text text-transparent">Decentralized</span> Web
          </h1>

          <p className="mx-auto max-w-2xl text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
            A developer-first blockchain community where PCCOE students learn smart contract design, decentralized systems, and ship production-ready protocols in public.
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Join the club
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/10"
            >
              See our projects
            </Link>
          </div>
        </div>

        {/* Stats counter section */}
        <div className="relative z-10 mx-auto mt-16 w-full max-w-4xl px-4">
          <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-6 backdrop-blur-lg shadow-glow">
            <div className="grid grid-cols-3 gap-4 text-center divide-x divide-white/10">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="font-display text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-cyan-400">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              What is LFDT?
            </div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              A Layer for Digital Trust & Real Execution
            </h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              The LFDT student chapter bridges the gap between Web3 theory and practice. We do not just sit through lectures; we form teams, write Solidity, deploy on testnets, and audit smart contracts.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Our community consists of developers, security researchers, and UI/UX designers collaborating on building real utility tools for our campus ecosystem and participating in national hackathons.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Learn more about our mission
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Showcase of Focus Stacks */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Cpu className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-white">Smart Contracts</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Writing secure Solidity and Rust contracts with a focus on safety and gas efficiency.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6 space-y-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                <Blocks className="h-5 w-5" />
              </div>
              <h3 className="font-display font-semibold text-white">dApps</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Interfacing blockchain backends with modern frontend applications using Ethers, viem, and React.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-fuchsia-400">Our Creations</p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Featured Student Projects</h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            Explore all projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, idx) => (
            <GlowCard
              key={idx}
              customSize={true}
              glowColor={project.color}
              className="p-6 h-full flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold text-white">{project.title}</h3>
                  <div className="p-1.5 rounded-lg bg-white/5 text-slate-400">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900 border border-white/5 px-2.5 py-0.5 text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </section>

      {/* 4. Events Preview */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-teal-400">Get Involved</p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">Upcoming Sprints & Workshops</h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
          >
            View full calendar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-teal-500/10 border border-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                </div>
                <h3 className="font-display text-lg font-bold text-white">{event.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{event.desc}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:underline"
                >
                  Register to attend
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Join Us Section */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-950 p-8 sm:p-12 md:p-16 text-center space-y-6">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_60%)]" />
          <div className="mx-auto max-w-2xl space-y-4">
            <Zap className="mx-auto h-8 w-8 text-cyan-400" />
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl text-white">
              Ready to Write Web3 Code?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Whether you are an expert programmer or just started learning Web3, LFDT is the perfect place to build projects, find team members, and learn by shipping.
            </p>
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Join LFDT PCCOE
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
