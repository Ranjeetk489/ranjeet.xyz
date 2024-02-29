import { Metadata } from "next";
import { headers } from "next/headers";
import { Data } from "../page";
import Heart from "../../../../../../public/assets/images/icon-heart.svg";
import Image from "next/image";
import LettersButton from "@/components/projects/hangman/lettersButton";
import KeyboardButton from "@/components/keyboardButton";
import Menu from "@/components/projects/hangman/Menu";

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
  const keyBoard = "abcdefghi jklmnopqr stuvwxyz";
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
      <div className="px-6 sm:px-8 py-11 sm:py-16">
        <header className="flex justify-between">
          <div className="flex gap-4 justify-center items-center">
            <Menu />
            <h1 className="text-[40px] text-white">{params.category}</h1>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Image src={Heart} alt="heart" height={24} width={26} />
          </div>
        </header>
        <div className="flex justify-center gap-x-14 flex-wrap gap-3 mt-20">
          {hiddenWord.split(" ").map((e) => (
            <div className="flex flex-wrap justify-center gap-2" key={e}>
              {e.split("").map((l) => (
                <LettersButton key={l} letter={l} />
              ))}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 mt-20">
          {keyBoard.split(" ").map((e) => (
            <div className="flex justify-center gap-2" key={e}>
              {e.split("").map((l) => (
                <KeyboardButton
                  key={l}
                  letter={l}
                  disabled={hiddenKeys.split("").includes(l)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
