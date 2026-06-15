import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Upload, Send, FileBox } from "lucide-react";
import { toast } from "sonner";

const WA = "351900000000";

export function OrderForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    qty: "1",
    color: "Preto",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const fileList = files.length ? `\nFicheiros: ${files.map((f) => f.name).join(", ")}` : "";
    const text = encodeURIComponent(
      `Olá JANLEY 3D! Pedido de orçamento:\n\n` +
        `Nome: ${form.name}\nEmail: ${form.email}\nTelefone: ${form.phone}\n` +
        `Produto: ${form.product}\nQuantidade: ${form.qty}\nCor: ${form.color}\n` +
        `Observações: ${form.notes}${fileList}`,
    );
    window.open(`https://wa.me/${WA}?text=${text}`, "_blank");
    toast.success("Pedido enviado! Continuamos no WhatsApp.");
  };

  return (
    <section id="encomenda" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <div className="lg:sticky lg:top-32">
            <div className="text-xs tracking-[0.3em] uppercase text-primary mb-5">
              — Pedido de Orçamento
            </div>
            <h2 className="font-display text-5xl md:text-6xl mb-6 leading-[1.05]">
              Tem um <span className="text-gradient-gold italic">projeto</span> em mente?
            </h2>
            <p className="text-muted-foreground mb-8">
              Envie-nos os detalhes ou os seus ficheiros e receba um orçamento
              personalizado em até 48h.
            </p>
            <div className="glass rounded-xl p-6">
              <FileBox className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-display text-lg mb-2">Impressão Personalizada</h3>
              <p className="text-sm text-muted-foreground">
                Aceitamos ficheiros STL, OBJ, STEP e imagens de referência. Análise técnica
                incluída em todos os pedidos.
              </p>
            </div>
          </div>

          <form onSubmit={submit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome">
                <Input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-input/40 border-border"
                />
              </Field>
              <Field label="Email">
                <Input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-input/40 border-border"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Telefone">
                <Input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-input/40 border-border"
                />
              </Field>
              <Field label="Produto / Descrição">
                <Input
                  required
                  value={form.product}
                  onChange={(e) => setForm({ ...form, product: e.target.value })}
                  className="bg-input/40 border-border"
                />
              </Field>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Quantidade">
                <Input
                  type="number"
                  min={1}
                  value={form.qty}
                  onChange={(e) => setForm({ ...form, qty: e.target.value })}
                  className="bg-input/40 border-border"
                />
              </Field>
              <Field label="Cor">
                <select
                  value={form.color}
                  onChange={(e) => setForm({ ...form, color: e.target.value })}
                  className="bg-input/40 border border-border rounded-md h-10 px-3 text-sm w-full outline-none focus:border-primary"
                >
                  {["Preto", "Branco", "Cinza", "Dourado", "Cobre", "Outra"].map((c) => (
                    <option key={c} className="bg-background">{c}</option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Observações">
              <Textarea
                rows={4}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                className="bg-input/40 border-border resize-none"
              />
            </Field>

            <Field label="Ficheiros (STL, OBJ, STEP, imagens)">
              <label className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-8 cursor-pointer hover:border-primary/60 transition-colors bg-input/20">
                <Upload className="h-6 w-6 text-primary mb-3" />
                <span className="text-sm text-muted-foreground">
                  {files.length
                    ? `${files.length} ficheiro(s) selecionado(s)`
                    : "Clique para carregar ou arraste aqui"}
                </span>
                <input
                  type="file"
                  multiple
                  accept=".stl,.obj,.step,.stp,image/*"
                  className="hidden"
                  onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
                />
              </label>
            </Field>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              <Send className="h-4 w-4" /> Solicitar Orçamento
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              O pedido será enviado via WhatsApp para conversa direta.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground block mb-2">
        {label}
      </label>
      {children}
    </div>
  );
}
