import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <div className="container mx-auto px-12">
        {children}
        </div>
        
        </body>
    </html>
  );
}
