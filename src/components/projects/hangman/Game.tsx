"use client";
import React, { useEffect, useState } from "react";
import LettersButton from "./lettersButton";
import KeyboardButton from "./keyboardButton";

interface GameProps {
  hiddenWord: string;
  hiddenKeysStr: string;
  word: string;
  health: number;
}

const Game: React.FC<GameProps> = ({ word, hiddenWord, hiddenKeysStr, health }) => {
  
  let hiddenIndexes: number[] = []
    hiddenWord
    .split("")
    .forEach((e, i) => {
      if (e === "_") hiddenIndexes.push(i);
    })
  
  const correctWord = word.split("");
  const keyBoard = "abcdefghi jklmnopqr stuvwxyz";
  const [count, setCount] = useState(0)
  const [hiddenKeys, setHiddenKeys] = useState(hiddenKeysStr)
  const [hiddenLetters, setHiddenLetters] = useState(hiddenWord.split(""));
  const [selectedBox, setSelectedBox] = useState(Number(hiddenIndexes[count]));
  const [clickedKey, setClickedKey] = useState("");

  // function wrongAns(health: number) {
  //   console.log(health, 'd')
  //   health = health - 1
  // }

  useEffect(() => {
    if (clickedKey && correctWord[selectedBox]?.toLowerCase() === clickedKey) {
      setHiddenLetters((prevHiddenLetters) => {
        const updatedHiddenLetters = [...prevHiddenLetters];
        updatedHiddenLetters[selectedBox] = correctWord[selectedBox];
        return updatedHiddenLetters;
      });
      const num = hiddenIndexes.filter((e) => e !== selectedBox && correctWord[e] === clickedKey)
      num.length > 0 ? setHiddenKeys(hiddenKeys) : setHiddenKeys(hiddenKeys + clickedKey)
      setSelectedBox(Number(hiddenIndexes[count + 1]));
      setCount(count + 1)
    } else if(clickedKey && correctWord[selectedBox]?.toLowerCase() !== clickedKey) {
      // wrongAns(health)
      setClickedKey('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedKey]);

  return (
    <div>
      <main className="flex justify-center gap-x-14 flex-wrap gap-3 mt-20 sm:mt-24 md:mt-20">
        {hiddenLetters
          .join("")
          .split(" ")
          .map((e, i) => {
            const wordIndexOffset =
              hiddenLetters.join("").split(" ").slice(0, i).join("").length + i;

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
