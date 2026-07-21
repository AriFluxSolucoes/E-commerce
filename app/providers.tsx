"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "@/context/CartContext";
import { ReactNode, useState } from "react";
import { Toaster } from "sonner";

interface Props {
  children: ReactNode;
}

export default function Providers({ children }: Props) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Toaster richColors position="top-right" />
        {children}
      </CartProvider>
    </QueryClientProvider>
  );
}