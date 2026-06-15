export function Footer() {
  return (
    <footer className="container mx-auto px-4 lg:px-6 py-6 lg:py-10 border-t border-border/40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs lg:text-sm text-muted-foreground">
        <span>© {new Date().getFullYear()} JANLEY 3D · Todos os direitos reservados</span>
        <div className="text-[10px] lg:text-xs tracking-[0.2em] uppercase text-primary/80">
          Crafted with precision in Portugal
        </div>
      </div>
    </footer>
  );
}
