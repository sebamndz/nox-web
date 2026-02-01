import type { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost"
}

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-wider transition active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"

  const styles =
    variant === "primary"
      ? "bg-white text-black hover:opacity-90"
      : "bg-white/0 text-white border border-white/15 hover:border-white/30 hover:bg-white/5"

  return <button className={`${base} ${styles} ${className}`} {...props} />
}
