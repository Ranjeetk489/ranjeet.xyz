"use client"
import React from "react";
import Image from "next/image";
import Back from "../../../../../public/assets/images/icon-back.svg";
import {useRouter } from "next/navigation"
import BackButton from "@/components/projects/hangman/backButton";


const Page = () => {
  const router = useRouter()
  return (
    <div className="">
      {/* <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen z-0" /> */}
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen -z-50" />
      <div className="container mx-auto">
        <BackButton/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 mt-[60px] space-y-8 items-stretch lg:space-y-0">
          <div className="bg-white px-12 py-[60px] rounded-3xl tracking-wider lg:flex lg:flex-col desc-card">
            <p className="text-blue text-hl text-center col-start-1 col-end-1 row-start-1 row-end-3 self-center justify-self-start">01</p>
            <p className="text-hm text-start text-dark-navy uppercase lg:text-center">Choose a category</p>
            <p className="text-[#887DC0] text-b leading-[150%] lg:mt-6 lg:text-center">
              First, choose a word category, like animals or movies. The computer
              then randomly selects a secret word from that topic and shows you
              blanks for each letter of the word.
            </p>
          </div>
          <div className="bg-white px-12 py-[60px] rounded-3xl tracking-wider lg:flex lg:flex-col desc-card">
            <p className="text-blue text-hl text-center col-start-1 col-end-1 row-start-1 row-end-3 self-center justify-self-start">02</p>
            <p className="text-hm text-start text-dark-navy uppercase lg:text-center">Guess the letters</p>
            <p className="text-[#887DC0] text-b leading-[150%] lg:mt-6 lg:text-center">
            Take turns guessing letters. The computer fills in the relevant
              blank spaces if your guess is correct. If it`s wrong, you lose some
              health, which empties after eight incorrect guesses.
            </p>
          </div>
          <div className="bg-white px-12 py-[60px] rounded-3xl tracking-wider lg:flex lg:flex-col desc-card">
            <p className="text-blue text-hl text-center col-start-1 col-end-1 row-start-1 row-end-3 self-center justify-self-start">03</p>
            <p className="text-hm text-start text-dark-navy uppercase lg:text-center">Choose a category</p>
            <p className="text-[#887DC0] text-b leading-[150%] lg:mt-6 lg:text-center">
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
