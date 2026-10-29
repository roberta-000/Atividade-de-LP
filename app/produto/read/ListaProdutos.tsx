import type { Produto } from "@/app/types/produto";
import Link from "next/link";

export default function ListaProdutos({
  produtos,
}: {
  produtos: Produto[];
}) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {produtos.map((produto) => (
          <tr key={produto.id}>
            <td>{produto.id}</td>
            <td>{produto.descricao}</td>
            <td>
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </td>
            <td>
              <Link href={`/produto/update/${produto.id}`}>
                Alterar
              </Link>
              {" | "}
              <Link href={`/produto/delete?id=${produto.id}`}>
                Excluir
              </Link>
            </td>
          </tr>
        ))}

        {produtos.length === 0 && (
          <tr>
            <td colSpan={4}>Nenhum produto cadastrado.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
