import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, increment, decrement, remove, clear, subtotal, totalItems } = useCart()

  if (items.length === 0) {
    return (
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <h1 className="text-3xl font-bold tracking-widest mb-3">CART</h1>
          <p className="text-white/60 mb-8">Your cart is empty.</p>

          <Link
            to="/shop"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-wider bg-white text-black hover:opacity-90 transition active:scale-[0.98]"
          >
            Go to shop
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-widest">CART</h1>
          <p className="mt-2 text-white/60 text-sm uppercase tracking-wider">
            {totalItems} item{totalItems === 1 ? '' : 's'}
          </p>
        </div>

        <button
          onClick={clear}
          className="self-start md:self-auto text-xs uppercase tracking-wider border border-white/15 rounded-full px-4 py-2 hover:border-white/30 hover:bg-white/5 transition"
        >
          Clear cart
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-5">
          {items.map(({ product, quantity }) => (
            <article
              key={product.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 md:p-6 flex gap-5"
            >
              {/* Image */}
              <div className="w-24 md:w-28 lg:w-32 shrink-0">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-wider text-white/60">NOX</p>
                    <h3 className="mt-1 font-semibold truncate">{product.name}</h3>
                    <p className="mt-2 text-white/70 text-sm">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>

                  <button
                    onClick={() => remove(product.id)}
                    className="text-xs uppercase tracking-wider text-white/60 hover:text-red-400 transition"
                    aria-label="Remove item"
                  >
                    Remove
                  </button>
                </div>

                {/* Qty controls */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-black/20">
                    <button
                      onClick={() => decrement(product.id)}
                      className="h-10 w-10 grid place-items-center text-white/80 hover:bg-white/5 transition rounded-full"
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span className="px-3 text-sm text-white/80 tabular-nums">
                      {quantity}
                    </span>

                    <button
                      onClick={() => increment(product.id)}
                      className="h-10 w-10 grid place-items-center text-white/80 hover:bg-white/5 transition rounded-full"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-white/80 font-semibold tabular-nums">
                    ${(product.price * quantity).toLocaleString()}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Summary */}
        <aside className="lg:col-span-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sticky top-24">
            <h2 className="text-sm uppercase tracking-widest text-white/70">Summary</h2>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center justify-between text-white/70">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotal.toLocaleString()}</span>
              </div>

              <div className="flex items-center justify-between text-white/70">
                <span>Shipping</span>
                <span className="tabular-nums">Calculated at checkout</span>
              </div>

              <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-white/80 font-semibold">Total</span>
                <span className="text-white font-bold tabular-nums">
                  ${subtotal.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              className="mt-8 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-wider bg-white text-black hover:opacity-90 transition active:scale-[0.98]"
              onClick={() => alert('Next: Checkout flow')}
            >
              Checkout
            </button>

            <Link
              to="/shop"
              className="mt-3 w-full inline-flex items-center justify-center rounded-full px-6 py-3 text-sm uppercase tracking-wider border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition"
            >
              Continue shopping
            </Link>

            <p className="mt-6 text-xs text-white/50">
              Tip: Keep it minimal. Drop-based releases. Quiet luxury.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
