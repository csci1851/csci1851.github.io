import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CSCI 1851 - Machine Learning in Health & Biology",
  description: "Course website for CSCI 1851: Machine Learning in Health & Biology - Spring 2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
