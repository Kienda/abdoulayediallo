// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Abdoulaye Diallo | Software Engineer",
  description:
    "CS student at Columbia University building production web applications. Looking for Software Engineering internships for Summer 2026.",
  openGraph: {
    title: "Abdoulaye Diallo | Software Engineer",
    description:
      "CS student at Columbia University building production web applications. Looking for Software Engineering internships for Summer 2026.",
    url: "https://abdoulayediallo.com",
    siteName: "Abdoulaye Diallo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdoulaye Diallo | Software Engineer",
    description:
      "CS student at Columbia University building production web applications. Looking for Software Engineering internships for Summer 2026.",
  },
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
