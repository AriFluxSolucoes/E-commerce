export default function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl items-center justify-between px-6 py-24">

      <div className="max-w-xl">

        <p className="text-blue-600 font-semibold">
          Nova coleção
        </p>

        <h1 className="mt-4 text-6xl font-bold">
          Produtos que fazem a diferença.
        </h1>

        <p className="mt-6 text-gray-600">
          Desenvolvido com Next.js e integrado à Nuvemshop.
        </p>

        <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white">
          Comprar agora
        </button>

      </div>

    </section>
  );
}