import type { Metadata } from "next";
import "./globals.css";
import { HeaderBar } from "@/components/header/HeaderBar";

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
        <div className={"absolute z-10 w-full"}>
          <HeaderBar logo="/logo/logo.png" name="/logo/logo-text.png" links={["/podcasts","/credits"]}/>
        </div>
        {children}
      </body>
    </html>
  );
}
