import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Felipe Reis | Desenvolvedor Full Stack",
  description: "Portfólio de Felipe Reis - Desenvolvedor Full Stack especializado em C#, Java e JavaScript. Confira meus projetos e entre em contato.",
  keywords: ["Felipe Reis", "Desenvolvedor", "Full Stack", "C#", "Java", "JavaScript", "Portfolio"],
  authors: [{ name: "Felipe Reis" }],
  openGraph: {
    title: "Felipe Reis | Desenvolvedor Full Stack",
    description: "Portfólio de Felipe Reis - Desenvolvedor Full Stack especializado em C#, Java e JavaScript.",
    type: "website",
    url: "https://felipereis.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
