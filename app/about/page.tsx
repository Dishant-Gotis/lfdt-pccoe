import { Blocks, ShieldCheck, Zap, Cpu, Code2, Search, HeartHandshake } from "lucide-react"
import { GlowCard } from "@/components/ui/spotlight-card"
import Link from "next/link"

const pillars = [
  {
    icon: Blocks,
    title: "Projects with real utility",
    text: "We focus on turning raw blockchain concepts into deployed campus projects, DApps, and tooling instead of just slide-decks and buzzwords.",
    color: "blue" as const
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-default thinking",
    text: "Safety is paramount in Web3. We teach smart contract security, secure wallet integrations, code vulnerability auditing, and protocol hygiene.",
    color: "green" as const
  },
  {
    icon: Zap,
    title: "Hackathons and sprints",
    text: "Fast development iterations, guided peer mentorship, and public demo showcases keep student builders motivated and aligned.",
    color: "orange" as const
  }
]

const departments = [
  {
    icon: Code2,
    title: "Development Track",
    desc: "Writing core smart contracts (Solidity, Rust), indexing blockchain data (The Graph), and integrating dApp frontends."
  },
  {
    icon: Search,
    title: "Research & Audit Track",
    desc: "Analyzing consensus protocols, zero-knowledge mechanics, tokenomics models, and auditing contract security."
  },
  {
    icon: Cpu,
    title: "Design & UX Track",
    desc: "Crafting modern, readable, and highly interactive user interfaces for complex decentralized products."
  },
  {
    icon: HeartHandshake,
    title: "Growth & Community Track",
    desc: "Organizing workshops, hosting hackathons, securing sponsorships, and managing developer relations."
  }
]

export default function About() {
  return (
    <div className="text-white pt-24 pb-16">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Our Identity
        </p>
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Layer for Digital Trust
        </h1>
        <p className="mx-auto max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed">
          LFDT is the blockchain club of Pimpri Chinchwad College of Engineering (PCCOE). We are a community of student builders, developers, and researchers dedicated to exploring decentralization, cryptography, and smart contract design.
        </p>
      </section>

      {/* Core Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Core Pillars of Our Chapter</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">How we define our approach to learning and building.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <GlowCard
                key={idx}
                customSize={true}
                glowColor={pillar.color}
                className="p-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{pillar.text}</p>
                </div>
              </GlowCard>
            )
          })}
        </div>
      </section>

      {/* Department/Tracks Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Find Your Focus</h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              At LFDT PCCOE, we believe everyone has a key role to play in building Web3. We organize our activities into four distinct tracks to help students specialize and contribute based on their interests.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Members are encouraged to jump between tracks, pair-program with peers, and join workstreams that match their skill level and professional goals.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {departments.map((dept, idx) => {
              const Icon = dept.icon
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/5 bg-slate-900/30 p-6 space-y-3 hover:bg-slate-900/50 transition duration-300"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-base">{dept.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{dept.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="mx-auto max-w-4xl px-6 pt-12 text-center">
        <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-8 backdrop-blur-lg shadow-glow space-y-4">
          <h3 className="font-display text-xl font-bold">Want to learn with us?</h3>
          <p className="text-sm text-slate-300">No prior blockchain knowledge is required. We start from ground zero.</p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Apply to join the chapter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
