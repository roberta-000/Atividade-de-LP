import prisma from "@/app/lib/prisma";
import ListaProdutos from "@/app/produto/read/ListaProdutos";

export default async function Home() {
  const produtosDoBanco = await prisma.produto.findMany({
    orderBy: {
      id: "asc",
    },
  });

  const produtos = produtosDoBanco.map((produto) => ({
    ...produto,
    preco: Number(produto.preco),
  }));

  return (
    <main>
      <h1>CRUD de Produtos</h1>
      <p>Bem-vindo ao sistema de cadastro de produtos!</p>

      <h2>Produtos cadastrados</h2>

      <ListaProdutos produtos={produtos} />
    </main>
  );
}
