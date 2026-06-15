export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-bold text-xl text-foreground whitespace-nowrap ${className}`}>
      <br />
    </span>
  );
}
