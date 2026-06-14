import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Mehmet Eren Özden | Yapay Zeka & Veri Mühendisi",
  description:
    "Yapay zeka sistem tasarımı, veri mühendisliği, fintech ve CBS analitiği alanlarında uzmanlaşmış portfolyo sitesi. Hibrit LLM mimarileri ve büyük veri setleri ile bankacılık düzeyinde ürünler geliştiriyorum.",
  keywords: [
    "Mehmet Eren Özden",
    "Yapay Zeka",
    "Veri Mühendisliği",
    "Fintech",
    "CBS",
    "Portfolio",
  ],
  authors: [{ name: "Mehmet Eren Özden" }],
  openGraph: {
    title: "Mehmet Eren Özden | Yapay Zeka & Veri Mühendisi",
    description:
      "Yapay zeka sistem tasarımı, veri mühendisliği ve fintech ürün geliştirme odaklı portfolyo.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
