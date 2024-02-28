import React from "react";
import SmallButton from "../../../../../components/SmallButton";
import Image from "next/image";
import Back from "../../../../../public/assets/images/icon-back.svg";
import Button from "../../../../../components/Button";
import BackButton from "@/components/projects/hangman/backButton";
import { headers } from "next/headers";

interface Name {
  name: string;
  selected: boolean;
}

interface Data {
  categories: {
    Movies: Name[];
    "Tv Shows": Name[];
    Countries: Name[];
    "Capital Cities": Name[];
    Animals: Name[];
    Sports: Name[];
  };
}

const Page = async () => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let response = await fetch(`${protocal}://${host}/api`, {
    cache: "no-store",
  });
  const data: Data = await response.json();

  return (
    <div className="">
      <div className="fixed -z-50 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
      <div className="container mx-auto flex flex-col gap-6 p-6">
        <BackButton title="Pick A Category" />
        <div className="mt-14 grid grid-cols-1 gap-y-[16px] md:mt-[100px] md:grid-cols-2 md:gap-[32px] lg:mt-[150px] lg:grid-cols-3 lg:gap-x-[32px] lg:gap-y-[50px]">
          {Object.entries(data.categories).map(([category]) => (
            <button
              // className="py-[24px] lg:py-[60px] md:py-[105px]"
              style={{
                background: "#140E66",
                borderRadius: "20px",
              }}
              color="blue"
              key={category}
            >
              <div
                className="flex   justify-center rounded-[20px] bg-[#2463FF] py-[24px] text-white  md:py-[60px] lg:py-[60px]"
                style={{ boxShadow: `inset 0px 6px 0px #3C74FF` }}
              >
                <div className="text-hm uppercase tracking-wider">
                  {category}
                </div>
              </div>
            </button>
          ))}
          Ba
        </div>
      </div>
    </div>
  );
};

export default Page;
