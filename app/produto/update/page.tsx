import Link from "next/link";

export default function UpdatePage() {
  return (
    <main>
      <h2>Alterar produto</h2>

      <p>
        Para alterar um produto, escolha-o na lista da página inicial.
      </p>

      <Link href="/">Voltar para a lista de produtos</Link>
    </main>
  );
}
