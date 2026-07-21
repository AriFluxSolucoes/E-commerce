import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-24 bg-black text-white">

      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Empresa */}

          <div>

            <h2 className="text-3xl font-black">
              Commerce
            </h2>

            <p className="mt-5 text-sm leading-7 text-neutral-400">

              Tecnologia, inovação e qualidade para oferecer a melhor
              experiência em compras online.

            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl bg-neutral-900 p-3 transition hover:bg-amber-400 hover:text-black"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-neutral-900 p-3 transition hover:bg-amber-400 hover:text-black"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="#"
                className="rounded-xl bg-neutral-900 p-3 transition hover:bg-amber-400 hover:text-black"
              >
                <FaLinkedinIn size={20} />
              </a>

            </div>

          </div>

          {/* Institucional */}

          <div>

            <h3 className="text-lg font-bold">
              Institucional
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-neutral-400">

              <Link href="/">
                Sobre nós
              </Link>

              <Link href="/">
                Política de Privacidade
              </Link>

              <Link href="/">
                Termos de Uso
              </Link>

              <Link href="/">
                Trocas e Devoluções
              </Link>

            </div>

          </div>

          {/* Categorias */}

          <div>

            <h3 className="text-lg font-bold">
              Categorias
            </h3>

            <div className="mt-6 flex flex-col gap-3 text-neutral-400">

              <Link href="/">
                Notebooks
              </Link>

              <Link href="/">
                Smartphones
              </Link>

              <Link href="/">
                Áudio
              </Link>

              <Link href="/">
                Smartwatch
              </Link>

            </div>

          </div>

          {/* Contato */}

          <div>

            <h3 className="text-lg font-bold">
              Contato
            </h3>

            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-3">

                <Phone
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-neutral-400">

                  (11) 99999-9999

                </span>

              </div>

              <div className="flex items-center gap-3">

                <Mail
                  size={18}
                  className="text-amber-400"
                />

                <span className="text-neutral-400">

                  contato@commerce.com

                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 text-amber-400"
                />

                <span className="text-neutral-400">

                  São Paulo - Brasil

                </span>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-14 border-t border-neutral-800 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-sm text-neutral-500">

              © 2026 Commerce. Todos os direitos reservados.

            </p>

            <div className="flex gap-4 text-sm text-neutral-500">

              <span>Visa</span>

              <span>Mastercard</span>

              <span>Pix</span>

              <span>PayPal</span>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}