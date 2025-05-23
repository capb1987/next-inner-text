import type { Metadata } from "next";
import { lato } from "@/ui/fonts";
import "./globals.css";
import ProviderRedux from "@/components/client/ProviderRedux";

export const metadata: Metadata = {
  title: "Task Manager - Index",
  description: "Pagina principal de Tareas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.className} min-h-screen antialiased bg-gray-100`}
      >
        <ProviderRedux>{children}</ProviderRedux>
      </body>
    </html>
  );
}
