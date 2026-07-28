"use client"

import { useState } from "react"
import { Send, CheckCircle2, User, Mail, Github, Award, MessageSquare } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "developer",
    experience: "beginner",
    github: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulated form submission
    setTimeout(() => {
      setSubmitted(true)
    }, 600)
  }

  return (
    <div className="text-white pt-24 pb-16 min-h-[80vh] flex flex-col justify-center">
      <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          
          {/* Info Column */}
          <div className="space-y-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Get in Touch
            </p>
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
              Join the Builder Chapter
            </h1>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Ready to learn smart contracts, participate in hackathons, and deploy real products? Fill out the application form to join our developer workstreams.
            </p>
            
            <div className="space-y-4 pt-4 border-t border-white/5 text-sm text-slate-400">
              <p>📍 Location: PCCOE Campus, Sector 26, Pradhikaran, Pune.</p>
              <p>✉️ Email: <a href="mailto:hello@lfdtpccoe.in" className="text-cyan-400 hover:underline">hello@lfdtpccoe.in</a></p>
              <p>🌐 Discord: Members-only workspace invite sent upon approval.</p>
            </div>
          </div>

          {/* Form Column */}
          <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 md:p-8 backdrop-blur-xl shadow-glow">
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-fade-in">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h2 className="font-display text-2xl font-bold text-white">Application Received!</h2>
                <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for applying, <span className="text-cyan-300 font-semibold">{formData.name}</span>. We will review your info and reach out to you via <span className="text-slate-200">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs text-slate-400 hover:text-white underline transition"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <User className="h-3.5 w-3.5 text-cyan-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Mail className="h-3.5 w-3.5 text-cyan-400" /> Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Role selection */}
                <div className="space-y-1.5">
                  <label htmlFor="role" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5 text-cyan-400" /> Primary Role of Interest
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
                  >
                    <option value="developer">Smart Contract Developer (Solidity/Rust)</option>
                    <option value="frontend">Frontend Developer (React/Wagmi)</option>
                    <option value="designer">UI/UX Designer</option>
                    <option value="researcher">Security Auditor / Cryptography Researcher</option>
                    <option value="community">Community Lead / Growth</option>
                  </select>
                </div>

                {/* Experience Selection */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Web3 Experience Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["beginner", "intermediate", "advanced"].map((lvl) => (
                      <label
                        key={lvl}
                        className={`cursor-pointer rounded-xl border p-3 text-center text-xs font-semibold uppercase tracking-wider transition ${
                          formData.experience === lvl
                            ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                            : "border-white/10 bg-slate-950 text-slate-400 hover:border-white/20"
                        }`}
                      >
                        <input
                          type="radio"
                          name="experience"
                          value={lvl}
                          checked={formData.experience === lvl}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        {lvl}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Github Link */}
                <div className="space-y-1.5">
                  <label htmlFor="github" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Github className="h-3.5 w-3.5 text-cyan-400" /> GitHub Profile URL (Optional)
                  </label>
                  <input
                    type="url"
                    id="github"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="https://github.com/username"
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5 text-cyan-400" /> Why do you want to join LFDT?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your background, what projects you want to build, or what you hope to learn..."
                    className="w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  <span>Submit Application</span>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </div>
  )
}
