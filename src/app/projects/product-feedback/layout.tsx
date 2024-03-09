import type { Metadata } from "next";

import { Jost } from "next/font/google";

const jost = Jost({ weight: ["400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={jost.className}>{children}</div>;
}
