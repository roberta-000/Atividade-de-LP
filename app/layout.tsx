import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "ProdutoHub | Gestão de Produtos",
  description: "Sistema de gerenciamento e cadastro de produtos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="brand-icon">P</span>
            <span>
              <strong>ProdutoHub</strong>
              <small>GESTÃO DE PRODUTOS</small>
            </span>
          </Link>

          <nav className="main-nav" aria-label="Navegação principal">
            <Link href="/">Início</Link>
            <Link href="/produto/read">Consultar</Link>
            <Link href="/produto/create">Cadastrar</Link>
            <Link href="/produto/update">Alterar</Link>
            <Link href="/produto/delete">Excluir</Link>
          </nav>
        </header>

        <div className="page-container">{children}</div>

        <footer className="site-footer">
          ProdutoHub · Sistema de gerenciamento de produtos
        </footer>
      </body>
    </html>
  );
}
