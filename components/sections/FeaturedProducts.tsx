import ProductCard from "../product/ProductCard";

const products = [
  { title: "Produto 1", price: 149 },
  { title: "Produto 2", price: 89 },
  { title: "Produto 3", price: 199 },
  { title: "Produto 4", price: 299 },
];

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-8 text-3xl font-bold">
        Produtos em destaque
      </h2>

      <div className="grid gap-8 md:grid-cols-4">

        {products.map((product) => (
          <ProductCard
            key={product.title}
            title={product.title}
            price={product.price}
          />
        ))}

      </div>

    </section>
  );
}