import { atualizarProduto } from "@/app/lib/actions";

type ProdutoForm = {
  id: number;
  descricao: string;
  preco: number;
};

export default function UpdateForm({
  produto,
}: {
  produto: ProdutoForm;
}) {

    const atualizarProdutoComId = atualizarProduto.bind(
  null,
  produto.id
);

  return (
    <form action={atualizarProdutoComId}>
      <div>
        <label htmlFor="descricao">Descrição:</label>
        <input
          type="text"
          id="descricao"
          name="descricao"
          defaultValue={produto.descricao}
          maxLength={50}
          required
        />
      </div>

      <div>
        <label htmlFor="preco">Preço:</label>
        <input
          type="number"
          id="preco"
          name="preco"
          defaultValue={produto.preco}
          min="0"
          step="0.01"
          required
        />
      </div>

      <button type="submit">Salvar alterações</button>
    </form>
  );
}
