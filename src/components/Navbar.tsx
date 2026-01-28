import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Navbar() {
  const { items } = useCart()

  const totalItems = items.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <header className="border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-widest">
          NOX
        </Link>

        <ul className="flex gap-6 text-sm uppercase items-center">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/cart" className="relative">
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
