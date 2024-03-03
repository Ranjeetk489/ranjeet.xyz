import { Metadata } from "next";
import { headers } from "next/headers";
import { Data } from "../page";
import dynamic from "next/dynamic";

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}): Metadata => {
  return {
    title: `${params.category}`,
  };
};
const Game = dynamic(() => import("@/components/projects/hangman/Game"), {
  ssr: false,
});
const Page = async ({ params }: { params: { category: string } }) => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let response = await fetch(`${protocal}://${host}/api`, {
    cache: "no-store",
  });
  const data: Data = await response.json();

  return (
    <>
      <div className="fixed -z-50 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="px-6 md:px-8 lg:px-28 py-11 md:py-16">
        <Game
          category={params.category}
          selectedCategory={data.categories[params.category]}
        />
      </div>
    </>
  );
};

export default Page;
