import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-black via-neutral-900 to-neutral-800">

      {/* Efeito de luz */}

      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative grid items-center gap-12 px-10 py-16 lg:grid-cols-2">

        {/* Texto */}

        <div>

          <span className="inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm font-semibold tracking-wide text-amber-300">
            ✨ NOVA COLEÇÃO 2026
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-6xl">

            Tecnologia
            <br />

            <span className="text-amber-400">
              Premium
            </span>

            <br />

            para seu dia.

          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">

            Descubra notebooks, smartphones, periféricos e acessórios
            selecionados para entregar desempenho, qualidade e o melhor
            custo-benefício.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/produtos"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-7 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-amber-300"
            >
              Comprar agora

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/categorias"
              className="rounded-2xl border border-neutral-600 px-7 py-4 font-semibold text-white transition hover:border-white hover:bg-white/5"
            >
              Explorar categorias
            </Link>

          </div>

          {/* Estatísticas */}

          <div className="mt-14 flex gap-10">

            <div>

              <h3 className="text-3xl font-bold text-white">
                +5 mil
              </h3>

              <span className="text-neutral-400">
                Clientes
              </span>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                +800
              </h3>

              <span className="text-neutral-400">
                Produtos
              </span>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                ★ 4.9
              </h3>

              <span className="text-neutral-400">
                Avaliação
              </span>

            </div>

          </div>

        </div>

        {/* Imagem */}

        <div className="relative flex justify-center">

          <div className="absolute h-80 w-80 rounded-full bg-amber-400/20 blur-3xl" />

          <Image
            src="/hero/hero.webp"
            alt="Tecnologia Premium"
            width={700}
            height={700}
            priority
            className="relative z-10 transition duration-700 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}