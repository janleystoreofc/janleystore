import { Mail, MapPin, MessageCircle, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";

const WA = "351900000000";

export function Contact() {
  return (
    <section id="contacto" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">— Contacto</div>
            <h2 className="font-display text-5xl md:text-6xl mb-8 leading-[1.05]">
              Fale&nbsp;<span className="text-gradient-gold italic">conosco</span>
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md">
              Estamos disponíveis para esclarecer dúvidas, orçamentos e projetos especiais.
            </p>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${WA}`}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all group"
              >
                <div className="h-12 w-12 rounded-lg bg-[image:var(--gradient-gold)] flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-medium">+351 900 000 000</div>
                </div>
              </a>
              <a
                href="mailto:janleystorebr@gmail.com"
                className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/40 transition-all"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-bold">Email</div>
                  <div className="font-medium">janleystorebr@gmail.com</div>
                </div>
              </a>
              <div className="glass rounded-xl p-5 flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Localização</div>
                  <div className="font-medium">Portugal · Envios para todo o país</div>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-lg glass flex items-center justify-center hover:text-primary hover:border-primary/40 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[600px]">
            <iframe
              title="Mapa Portugal"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.5%2C38.6%2C-9.0%2C38.9&layer=mapnik"
              className="w-full h-full grayscale-[80%] contrast-110 opacity-90"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <footer className="container mx-auto px-6 mt-32 pt-10 border-t border-border/40">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <span>© {new Date().getFullYear()} JANLEY 3D · Todos os direitos reservados</span>
          </div>
          <div className="text-xs tracking-[0.2em] uppercase text-primary/80">
            Crafted with precision in Portugal
          </div>
        </div>
      </footer>
    </section>
  );
}
