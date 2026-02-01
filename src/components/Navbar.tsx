import { Link, NavLink } from "react-router-dom"
import Container from "./Container"
import { useCart } from "../context/CartContext"

export default function Navbar() {
  const { items } = useCart()
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-xs uppercase tracking-[0.25em] transition ${
      isActive ? "text-white" : "text-white/60 hover:text-white"
    }`

  return (
    <header className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <Container className="py-4 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-[0.35em] uppercase">
          NOX
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/shop" className={linkClass}>Shop</NavLink>
          <NavLink to="/cart" className={linkClass}>
            Cart {totalItems > 0 && `(${totalItems})`}
          </NavLink>
        </nav>

        <Link
          to="/shop"
          className="text-xs uppercase tracking-[0.25em] border border-white/15 rounded-full px-4 py-2 hover:border-white/30 hover:bg-white/5 transition"
        >
          Explore
        </Link>
      </Container>
    </header>
  )
}
