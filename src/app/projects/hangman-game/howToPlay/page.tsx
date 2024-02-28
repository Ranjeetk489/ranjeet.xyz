import React from "react";
import BackButton from "@/components/projects/hangman/backButton";

const Page = () => {
  return (
    <div className="">
      {/* <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen z-0" /> */}
      <div className=" -z-50 h-screen w-screen fixed bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="container mx-auto">
        <BackButton title={"How To Play"} />
        <div className="mt-[60px] grid grid-cols-1 items-stretch gap-x-8 space-y-8 lg:grid-cols-3 lg:space-y-0">
          <div className="desc-card rounded-3xl bg-white px-6 py-8 tracking-wider  md:px-12 md:py-[60px] lg:flex lg:flex-col lg:gap-8 lg:px-10">
            <p className="justify-self-start text-center text-2xl text-blue md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center md:text-hl lg:mb-10">
              01
            </p>
            <p className="text-start text-2xl uppercase text-dark-navy lg:text-center lg:text-hm">
              Choose a category
            </p>
            <p className="col-start-1 col-end-3 row-start-2 row-end-3 mt-2 text-base leading-[150%] text-[#887DC0] md:col-start-2 md:col-end-3 md:text-b lg:mt-6 lg:text-center">
              First, choose a word category, like animals or movies. The
              computer then randomly selects a secret word from that topic and
              shows you blanks for each letter of the word.
            </p>
          </div>
          <div className="desc-card rounded-3xl bg-white px-6 py-8 tracking-wider  md:px-12 md:py-[60px] lg:flex lg:flex-col lg:gap-8 lg:px-10">
            <p className="justify-self-start text-center text-2xl text-blue md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center md:text-hl lg:mb-10">
              02
            </p>
            <p className="text-start text-2xl uppercase text-dark-navy lg:text-center lg:text-hm">
              Guess the letters
            </p>
            <p className="col-start-1 col-end-3 row-start-2 row-end-3 mt-2 text-base leading-[150%] text-[#887DC0] md:col-start-2 md:col-end-3 md:text-b lg:mt-6 lg:text-center">
              Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it`s wrong, you lose
              some health, which empties after eight incorrect guesses.
            </p>
          </div>
          <div className="desc-card rounded-3xl bg-white px-6 py-8 tracking-wider  md:px-12 md:py-[60px] lg:flex lg:flex-col lg:gap-8 lg:px-10">
            <p className="justify-self-start text-center text-2xl text-blue md:col-start-1 md:col-end-1 md:row-start-1 md:row-end-3 md:self-center md:text-hl lg:mb-10">
              01
            </p>
            <p className="text-start text-2xl uppercase text-dark-navy lg:text-center lg:text-hm">
              WIN OR LOSE
            </p>
            <p className="col-start-1 col-end-3 row-start-2 row-end-3 mt-2 text-base leading-[150%] text-[#887DC0] md:col-start-2 md:col-end-3 md:text-b lg:mt-6 lg:text-center">
              You win by guessing all the letters in the word before your health
              runs out. If the health bar empties before you guess the word, you
              lose.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
