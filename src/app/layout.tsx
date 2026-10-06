import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "Abhay Mahajan — AI/ML Engineer & Builder",
    template: "%s — Abhay Mahajan",
  },

  icons: {
    icon: "/favicon.svg",
  },

  description:
    "Abhay Mahajan is an AI/ML engineer and GenAI builder working on AI products, RAG applications, and software. He also photographs nature, landscapes, and places.",

  keywords: [
    "Abhay Mahajan",
    "AI ML Engineer",
    "Generative AI",
    "GenAI",
    "RAG",
    "AI Engineer",
    "Machine Learning",
    "Portfolio",
    "Photography",
  ],

  authors: [
    {
      name: "Abhay Mahajan",
    },
  ],

  creator: "Abhay Mahajan",

  openGraph: {
    title: "Abhay Mahajan — AI/ML Engineer & Builder",
    description:
      "AI/ML engineer, GenAI builder and photographer.",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhay Mahajan — AI/ML Engineer & Builder",
    description:
      "AI/ML engineer, GenAI builder and photographer.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

