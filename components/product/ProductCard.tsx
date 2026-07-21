"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart();

  return (
    <Link href={`/produto/${product.id}`}>
      <article
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-neutral-200
          bg-white
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-2
          hover:shadow-2xl
        "
      >
        {/* Imagem */}

        <div className="relative h-72 overflow-hidden bg-neutral-100">

          <span
            className="
              absolute
              left-4
              top-4
              z-20
              rounded-full
              bg-amber-400
              px-3
              py-1
              text-xs
              font-bold
              text-black
            "
          >
            NOVO
          </span>

          <Image
            src={product.image}
            alt={product.name}
            fill
            className="
              object-contain
              p-8
              transition
              duration-500
              group-hover:scale-110
              group-hover:rotate-2
            "
          />

        </div>

        {/* Conteúdo */}

        <div className="space-y-4 p-6">

          <span className="text-sm font-medium uppercase tracking-wide text-neutral-500">
            {product.category}
          </span>

          <h3 className="line-clamp-2 text-lg font-bold">
            {product.name}
          </h3>

          <div className="flex items-center gap-1">

            {[1, 2, 3, 4].map((star) => (
              <Star
                key={star}
                size={16}
                fill="#f59e0b"
                className="text-amber-500"
              />
            ))}

            <Star
              size={16}
              className="text-neutral-300"
            />

            <span className="ml-2 text-xs text-neutral-500">
              (124)
            </span>

          </div>

          <p className="line-clamp-2 text-sm text-neutral-500">
            {product.description}
          </p>

          <div>

            <div className="text-3xl font-black">
              R$ {product.price}
            </div>

            <span className="text-sm text-neutral-500">
              ou 12x sem juros
            </span>

          </div>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product);
            }}
            className="
              flex
              w-full
              items-center
              justify-center
              gap-2
              rounded-2xl
              bg-black
              py-3
              font-semibold
              text-white
              transition
              hover:bg-amber-400
              hover:text-black
            "
          >
            <ShoppingCart size={18} />

            Comprar

          </button>

        </div>

      </article>
    </Link>
  );
}