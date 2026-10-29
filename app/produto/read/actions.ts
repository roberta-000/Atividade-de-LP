"use server";

import prisma from "@/app/lib/prisma";

export async function getProdutos() {
  return await prisma.produto.findMany({
    orderBy: {
      id: "asc",
    },
  });
}
