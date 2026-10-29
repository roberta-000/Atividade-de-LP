import type { ReactNode } from "react";

export default function ProdutoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section>
      <h1>Área de Produtos</h1>
      {children}
    </section>
  );
}
