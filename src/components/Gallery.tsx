import catDecor from "@/assets/cat-decor.jpg";
import catOrg from "@/assets/cat-org.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catGaming from "@/assets/cat-gaming.jpg";
import catOffice from "@/assets/cat-office.jpg";
import catHome from "@/assets/cat-home.jpg";
import heroImg from "@/assets/hero-printer.jpg";

const items = [
  { src: heroImg, h: "row-span-2" },
  { src: catDecor, h: "" },
  { src: catCustom, h: "" },
  { src: catOrg, h: "row-span-2" },
  { src: catGaming, h: "" },
  { src: catHome, h: "" },
  { src: catOffice, h: "" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">— Galeria</div>
          <h2 className="font-display text-5xl md:text-6xl">
            Bastidores & <span className="text-gradient-gold italic">criações</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[260px] gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-xl glass group ${it.h}`}
            >
              <img
                src={it.src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
