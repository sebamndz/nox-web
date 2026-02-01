import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export default function FloatingCartButton() {
  const { items } = useCart()

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  if (totalItems === 0) return null

  return (
    <Link
      to="/cart"
      className="
        fixed bottom-5 right-5 z-50
        md:hidden
        flex items-center gap-2
        rounded-full
        bg-white text-black
        px-5 py-3
        text-sm uppercase tracking-wider
        shadow-lg shadow-black/40
        active:scale-[0.97]
        transition
      "
      aria-label="Open cart"
    >
      <span>Cart</span>

      <span className="
        inline-flex items-center justify-center
        w-6 h-6
        rounded-full
        bg-black text-white
        text-xs font-semibold
      ">
        {totalItems}
      </span>
    </Link>
  )
}
