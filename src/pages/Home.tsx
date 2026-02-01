import { Link } from "react-router-dom"
import Container from "../components/Container"
import Button from "../components/Button"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"
const featured = products.slice(0, 3)

export default function Home() {
  return (
    <main>
      {/* HERO — Editorial image */}
      <section className="relative min-h-[88vh] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img 
            src="https://i.ibb.co/Z1dS1LVD/Chat-GPT-Image-31-ene-2026-08-58-48-p-m.png" 
            alt="Chat GPT Image 31 ene 2026 08 58 48 p m" 
            className="h-full w-full object-cover object-center"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="h-full w-full object-cover object-[center_20%]">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/0" /></div>
          <div className="h-full w-full object-cover brightness-90 contrast-125 saturate-90"
          />
        </div>

        {/* Content */}
        <Container className="relative z-10 pb-16 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-white/70">
              NOX — editorial drop
            </p>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight">
              Quiet luxury.
              <span className="block text-white/70">Dark essentials.</span>
            </h1>

            <p className="mt-6 text-white/70 text-base md:text-lg max-w-2xl">
              Clean silhouettes, premium feel, and a minimal aesthetic designed to
              stand out without being loud.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/shop">
                <Button>Shop now</Button>
              </Link>

              <Link to="/shop">
                <Button variant="ghost">View the drop</Button>
              </Link>
            </div>

            {/* Editorial meta */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Materials
                </p>
                <p className="mt-2 text-sm text-white/80">Premium texture</p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-black/30 backdrop-blur px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Fit
                </p>
                <p className="mt-2 text-sm text-white/80">Modern silhouette</p>
              </div>

              <div className="hidden md:block rounded-2xl border border-white/15 bg-black/30 backdrop-blur px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.35em] text-white/60">
                  Drop
                </p>
                <p className="mt-2 text-sm text-white/80">Limited release</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FEATURED */}
      <section className="border-t border-white/10">
        <Container className="py-16">
          <header className="flex items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Featured
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-widest">
                Selected pieces
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-xs uppercase tracking-[0.25em] text-white/60 hover:text-white transition"
            >
              View all →
            </Link>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Container>
      </section>

      {/* COLLECTION / EDITORIAL BANNER */}
      <section className="border-t border-white/10">
        <Container className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 md:p-14">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  The Drop
                </p>
                <h3 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                  Monochrome essentials
                </h3>
                <p className="mt-5 text-white/60 max-w-lg">
                  Quiet luxury streetwear. Clean details. Minimal branding. Built
                  for presence without noise.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/shop">
                    <Button>Explore drop</Button>
                  </Link>
                  <Link to="/shop">
                    <Button variant="ghost">Shop basics</Button>
                  </Link>
                </div>
              </div>

              {/* Right visual block (no images required) */}
              <div className="relative min-h-[260px] lg:min-h-full bg-black">
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/10" />
                  <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
                </div>
                <div className="relative h-full p-10 md:p-14 flex items-end">
                  <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                    Limited run • Restock soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/10">
        <Container className="py-16">
          <header className="mb-10">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Principles
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-widest">
              Built with intention
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Minimal design", desc: "Clean silhouettes, quiet branding, refined lines." },
              { title: "Premium feel", desc: "Focus on texture, weight, and finish." },
              { title: "Limited drops", desc: "Curated releases that keep the brand exclusive." }
            ].map(card => (
              <div
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  NOX
                </p>
                <h3 className="mt-4 text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-white/60">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* NEWSLETTER */}
      <section className="border-t border-white/10">
        <Container className="py-16">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-14">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
              <div className="max-w-2xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Updates
                </p>
                <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                  Get drop alerts
                </h2>
                <p className="mt-4 text-white/60">
                  Receive early access, restock notices, and limited release updates.
                </p>
              </div>

              <form
                className="w-full lg:w-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Email address"
                    className="h-12 w-full sm:w-80 rounded-full border border-white/15 bg-black/40 px-5 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/30"
                  />
                  <Button type="submit">Subscribe</Button>
                </div>
                <p className="mt-3 text-xs text-white/50">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
