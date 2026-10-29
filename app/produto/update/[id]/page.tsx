import Link from "next/link";
import { buscarProduto } from "@/app/lib/queries";
import UpdateForm from "@/app/produto/update/UpdateForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const produto = await buscarProduto(Number(id));

  if (!produto) {
    return (
      <div>
        <h2>Produto não encontrado.</h2>
        <Link href="/">Voltar</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Alterar produto com ID = {id}</h2>

      <UpdateForm
        produto={{
          id: produto.id,
          descricao: produto.descricao,
          preco: Number(produto.preco),
        }}
      />

      <p>
        <Link href="/">Voltar</Link>
      </p>
    </div>
  );
}
