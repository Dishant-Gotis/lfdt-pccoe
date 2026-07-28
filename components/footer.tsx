import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-7xl px-6 pb-10 lg:px-8 mt-16">
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
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="/events" className="transition hover:text-white">
                Events
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Connect</p>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@lfdtpccoe.in" className="transition hover:text-white">
                hello@lfdtpccoe.in
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                Instagram
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
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
  )
}
