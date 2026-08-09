"use client"

import React from "react"
import dynamic from "next/dynamic"

const HeroGradient = dynamic(() => import("@/components/hero-gradient"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-slate-950" />,
})

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <HeroGradient />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.1),rgba(2,6,23,0.8)_60%,rgba(2,6,23,0.95)_100%)]" />
    </div>
  )
}
