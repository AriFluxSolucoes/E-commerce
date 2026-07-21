"use client";

import { X } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export default function CartDrawer() {

    const {
        cart,
        total,
        isCartOpen,
        closeCart,
    } = useCart();

    if (!isCartOpen) return null;

    return (

        <>
            <div
                onClick={closeCart}
                className="fixed inset-0 z-40 bg-black/50"
            />

            <aside
                className="
                    fixed
                    right-0
                    top-0
                    z-50
                    flex
                    h-screen
                    w-105
                    flex-col
                    bg-white
                    shadow-2xl
                "
            >

                <div className="flex items-center justify-between border-b p-6">

                    <h2 className="text-2xl font-bold">

                        Seu Carrinho

                    </h2>

                    <button onClick={closeCart}>

                        <X />

                    </button>

                </div>

                <div className="flex-1 overflow-y-auto p-6">

                    {cart.length === 0 ? (

                        <p>Carrinho vazio.</p>

                    ) : (

                        cart.map(item => (

                            <div
                                key={item.id}
                                className="mb-6 border-b pb-5"
                            >

                                <h3 className="font-semibold">

                                    {item.name}

                                </h3>

                                <p>

                                    R$ {item.price}

                                </p>

                                <p>

                                    Quantidade: {item.quantity}

                                </p>

                            </div>

                        ))

                    )}

                </div>

                <div className="border-t p-6">

                    <div className="mb-5 flex justify-between text-xl font-bold">

                        <span>Total</span>

                        <span>

                            R$ {total.toFixed(2)}

                        </span>

                    </div>

                    <button
                        className="
                            w-full
                            rounded-xl
                            bg-black
                            py-4
                            text-white
                        "
                    >

                        Finalizar Compra

                    </button>

                </div>

            </aside>

        </>

    );

}