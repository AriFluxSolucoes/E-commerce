import {
  CreditCard,
  Headset,
  ShieldCheck,
  Truck,
} from "lucide-react";

const benefits = [
  {
    icon: Truck,
    title: "Frete Rápido",
    description: "Entrega para todo o Brasil.",
  },
  {
    icon: CreditCard,
    title: "Parcelamento",
    description: "Até 12x nos cartões.",
  },
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Pagamento protegido.",
  },
  {
    icon: Headset,
    title: "Suporte Especializado",
    description: "Atendimento quando precisar.",
  },
];

export default function Benefits() {
  return (
    <section>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {benefits.map((benefit) => {

          const Icon = benefit.icon;

          return (

            <article
              key={benefit.title}
              className="
                group
                rounded-2xl
                border
                border-neutral-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-amber-400
                hover:shadow-xl
              "
            >

              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-amber-100
                  transition
                  group-hover:bg-amber-400
                "
              >

                <Icon
                  size={28}
                  className="text-amber-700 group-hover:text-black"
                />

              </div>

              <h3 className="text-lg font-bold">

                {benefit.title}

              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">

                {benefit.description}

              </p>

            </article>

          );
        })}

      </div>

    </section>
  );
}