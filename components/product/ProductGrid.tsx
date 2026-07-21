"use client";

import ProductCard from "./ProductCard";
import { useProducts } from "@/hooks/useProducts";

export default function ProductGrid() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar.</p>;
  }

  return (
    <section>
      <div className="mb-10 flex items-end justify-between">

        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            DESTAQUES
          </span>

          <h2 className="mt-2 text-4xl font-black">
            Produtos em destaque
          </h2>

          <p className="mt-2 text-neutral-500">
            Os produtos mais procurados pelos nossos clientes.
          </p>

        </div>

        <span className="rounded-full bg-neutral-100 px-5 py-2 text-sm font-medium">
          {data?.length} produtos
        </span>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}