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
    // <div className="bg-parent">
    <div className={``}>{children}</div>
    // </div>
  );
}
