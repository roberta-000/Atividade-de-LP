
"use server";

import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function atualizarProduto(
  id: number,
  formData: FormData
) {
  const descricao = formData.get("descricao")?.toString().trim();
  const precoTexto = formData.get("preco")?.toString();
  const preco = Number(precoTexto);

  if (!descricao || descricao.length > 50) {
    throw new Error("Informe uma descriÃ§Ã£o de atÃ© 50 caracteres.");
  }

  if (
    precoTexto == null ||
    precoTexto.trim() === "" ||
    !Number.isFinite(preco) ||
    preco < 0
  ) {
    throw new Error("Informe um preÃ§o vÃ¡lido.");
  }

  await prisma.produto.update({
    where: { id },
    data: {
      descricao,
      preco,
    },
  });

  revalidatePath("/");
  redirect("/");
}

export async function excluirProduto(id: number) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID do produto invÃ¡lido.");
  }

  await prisma.produto.delete({
    where: { id },
  });

  revalidatePath("/");
  redirect("/");
}

