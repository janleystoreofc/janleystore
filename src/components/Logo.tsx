import janleyLogo from "@/assets/janley-logo.png";

export function Logo({ className = "", hideText = false }: { className?: string; hideText?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={janleyLogo}
        alt="Girassol JANLEY STORE"
        className="h-16 md:h-20 w-auto drop-shadow-md"
      />
      {!hideText && (
        <div className="flex flex-col leading-tight">
          <span className="font-display font-bold text-2xl md:text-3xl text-foreground tracking-tight">
            JANLEY STORE
          </span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Impressão 3D
          </span>
        </div>
      )}
    </div>
  );
}
