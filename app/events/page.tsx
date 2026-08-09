import { Calendar, MapPin, Users } from "lucide-react"

const upcomingEvents = [
  {
    title: "Web3 HackPCCOE",
    date: "Sept 12-13, 2026",
    time: "09:00 AM onwards",
    location: "PCCOE Main Seminar Hall",
    type: "Hackathon",
    desc: "A 36-hour local hackathon to design, develop, and present decentralized finance (DeFi), public goods, or digital identity prototypes. Includes expert panels and prizes.",
    highlights: ["36-hour build sprint", "Mentorship from Web3 founders", "Sponsorship prizes"]
  },
  {
    title: "Smart Contract Security Bootcamp",
    date: "Oct 05, 2026",
    time: "02:00 PM - 05:00 PM",
    location: "IT Computer Lab 3",
    type: "Workshop",
    desc: "A deep dive into Solidity security. Students will learn about reentrancy vulnerabilities, access control loopholes, integer issues, and how to use analysis tools like Slither.",
    highlights: ["Vulnerability walkthroughs", "Audit checklist handbook", "Hands-on capture-the-flag"]
  }
]

const pastEvents = [
  {
    title: "Decentralized Identity Workshop",
    date: "August 15, 2026",
    location: "Online (Discord)",
    type: "Workshop",
    desc: "Explored W3C standards for Decentralized Identifiers (DIDs) and Verifiable Credentials. Built and deployed a Soulbound Token contract representing event completion."
  },
  {
    title: "Ethereum 101 Bootcamp",
    date: "July 20, 2026",
    location: "Computer Center Lab",
    type: "Bootcamp",
    desc: "Introduced students to EVM basics, transaction dynamics, wallets, testnet faucets, and compiling/deploying basic smart contracts with Hardhat."
  },
  {
    title: "Student Builder Sprint",
    date: "June 10, 2026",
    location: "PCCOE Reading Hall",
    type: "Sprint",
    desc: "A rapid prototyping event where students teamed up to connect UI frontends to contracts using Wagmi and RainbowKit in under 6 hours."
  }
]

export default function Events() {
  return (
    <div className="text-white pt-24 pb-16">
      {/* Page Header */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 text-center space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-400">
          Our Calendar
        </p>
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Workshops & Hackathons
        </h1>
        <p className="mx-auto max-w-3xl text-slate-300 text-sm sm:text-base leading-relaxed">
          Participate in our fast-paced build events, learn smart contract engineering, and connect with other builders.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="border-b border-white/10 pb-4 mb-8">
          <h2 className="font-display text-2xl font-bold">Upcoming Events</h2>
          <p className="text-sm text-slate-400 mt-1">Register today and secure your spot.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {upcomingEvents.map((event, idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-slate-900/30 p-6 md:p-8 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <span className="rounded-full bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 text-xs font-semibold text-cyan-300">
                    {event.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar className="h-3.5 w-3.5" />
                    {event.date}
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white">{event.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{event.desc}</p>

                {/* Event Details Info */}
                <div className="grid gap-2 text-xs text-slate-400 pt-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-cyan-400" />
                    <span>{event.time}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Highlights</p>
                  <ul className="grid gap-1.5 pl-4 list-disc text-xs text-slate-400">
                    {event.highlights.map((highlight, hIdx) => (
                      <li key={hIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="/contact"
                  className="rounded-full bg-cyan-400 hover:bg-cyan-300 px-6 py-2.5 text-xs font-semibold text-slate-950 transition"
                >
                  Register to Attend
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-8 border-t border-white/5">
        <div className="pb-4 mb-8">
          <h2 className="font-display text-2xl font-bold">Past Events</h2>
          <p className="text-sm text-slate-400 mt-1">What we have shipped and completed.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/5 bg-slate-900/10 p-6 flex flex-col justify-between hover:bg-slate-900/20 transition duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-slate-800 border border-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-400">
                    {event.type}
                  </span>
                  <span className="text-[10px] text-slate-400">{event.date}</span>
                </div>
                <h3 className="font-display text-base font-bold text-white">{event.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{event.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400">
                <MapPin className="h-3.5 w-3.5 text-slate-500" />
                <span>{event.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
