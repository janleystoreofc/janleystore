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
              className="font-display text-xs uppercase tracking-[0.2em] font-semibold text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-[-6px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="hero" size="sm">Redes sociais</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuItem asChild>
                <a href="https://instagram.com/janleystoreofc" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  <span>@janleystoreofc</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="https://facebook.com/janleystorebr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Facebook className="h-4 w-4" />
                  <span>@janleystorebr</span>
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="tel:+5511999999999" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Telefone</span>
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
            <div className="flex flex-col gap-2">
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Redes sociais</span>
              <a href="https://instagram.com/janleystoreofc" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center gap-2 text-foreground/80 hover:text-primary py-2">
                <Instagram className="h-4 w-4" />
                <span>@janleystoreofc</span>
              </a>
              <a href="https://facebook.com/janleystorebr" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center gap-2 text-foreground/80 hover:text-primary py-2">
                <Facebook className="h-4 w-4" />
                <span>@janleystorebr</span>
              </a>
              <a href="tel:+5511999999999" onClick={() => setOpen(false)} className="flex items-center gap-2 text-foreground/80 hover:text-primary py-2">
                <Phone className="h-4 w-4" />
                <span>Telefone</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
