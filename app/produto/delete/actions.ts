"use server";

import { excluirProduto } from "@/app/lib/actions";

export async function excluirProdutoForm(formData: FormData) {
  const idTexto = formData.get("id")?.toString();
  const id = Number(idTexto);

  if (!idTexto || !Number.isInteger(id) || id <= 0) {
    throw new Error("ID do produto inválido.");
  }

  await excluirProduto(id);
}
