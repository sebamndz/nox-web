import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items } = useCart()

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  )

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      {items.length === 0 ? (
        <p className="text-white/60">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {items.map(item => (
              <li
                key={item.product.id}
                className="flex justify-between border-b border-white/10 pb-4"
              >
                <span>
                  {item.product.name} × {item.quantity}
                </span>
                <span>${item.product.price * item.quantity}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 text-xl font-semibold">
            Total: ${total}
          </div>
        </>
      )}
    </section>
  )
}
