import { Link } from 'react-router-dom'
import type { Product } from '../types/Product'

type Props = {
  product: Product
}

function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="bg-neutral-900 rounded-xl overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[420px] object-cover transition group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-sm uppercase tracking-wide">
          {product.name}
        </h3>
        <p className="text-white/60">
          ${product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  )
}

export default ProductCard
