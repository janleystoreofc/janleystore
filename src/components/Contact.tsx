import { Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const WA = "351900000000";

export function Contact() {
  return (
    <section id="contacto" className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-3 lg:mb-5 font-bold">— Contacto</div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 lg:mb-8 leading-[1.05]">
              Fale&nbsp;<span className="text-gradient-gold italic">conosco</span>
            </h2>
            <p className="text-muted-foreground mb-6 lg:mb-10 max-w-md text-sm lg:text-base">
              Estamos disponíveis para esclarecer dúvidas, orçamentos e projetos especiais.
            </p>

            <div className="space-y-3 lg:space-y-4">
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl p-3 lg:p-5 flex items-center gap-3 lg:gap-4 hover:border-primary/40 transition-all group"
              >
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-muted-foreground font-bold">WhatsApp</div>
                  <div className="font-medium text-sm lg:text-base">+351 900 000 000</div>
                </div>
              </a>
              <a
                href="mailto:janleystorebr@gmail.com"
                className="glass rounded-xl p-3 lg:p-5 flex items-center gap-3 lg:gap-4 hover:border-primary/40 transition-all"
              >
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-muted-foreground font-bold">Email</div>
                  <div className="font-medium text-sm lg:text-base">janleystorebr@gmail.com</div>
                </div>
              </a>
              <div className="glass rounded-xl p-3 lg:p-5 flex items-center gap-3 lg:gap-4">
                <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </div>
                <div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-muted-foreground font-bold">Localização</div>
                  <div className="font-medium text-sm lg:text-base">Guimarães, Braga - Portugal</div>
                </div>
              </div>
              <div className="flex gap-3 pt-2 lg:pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 lg:h-11 lg:w-11 rounded-lg bg-orange-500 flex items-center justify-center hover:opacity-90 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-9 w-9 lg:h-11 lg:w-11 rounded-lg bg-orange-500 flex items-center justify-center hover:opacity-90 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4 lg:h-5 lg:w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px]">
            <iframe
              title="Mapa Guimarães"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-8.35%2C41.41%2C-8.25%2C41.47&layer=mapnik&marker=41.44%2C-8.30"
              className="w-full h-full grayscale-[80%] contrast-110 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

    </section>
  );
}
