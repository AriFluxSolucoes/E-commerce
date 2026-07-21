"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartButton() {
  const {
    cart,
    openCart,
  } = useCart();

  const quantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <button
      onClick={openCart}
      className="
        relative
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        transition-all
        duration-300
        hover:bg-white/10
      "
    >
      <ShoppingCart
        size={22}
        className="text-white"
      />

      {quantity > 0 && (
        <span
          className="
            absolute
            -right-1
            -top-1
            flex
            h-5
            min-w-5
            items-center
            justify-center
            rounded-full
            bg-amber-500
            px-1
            text-[11px]
            font-bold
            text-black
            shadow-lg
          "
        >
          {quantity}
        </span>
      )}
    </button>
  );
}