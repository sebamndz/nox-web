import { Link } from "react-router-dom"
import type { Product } from "../types/Product"

type Props = { product: Product }

export default function ProductCard({ product }: Props) {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
          />
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">NOX</p>
          <h3 className="mt-1 font-semibold truncate">{product.name}</h3>
        </div>
        <p className="text-white/70 tabular-nums">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  )
}
