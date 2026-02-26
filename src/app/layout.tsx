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
  title: "Felipe Reis | Senior Full Stack Software Engineer",
  description: "Portfolio of Felipe Reis - Senior Full Stack Software Engineer specialized in C#, .NET, and JavaScript. Check out my projects and get in touch.",
  keywords: ["Felipe Reis", "Software Engineer", "Full Stack", "C#", ".NET", "JavaScript", "TypeScript", "Portfolio"],
  authors: [{ name: "Felipe Reis" }],
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
  },
  openGraph: {
    title: "Felipe Reis | Senior Full Stack Software Engineer",
    description: "Portfolio of Felipe Reis - Senior Full Stack Software Engineer specialized in C#, .NET, and JavaScript.",
    type: "website",
    url: "https://irdw0.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
