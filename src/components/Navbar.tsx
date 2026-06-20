import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, Instagram, Facebook, Phone } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#processo", label: "Processo" },
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
          <Logo />
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
            <a href="#encomenda">Redes sociais</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-accent p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span>{open ? <X /> : <Menu />}</span>
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
              <a href="#encomenda" onClick={() => setOpen(false)}>Redes sociais</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
