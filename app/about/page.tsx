import { Blocks, ShieldCheck, Zap, Cpu, Code2, Search, HeartHandshake, Github, Linkedin, Globe } from "lucide-react"
import { GlowCard } from "@/components/ui/spotlight-card"
import Image from "next/image"
import Link from "next/link"

const pillars = [
  {
    icon: Blocks,
    title: "Projects with real utility",
    text: "We focus on turning raw blockchain concepts into deployed campus projects, DApps, and tooling instead of just slide-decks and buzzwords.",
    color: "blue" as const,
  },
  {
    icon: ShieldCheck,
    title: "Secure-by-default thinking",
    text: "Safety is paramount in Web3. We teach smart contract security, secure wallet integrations, code vulnerability auditing, and protocol hygiene.",
    color: "green" as const,
  },
  {
    icon: Zap,
    title: "Hackathons and sprints",
    text: "Fast development iterations, guided peer mentorship, and public demo showcases keep student builders motivated and aligned.",
    color: "orange" as const,
  },
]

const departments = [
  {
    icon: Code2,
    title: "Development Track",
    desc: "Writing core smart contracts (Solidity, Rust), indexing blockchain data (The Graph), and integrating dApp frontends.",
  },
  {
    icon: Search,
    title: "Research & Audit Track",
    desc: "Analyzing consensus protocols, zero-knowledge mechanics, tokenomics models, and auditing contract security.",
  },
  {
    icon: Cpu,
    title: "Design & UX Track",
    desc: "Crafting modern, readable, and highly interactive user interfaces for complex decentralized products.",
  },
  {
    icon: HeartHandshake,
    title: "Growth & Community Track",
    desc: "Organizing workshops, hosting hackathons, securing sponsorships, and managing developer relations.",
  },
]

const leaders = {
  president: {
    name: "Rahul Sharma",
    role: "President",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com"
  },
  vicePresidents: [
    {
      name: "Neha Patil",
      role: "Vice President",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&h=300&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    },
    {
      name: "Aditya Joshi",
      role: "Vice President",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300&q=80",
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  ],
  techHead: {
    name: "Sameer Deshmukh",
    role: "Technical Head",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    website: "https://example.com"
  }
}

export default function About() {
  return (
    <div className="text-white pt-24 pb-16">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400 font-retro">Our Identity</p>
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Layer for Digital Trust
        </h1>
        <p className="mx-auto max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed">
          LFDT is the blockchain club of Pimpri Chinchwad College of Engineering (PCCOE). We are a community of student
          builders, developers, and researchers dedicated to exploring decentralization, cryptography, and smart contract
          design.
        </p>
      </section>

      {/* Info Section (Lorem Ipsum) */}
      <section className="mx-auto max-w-4xl px-6 py-12 lg:px-8">
        <div className="rounded-3xl border border-white/5 bg-slate-900/30 p-6 md:p-8 backdrop-blur-lg">
          <h2 className="font-display text-lg font-bold text-cyan-400 mb-3 uppercase tracking-wider">Club Overview</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 border-t border-white/5">
        <div className="text-center mb-10">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Core Pillars of Our Chapter</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            How we define our approach to learning and building.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <GlowCard key={idx} customSize={true} glowColor={pillar.color} className="p-6 flex flex-col justify-between">
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

      {/* Meet the Team Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-400">Governance</p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl mt-2">Meet Our Leadership</h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2">
            The core committee driving builder execution at LFDT PCCOE.
          </p>
        </div>

        {/* Team Layout Hierarchy */}
        <div className="space-y-12">
          {/* President - Top Row (Centered) */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex flex-col items-center text-center space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="relative h-28 w-28 rounded-full overflow-hidden border-2 border-cyan-400/40 shadow-glow">
                <Image
                  src={leaders.president.avatar}
                  alt={leaders.president.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">{leaders.president.name}</h3>
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">{leaders.president.role}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href={leaders.president.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Github className="h-4 w-4" />
                </a>
                <a href={leaders.president.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={leaders.president.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Vice Presidents and Tech Head - Bottom Row (3 Columns) */}
          <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto">
            {/* Vice President 1 */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex flex-col items-center text-center space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src={leaders.vicePresidents[0].avatar}
                  alt={leaders.vicePresidents[0].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{leaders.vicePresidents[0].name}</h3>
                <p className="text-xs uppercase tracking-wider text-fuchsia-400 font-semibold">{leaders.vicePresidents[0].role}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href={leaders.vicePresidents[0].github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Github className="h-4 w-4" />
                </a>
                <a href={leaders.vicePresidents[0].linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={leaders.vicePresidents[0].website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Vice President 2 */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex flex-col items-center text-center space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-white/10">
                <Image
                  src={leaders.vicePresidents[1].avatar}
                  alt={leaders.vicePresidents[1].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{leaders.vicePresidents[1].name}</h3>
                <p className="text-xs uppercase tracking-wider text-fuchsia-400 font-semibold">{leaders.vicePresidents[1].role}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href={leaders.vicePresidents[1].github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Github className="h-4 w-4" />
                </a>
                <a href={leaders.vicePresidents[1].linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={leaders.vicePresidents[1].website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Technical Head */}
            <div className="rounded-2xl border border-white/5 bg-slate-900/40 p-6 flex flex-col items-center text-center space-y-4 hover:border-cyan-500/20 transition duration-300">
              <div className="relative h-24 w-24 rounded-full overflow-hidden border-2 border-emerald-400/40 shadow-glow">
                <Image
                  src={leaders.techHead.avatar}
                  alt={leaders.techHead.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-display text-base font-bold text-white">{leaders.techHead.name}</h3>
                <p className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">{leaders.techHead.role}</p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <a href={leaders.techHead.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Github className="h-4 w-4" />
                </a>
                <a href={leaders.techHead.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={leaders.techHead.website} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-white transition">
                  <Globe className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department/Tracks Section */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 border-t border-white/5">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] items-center">
          <div className="space-y-6">
            <h2 className="font-display text-3xl font-bold">Find Your Focus</h2>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              At LFDT PCCOE, we believe everyone has a key role to play in building Web3. We organize our activities into
              four distinct tracks to help students specialize and contribute based on their interests.
            </p>
            <p className="text-slate-400 leading-relaxed text-sm">
              Members are encouraged to jump between tracks, pair-program with peers, and join workstreams that match
              their skill level and professional goals.
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
