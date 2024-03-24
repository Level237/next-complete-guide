import type { Metadata } from "next";

import "./globals.css";
import Providers from "./provider";
import Header from "@/components/header";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto px-4 max-w-6xl">
        <Providers>
          <Header/>
        {children}
        </Providers>
        </div>
       
       
        </body>
    </html>
  );
}
