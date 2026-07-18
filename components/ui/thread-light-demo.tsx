import { AsciiArt } from "@/components/ui/thread-light"

export default function AsciiArtDemo() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 shadow-glow">
      <AsciiArt className="h-full w-full" />
    </div>
  )
}
