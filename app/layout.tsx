import "./globals.css";
import Providers from "./providers";
import CartDrawer from "@/components/cart/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          <CartDrawer />
          {children}
        </Providers>
      </body>
    </html>
  );
}