import logoAsset from "@/assets/janley-logo.png.asset.json";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logoAsset.url}
      alt="JANLEY STORE - Impressão 3D"
      className={`h-12 w-auto ${className}`}
    />
  );
}
