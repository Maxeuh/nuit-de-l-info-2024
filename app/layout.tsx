import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "cEAUrps",
  description: "Projet Nuit de l'info 2024 de l'équipe \"🦆 Hunter\" de l'INSA Centre Val de Loire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
