const categories = [
  "Camisetas",
  "Calças",
  "Tênis",
  "Acessórios",
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <h2 className="mb-8 text-3xl font-bold">
        Categorias
      </h2>

      <div className="grid gap-6 md:grid-cols-4">

        {categories.map((category) => (
          <div
            key={category}
            className="rounded-xl border p-10 text-center transition hover:shadow-lg"
          >
            {category}
          </div>
        ))}

      </div>

    </section>
  );
}