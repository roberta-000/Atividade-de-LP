
import { cadastrarProduto } from "./actions";
import Link from "next/link";

export default function CreateProduto() {
  return (
    <main>
      <h2>Cadastrar Produto</h2>

      <form action={cadastrarProduto}>
        <div>
          <label htmlFor="descricao">Descrição:</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
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
            step="0.01"
            min="0"
            required
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>

      <p>
        <Link href="/">Voltar para a lista</Link>
      </p>
    </main>
  );
}
