import type { Metadata } from "next";

import { Mouse_Memoirs } from "next/font/google";

const mouse_memoirs = Mouse_Memoirs({ weight: ["400"], subsets: ["latin"] });

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
    <div className={mouse_memoirs.className}>{children}</div>
  );
}
