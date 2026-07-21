import Link from "next/link";

import {
  Heart,
  Search,
  User,
} from "lucide-react";

import CartButton from "../cart/CartButton";
import Container from "../ui/Container";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Produtos",
    href: "/produtos",
  },
  {
    title: "Categorias",
    href: "/categorias",
  },
  {
    title: "Contato",
    href: "/contato",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/95 backdrop-blur">

      <Container>

        {/* Barra superior */}

        <div className="flex h-20 items-center gap-8">

          {/* Logo */}

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-white"
          >
            Commerce
          </Link>

          {/* Pesquisa */}

          <div className="hidden flex-1 md:flex">

            <div className="relative w-full">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
              />

              <input
                type="text"
                placeholder="Pesquisar produtos..."
                className="w-full rounded-full border border-neutral-700 bg-neutral-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-white"
              />

            </div>

          </div>

          {/* Ícones */}

          <div className="flex items-center gap-6 text-white">

            <button className="transition hover:scale-110">
              <Heart size={22} />
            </button>

            <button className="transition hover:scale-110">
              <User size={22} />
            </button>

            <CartButton />

          </div>

        </div>

      </Container>

      {/* Menu */}

      <nav className="border-t border-neutral-800">

        <Container>

          <ul className="flex h-14 items-center justify-center gap-10">

            {links.map((link) => (

              <li key={link.title}>

                <Link
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 transition hover:text-white"
                >
                  {link.title}
                </Link>

              </li>

            ))}

          </ul>

        </Container>

      </nav>

    </header>
  );
}