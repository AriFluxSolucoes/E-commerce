import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    title: "Notebooks",
    image: "/categories/notebook.webp",
    href: "/categorias/notebooks",
  },
  {
    title: "Smartphones",
    image: "/categories/smartphone.webp",
    href: "/categorias/smartphones",
  },
  {
    title: "Áudio",
    image: "/categories/headphone.webp",
    href: "/categorias/audio",
  },
  {
    title: "Smartwatches",
    image: "/categories/smartwatch.webp",
    href: "/categorias/smartwatch",
  },
];

export default function Categories() {
  return (
    <section className="space-y-10">

      <div className="text-center">

        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
          CATEGORIAS
        </span>

        <h2 className="mt-3 text-4xl font-black">
          Explore por categoria
        </h2>

        <p className="mt-4 text-neutral-500">
          Encontre rapidamente o produto ideal para você.
        </p>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {categories.map((category) => (

          <Link
            key={category.title}
            href={category.href}
            className="group relative h-72 overflow-hidden rounded-3xl"
          >

            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            <div className="absolute bottom-8 left-8">

              <h3 className="text-3xl font-bold text-white">

                {category.title}

              </h3>

              <span className="mt-4 inline-flex items-center gap-2 text-amber-400">

                Explorar

                <ArrowRight size={18} />

              </span>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}