"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Blocks, Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-cyan-500/10 bg-slate-950/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-glow transition-all duration-300 group-hover:border-cyan-400/60 group-hover:scale-105">
            <Blocks className="h-5 w-5" />
          </div>
          <div>
            <p className="font-display text-base font-semibold tracking-wide text-white">Lfdt Pccoe</p>
            <p className="text-xs text-slate-400">Blockchain Club</p>
          </div>
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`relative py-1 font-medium transition duration-300 hover:text-white ${
                isActive(item.path) ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              {item.name}
              {isActive(item.path) && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyan-400 rounded-full" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-xs font-semibold text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-slate-950"
          >
            Join Build
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-300 hover:text-white md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-cyan-500/10 bg-slate-950/95 p-6 shadow-2xl backdrop-blur-lg md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`py-2 text-sm font-semibold transition ${
                  isActive(item.path) ? "text-cyan-400 pl-2 border-l-2 border-cyan-400" : "text-slate-300"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block rounded-full bg-cyan-400 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Join the club
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
