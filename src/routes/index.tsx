import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Catalog } from "@/components/Catalog";
import { OrderForm } from "@/components/OrderForm";
import { Process } from "@/components/Process";

import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsappFloat } from "@/components/WhatsappFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JANLEY 3D — Impressão 3D Premium em Portugal" },
      {
        name: "description",
        content:
          "Impressão 3D de alta precisão em Portugal. Decoração, organização, gaming, projetos personalizados e brindes corporativos com acabamento premium.",
      },
      { property: "og:title", content: "JANLEY 3D — Impressão 3D Premium" },
      {
        property: "og:description",
        content: "Produção personalizada com precisão milimétrica. Envios para todo Portugal.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="hairline max-w-5xl mx-auto" />
        <Catalog />
        <OrderForm />
        <Process />
        <FAQ />
        <Contact />
        <About />
      </main>
      <Footer />
      <WhatsappFloat />
      <Toaster richColors theme="dark" position="bottom-center" />
    </div>
  );
}
