import Image from "next/image"

type CreativeHoverCardProps = {
  badge: string
  title: string
  hoverTitle?: string
  description: string
  imageSrc: string
  hoverImageSrc?: string
  imageAlt: string
  className?: string
  badgeClassName?: string
}

export function CreativeHoverCard({
  badge,
  title,
  hoverTitle,
  description,
  imageSrc,
  hoverImageSrc,
  imageAlt,
  className = "",
  badgeClassName = "bg-blue-400 text-white",
}: CreativeHoverCardProps) {
  const altImage = hoverImageSrc ?? imageSrc

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-t from-[#121212] to-[#020202] transition-all duration-500 ease-in-out hover:from-[#101929] hover:to-[#080808] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_45%)] ${className}`}
    >
      <div className="relative p-6">
        <div
          className={`mb-2 inline-flex w-fit rounded-full px-3 py-1 text-sm font-medium transition-all duration-500 ease-in-out group-hover:translate-y-0.5 group-hover:scale-[1.02] ${badgeClassName}`}
        >
          {badge}
        </div>

        <span className="inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:hidden">
          {title}
        </span>
        <span className="hidden inline-block pt-2 text-lg font-semibold text-slate-200 transition-all duration-500 ease-in-out group-hover:inline-block">
          {hoverTitle ?? title}
        </span>

        <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{description}</p>
      </div>

      <div className="relative overflow-hidden px-6 pb-6 transition-transform duration-500 ease-in-out group-hover:-translate-y-2">
        <Image
          className="m-0 h-[240px] w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
          src={imageSrc}
          width={700}
          height={480}
          alt={imageAlt}
        />
        <Image
          className="absolute left-6 top-0 m-0 h-[240px] w-[calc(100%-3rem)] object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          src={altImage}
          width={700}
          height={480}
          alt={`${imageAlt} on hover`}
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
