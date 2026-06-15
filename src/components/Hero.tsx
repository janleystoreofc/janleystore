import { Button } from "./ui/button";
import heroImg from "@/assets/hero-printer.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center pt-16 sm:pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover opacity-50"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-12 gap-4 lg:gap-10 items-center">
        <div className="col-span-12 lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 sm:px-4 sm:py-1.5 mb-4 sm:mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] sm:text-xs tracking-[0.25em] text-accent uppercase">
              3D PREMIUM STUDIO · PORTUGAL
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-4 sm:mb-6">
            Transformando<br />
            &nbsp; &nbsp; ideias em&nbsp;<br />
            <span className="text-gradient-gold italic">Realidade</span> com<br />
            &nbsp;Impressão 3D<br />
            de alta precisão.
          </h1>

          <p className="text-sm sm:text-lg text-muted-foreground max-w-xl mb-6 sm:mb-10 leading-relaxed">
            Produção personalizada para decoração, organização, brindes, empresas, presentes, protótipos exclusivos e sob medida.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Button variant="hero" size="default" className="sm:text-base" asChild>
              <a href="#catalogo">Ver Catálogo</a>
            </Button>
            <Button variant="glass" size="default" className="sm:text-base" asChild>
              <a href="#encomenda">Fazer Encomenda</a>
            </Button>
          </div>

          <div className="mt-8 sm:mt-14 flex flex-wrap items-center gap-x-6 sm:gap-x-10 gap-y-3 sm:gap-y-4 text-xs sm:text-sm text-muted-foreground">
            <div>
              <div className="font-display text-2xl sm:text-3xl text-primary">+200</div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase">Projetos entregues</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl sm:text-3xl text-primary">3</div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase">ENVIAMOS EM ATÉ</div>
            </div>
            <div className="hidden sm:block h-10 w-px bg-border" />
            <div>
              <div className="font-display text-2xl sm:text-3xl text-primary">24h</div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase">RESPOSTAS DE ORÇAMENTO&nbsp;</div>
            </div>
          </div>
        </div>

        <div className="col-span-4 lg:col-span-5 animate-fade-up [animation-delay:200ms]">
          <div className="relative aspect-square glass rounded-2xl p-2 md:p-4 lg:p-8 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-[image:var(--gradient-gold)] opacity-[0.04]" />
            <img
              src={heroImg}
              alt="Impressora 3D em funcionamento"
              className="rounded-xl object-cover w-full h-full"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
