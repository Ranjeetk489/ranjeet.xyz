import type { Metadata } from "next";

import { Jost } from "next/font/google";

const mouse_memoirs = Jost({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mouse_memoirs.className}>{children}</body>
    </html>
  );
}
