"use client";
import React, { useEffect, useState } from "react";
import LettersButton from "./lettersButton";
import KeyboardButton from "./keyboardButton";

interface GameProps {
  hiddenWord: string;
  hiddenKeys: string;
  hiddenStr: string;
}

const Game: React.FC<GameProps> = ({ hiddenStr, hiddenWord, hiddenKeys }) => {

    const hiddenIndexStr = hiddenWord.split('').map((e,i) => {
      if(e === '_') return i
      else return ''
    }).join('')
  const [hiddenLetters, setHiddenLetters] = useState(hiddenWord.split(''));
  const [correctLetters, setCorrectLetters] = useState(hiddenStr.split(''));
  const [hiddenIndexes, setHiddenIndexes] = useState(hiddenIndexStr.split(''))
  const [selectedBox, setSelectedBox] = useState("");
  console.log(hiddenIndexes)
  const keyBoard = "abcdefghi jklmnopqr stuvwxyz";
  console.log(hiddenLetters)
  console.log(correctLetters)

  return (
    <div>
      <main className="flex justify-center gap-x-14 flex-wrap gap-3 mt-20 sm:mt-24 md:mt-20">
        {hiddenWord.split(" ").map((e) => (
          <div className="flex flex-wrap justify-center gap-2" key={e}>
            {e.split("").map((l, i) => (
              <LettersButton key={i} index={i} letter={l} active={Number(hiddenIndexes[0])} />
            ))}
          </div>
        ))}
      </main>
      <section className="flex flex-col gap-6 mt-20">
        {keyBoard.split(" ").map((e) => (
          <div className="flex justify-center gap-2" key={e}>
            {e.split("").map((l, i) => (
              <KeyboardButton
                key={i}
                letter={l}
                disabled={hiddenKeys.split("").includes(l)}
              />
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Game;
