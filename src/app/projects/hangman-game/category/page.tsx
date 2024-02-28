import React from "react";
import SmallButton from "../../../../../components/SmallButton";
import Image from "next/image";
import Back from "../../../../../public/assets/images/icon-back.svg";
import Button from "../../../../../components/Button";
import BackButton from "@/components/projects/hangman/backButton";

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
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/`);
  const data: Data = await response.json();

  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen -z-50" />
      <div className="p-6 flex flex-col gap-6 container mx-auto">
        <BackButton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[16px] md:gap-[32px] lg:gap-x-[32px] lg:gap-y-[50px] mt-14 md:mt-[100px] lg:mt-[150px]">
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
                className="bg-[#2463FF]   text-white rounded-[20px] flex justify-center py-[24px]  md:py-[60px] lg:py-[60px]"
                style={{ boxShadow: `inset 0px 6px 0px #3C74FF` }}
              >
                <div className="tracking-wider text-hm uppercase">{category}</div>
              </div>
            </button>
          ))}
          Ba</div>
      </div>
    </div>
  );
};

export default Page;
