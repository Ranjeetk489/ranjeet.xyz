import React from "react";
import Image from "next/image";
import Back from "../../../../../public/assets/images/icon-back.svg";
import SmallButton from "../../../../../components/SmallButton";
const page = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen z-0" />
      <div className="absolute m-6 sm:m-10 flex flex-col gap-6">
        <div className="flex justify-between mb-14">
          <SmallButton>
            <Image
              className="w-[18px] sm:w-[28px] mx-4 sm:mx-8"
              src={Back}
              alt="back"
              height={18}
              width={18}
            />
          </SmallButton>
          <div className="relative sm:-left-1/4">
            <h1 className="text-shadow text-5xl sm:text-8xl">How to Play</h1>
            <h1 className="absolute top-0 gradient-text text-5xl sm:text-8xl">
              How to Play
            </h1>
          </div>
        </div>
        <div className="bg-white p-8 rounded-3xl tracking-wider">
          <h2 className="text-2xl text-dark-navy uppercase ">
            <span className="text-blue mr-4">01</span> Choose a category
          </h2>
          <p className="text-base text-[#887DC0] mt-4">
            First, choose a word category, like animals or movies. The computer
            then randomly selects a secret word from that topic and shows you
            blanks for each letter of the word.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl tracking-wider">
          <h2 className="text-2xl text-dark-navy uppercase ">
            <span className="text-blue mr-4">02</span> Guess the letters
          </h2>
          <p className="text-base text-[#887DC0] mt-4">
            Take turns guessing letters. The computer fills in the relevant
            blank spaces if your guess is correct. If it`s wrong, you lose some
            health, which empties after eight incorrect guesses.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl tracking-wider mb-10">
          <h2 className="text-2xl text-dark-navy uppercase ">
            <span className="text-blue mr-4">03</span> Win Or Lose
          </h2>
          <p className="text-base text-[#887DC0] mt-4">
            You win by guessing all the letters in the word before your health
            runs out. If the health bar empties before you guess the word, you
            lose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
