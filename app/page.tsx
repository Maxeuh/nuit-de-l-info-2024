"use client"

import { HeaderBar } from "@/components/header/HeaderBar";

export default function Home() {
  const link = ["/credits", "/podcasts"];

  return (
    <div className="p-4">
      <HeaderBar logo="/logo/Logo-goute.png" name="/logo/logo-text.png" links={link} />
     
    </div>
  );
}
