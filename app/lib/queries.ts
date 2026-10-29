
import prisma from "@/app/lib/prisma";

export async function buscarProduto(id: number) {
  console.log("ID recebido:", id);

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error(`ID inválido: ${id}`);
  }

  return prisma.produto.findUnique({
    where: { id },
  });
}
