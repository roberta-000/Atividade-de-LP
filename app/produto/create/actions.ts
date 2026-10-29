
"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function cadastrarProduto(formData: FormData) {
  const descricao = formData.get("descricao")?.toString().trim();
  const precoTexto = formData.get("preco")?.toString();
  const preco = Number(precoTexto);

  if (!descricao || descricao.length > 50) {
    throw new Error("A descriÃ§Ã£o deve ter entre 1 e 50 caracteres.");
  }

  if (
    precoTexto == null ||
    precoTexto.trim() === "" ||
    !Number.isFinite(preco) ||
    preco < 0
  ) {
    throw new Error("Informe um preÃ§o vÃ¡lido.");
  }

  await prisma.produto.create({
    data: {
      descricao,
      preco,
    },
  });

  revalidatePath("/");
  redirect("/");
}

