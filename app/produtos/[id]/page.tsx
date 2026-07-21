"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import { useProduct } from "@/hooks/useProduct";
import { useCart } from "@/hooks/useCart";
import { ShoppingCart } from "lucide-react";

export default function ProductPage() {
  const params = useParams();

  const { data, isLoading } = useProduct(params.id as string);

  const { addToCart } = useCart();

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!data) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <main className="mx-auto max-w-7xl p-8">

      <div className="grid gap-12 lg:grid-cols-2">

        <div className="relative h-150 rounded-3xl bg-neutral-100">

          <Image
            src={data.image}
            alt={data.name}
            fill
            className="object-contain p-10"
          />

        </div>

        <div>

          <span className="text-neutral-500">

            {data.category}

          </span>

          <h1 className="mt-4 text-5xl font-black">

            {data.name}

          </h1>

          <p className="mt-8 text-lg text-neutral-600">

            {data.description}

          </p>

          <div className="mt-10 text-5xl font-black">

            R$ {data.price}

          </div>

          <button
            onClick={() => addToCart(data)}
            className="
                mt-10
                flex
                items-center
                gap-3
                rounded-2xl
                bg-black
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:bg-amber-400
                hover:text-black
            "
            >
            <ShoppingCart size={20} />

            Adicionar ao carrinho
          </button>

        </div>

      </div>

    </main>
  );
}