"use client";
import React, { useEffect, useState } from "react";
import LettersButton from "./lettersButton";
import KeyboardButton from "./keyboardButton";

interface GameProps {
  hiddenWord: string;
  hiddenKeys: string;
  word: string;
}

const Game: React.FC<GameProps> = ({ word, hiddenWord, hiddenKeys }) => {
  const hiddenIndexStr = hiddenWord
    .split("")
    .map((e, i) => {
      if (e === "_") return i;
      else return "";
    })
    .join("");
  const correctWord = word.split(" ").join("").split("");
  const keyBoard = "abcdefghi jklmnopqr stuvwxyz";
  const [hiddenLetters, setHiddenLetters] = useState(hiddenWord.split(""));
  const [hiddenIndexes, setHiddenIndexes] = useState(hiddenIndexStr.split(""));
  const [selectedBox, setSelectedBox] = useState(Number(hiddenIndexes[0]));
  const [clickedKey, setClickedKey] = useState("");
  console.log(selectedBox);

  useEffect(() => {
    if (correctWord[selectedBox]?.toLowerCase() === clickedKey) {
      setHiddenLetters((prevHiddenLetters) => {
        const updatedHiddenLetters = [...prevHiddenLetters];
        updatedHiddenLetters[selectedBox] = correctWord[selectedBox];
        return updatedHiddenLetters;
      });
    }
    // console.log(hiddenLetters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedKey]);
  // console.log(hiddenWord);
  // console.log(hiddenIndexStr);
  // console.log(correctWord[selectedBox].toLowerCase() === clickedKey);
  // console.log(hiddenLetters);
  // console.log(clickedKey);

  return (
    <div>
      <main className="flex justify-center gap-x-14 flex-wrap gap-3 mt-20 sm:mt-24 md:mt-20">
        {hiddenLetters
          .join("")
          .split(" ")
          .map((e, i) => {
            const wordIndexOffset = hiddenLetters
              .join("")
              .split(" ")
              .slice(0, i)
              .join("").length;

            return (
              <div className="flex flex-wrap justify-center gap-2" key={e}>
                {e.split("").map((l, j) => (
                  <LettersButton
                    key={j}
                    index={j + wordIndexOffset}
                    letter={l}
                    active={selectedBox}
                    setSelectedBox={setSelectedBox}
                  />
                ))}
              </div>
            );
          })}
      </main>
      <section className="flex flex-col gap-6 mt-20">
        {keyBoard.split(" ").map((e) => (
          <div className="flex justify-center gap-2" key={e}>
            {e.split("").map((l, i) => (
              <KeyboardButton
                key={i}
                letter={l}
                disabled={hiddenKeys.split("").includes(l)}
                setClickedKey={setClickedKey}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Game;
