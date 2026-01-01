// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdoulaye Diallo | Software Engineer • Product Designer • Digital Growth Builder",
  description:
    "I help ideas become scalable digital products — from design to deployment to growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-neutral-900 antialiased">
  <Navbar />
  <main className="min-h-[70vh]">{children}</main>
  <Footer />
</body>
    </html>
  );
}
