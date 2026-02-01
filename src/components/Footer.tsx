import { Link } from "react-router-dom"
import Container from "./Container"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-black">
      <Container className="py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-lg font-bold tracking-[0.35em] uppercase">
              NOX
            </Link>

            <p className="mt-4 text-white/60 max-w-md">
              Minimal essentials designed with quiet confidence. Curated drops, clean
              silhouettes, premium feel.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition"
              >
                Instagram
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition"
              >
                TikTok
              </a>
              <a
                href="#"
                className="rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70 hover:text-white hover:border-white/30 hover:bg-white/5 transition"
              >
                Support
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Shop
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link className="text-white/70 hover:text-white transition" to="/shop">All products</Link></li>
              <li><Link className="text-white/70 hover:text-white transition" to="/shop">New drop</Link></li>
              <li><Link className="text-white/70 hover:text-white transition" to="/shop">Essentials</Link></li>
              <li><Link className="text-white/70 hover:text-white transition" to="/cart">Cart</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Help
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="text-white/70 hover:text-white transition" href="#">Shipping</a></li>
              <li><a className="text-white/70 hover:text-white transition" href="#">Returns</a></li>
              <li><a className="text-white/70 hover:text-white transition" href="#">Size guide</a></li>
              <li><a className="text-white/70 hover:text-white transition" href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p className="text-xs text-white/50">
            © {year} NOX. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.25em] text-white/50">
            <a className="hover:text-white transition" href="#">Privacy</a>
            <a className="hover:text-white transition" href="#">Terms</a>
            <a className="hover:text-white transition" href="#">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
