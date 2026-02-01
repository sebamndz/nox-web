type Props = { title: string; subtitle?: string }

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-white/60 max-w-2xl">{subtitle}</p>}
    </div>
  )
}
