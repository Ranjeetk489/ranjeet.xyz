import type { Metadata } from "next";

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
  return (
    // <div className="bg-parent">
    <div>{children}</div>
    // </div>
  );
}
