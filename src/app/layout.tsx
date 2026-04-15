import type { Metadata } from "next";
import "@ifood/ifdl-fonts";
import "@ifood/ifdl-css-themes";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal do Parceiro - Protótipo",
  description: "Protótipo interativo do Portal do Parceiro iFood",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
