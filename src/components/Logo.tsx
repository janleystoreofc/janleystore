import janleyLogo from "@/assets/janley-logo.png.asset.json";

export function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <img
      src={janleyLogo.url}
      alt="JANLEY STORE"
      className={`${className} object-contain drop-shadow-[0_0_12px_oklch(0.78_0.13_75/0.4)]`}
    />
  );
}
