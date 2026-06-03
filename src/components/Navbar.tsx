import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#processo", label: "Processo" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/40 py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <Logo className="h-10 w-10 transition-transform group-hover:rotate-12" />
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl tracking-wider">JANLEY</span>
            <span className="text-[10px] tracking-[0.3em] text-primary/80">3D STUDIO</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#encomenda">Fazer Encomenda</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass border-t border-border/40 mt-3">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 hover:text-primary py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#encomenda" onClick={() => setOpen(false)}>Fazer Encomenda</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
