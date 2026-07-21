import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import ProductGrid from "@/components/product/ProductGrid";
import Container from "@/components/ui/Container";
import Categories from "@/components/home/Categories";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Container>

        <main className="space-y-16 py-8">

          <Hero />

          <Benefits />

          <Categories />

          <ProductGrid />

        </main>

      </Container>

      <Footer />

    </>
  );
}