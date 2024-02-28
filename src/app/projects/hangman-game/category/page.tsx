import React from "react";
import SmallButton from "../../../../../components/SmallButton";
import Image from "next/image";
import Back from "../../../../../public/assets/images/icon-back.svg";
import Button from "../../../../../components/Button";

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

const page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/api/`);
  const data: Data = await response.json();

  return (
    <div>
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen -z-50" />
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between mb-14">
          <SmallButton>
            <Image
              className="mx-[11px] mb-1"
              src={Back}
              alt="back"
              height={18}
              width={18}
            />
          </SmallButton>
          <div className="relative">
            <h1 className="text-shadow text-5xl">Pick A Category</h1>
            <h1 className="absolute top-0 gradient-text text-5xl">
              Pick A Category
            </h1>
          </div>
        </div>
        {Object.entries(data.categories).map(([category]) => (
          <button
            style={{
              background: "#140E66",
              borderRadius: "20px",
              padding: "0 2px 5px 2px",
            }}
            color="blue"
            key={category}
          >
            <div
              className="bg-[#2463FF]  text-white rounded-[20px] flex justify-center py-6"
              style={{ boxShadow: `inset 0px 6px 0px #3C74FF ` }}
            >
              <div className="tracking-wider text-2xl uppercase">{category}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default page;
