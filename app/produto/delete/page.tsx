import Link from "next/link";
import { excluirProdutoForm } from "./actions";

export default async function DeletePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;
  const produtoId = Number(id);

  if (!id || !Number.isInteger(produtoId) || produtoId <= 0) {
    return (
      <main>
        <h2>ID de produto inválido.</h2>
        <Link href="/">Voltar para a lista</Link>
      </main>
    );
  }

  return (
    <main>
      <h2>Excluir produto</h2>

      <p>
        Tem certeza de que deseja excluir o produto de ID {produtoId}?
      </p>

      <form action={excluirProdutoForm}>
        <input type="hidden" name="id" value={produtoId} />
        <button type="submit">Confirmar exclusão</button>
      </form>

      <p>
        <Link href="/">Cancelar e voltar</Link>
      </p>
    </main>
  );
}
