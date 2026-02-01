import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import ProductCard from "../components/ProductCard"
import { products } from "../data/products"

export default function Shop() {
  return (
    <Container className="py-16">
      <SectionTitle
        title="Shop"
        subtitle="Curated essentials. Clean silhouettes. Limited drops."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  )
}
