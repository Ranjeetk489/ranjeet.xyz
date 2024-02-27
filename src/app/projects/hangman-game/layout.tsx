import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hangman Game",
  description: "A simple hangman game built with Next.js and Tailwind CSS.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-hero-pattern`}>{children}</body>
    </html>
  );
}
