import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'


function Product() {
  const { id } = useParams()
  const { addToCart } = useCart()

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="text-center py-20">
        Producto no encontrado
      </div>
    )
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        
        {/* Imagen */}
        <div className="bg-neutral-900 rounded-xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[600px] object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold tracking-widest mb-4">
            {product.name}
          </h1>

          <p className="text-white/60 mb-8 text-lg">
            ${product.price.toLocaleString()}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-white text-black px-8 py-3 rounded-full uppercase tracking-wide text-sm hover:opacity-90 transition"
          >
            Añadir al carrito
          </button>
        </div>

      </div>
    </section>
  )
}

export default Product
