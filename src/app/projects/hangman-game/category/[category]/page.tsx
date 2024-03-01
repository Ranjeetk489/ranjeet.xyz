import { Metadata } from "next";
import { headers } from "next/headers";
import { Data } from "../page";
import Heart from "../../../../../../public/assets/images/icon-heart.svg";
import Image from "next/image";
import Menu from "@/components/projects/hangman/Menu";
import Game from "@/components/projects/hangman/Game";

export const generateMetadata = ({
  params,
}: {
  params: { category: string };
}): Metadata => {
  return {
    title: `${params.category}`,
  };
};

const page = async ({ params }: { params: { category: string } }) => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";

  let response = await fetch(`${protocal}://${host}/api`, {
    cache: "no-store",
  });
  const data: Data = await response.json();

  const selectedCategory = data.categories[params.category];

  function shuffleArray<T>(array: T[]): T[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const word = shuffleArray(selectedCategory)[0].name;
  let hiddenStr = "";

  const hiddenWord = word
    .split(" ")
    .map((e) => {
      const array = Array.from({ length: e.length }, (_, i) => i + 1);
      const randomNumber = Math.floor((Math.random() * array.length) / 2) + 1;
      const shuffledArray = shuffleArray(array);
      const indexesToHide = shuffledArray.slice(0, randomNumber);

      const hiddenLetters = e.split("").map((letter, index) => {
        if (indexesToHide.includes(index + 1)) {
          hiddenStr += letter;
          return "_";
        }
        return letter;
      });
      return hiddenLetters.join("");
    })
    .join(" "); 

  const hiddenKeys = hiddenWord
    .split("")
    .map((e) => {
      if (e !== "_" && !hiddenStr.toLowerCase().includes(e.toLowerCase())) {
        return e.toLowerCase();
      }
    })
    .join("");

  return (
    <>
      <div className="fixed -z-50 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="px-6 md:px-8 lg:px-28 py-11 md:py-16">
        <header className="flex justify-between">
          <div className="flex gap-4 sm:gap-8 md:gap-10 justify-center items-center">
            <Menu />
            <h1 className="text-3xl md:text-5xl lg:text-[88px] text-white">{params.category}</h1>
          </div>
          <div className="flex gap-4 sm:gap-8 md:gap-10 justify-center items-center">
            <div className="bg-white w-14 sm:w-40 md:w-60 h-4 sm:h-8 rounded-full p-1 sm:px-3 sm:py-2">
              <div className="bg-dark-navy w-full h-full rounded-full"/>
            </div>
            <Image className="h-6 sm:h-12 w-[26px] sm:w-14" src={Heart} alt="heart" height={24} width={26} />
          </div>
        </header>
        <Game word={word} hiddenWord={hiddenWord} hiddenKeysStr={hiddenKeys} /> 
      </div>
    </>
  );
};

export default page;
