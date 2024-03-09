import type { Metadata } from "next";

import { Jost } from "next/font/google";

const jost = Jost({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product feedback app",
  description:
    "A product feedback app built with Next.js using typeScrpit and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={jost.className}>{children}</div>;
}
