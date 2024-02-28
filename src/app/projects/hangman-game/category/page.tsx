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
    <div className="">
      <div className="bg-gradient-to-b from-[#1A043A] to-[#2B1677] fixed opacity-75 h-screen w-screen -z-50" />
      <div className="p-6 flex flex-col gap-6 container mx-auto">
        <div className="flex items-center justify-between lg:justify-normal">
          <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-bs1 relative w-[46px] h-[40px] md:w-[70px] md:h-[64px] lg:w-[106px] lg:h-[100px] rounded-full">
            <div className="h-5 w-5 lg:h-[38px] lg:w-[38px] md:h-[28px] md:w-[28px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                className=""
                src={Back}
                alt="back"
              />
            </div>
          </div>
          <div className="w-full flex justify-end md:justify-center lg:justify-center text-center">
          <div className="relative">
            <h1 className="text-shadow lg:text-hxl text-hm md:text-hl">Pick A Category</h1>
            <h1 className="absolute top-0 gradient-text lg:text-hxl text-hm md:text-hl">Pick A Category</h1>
          </div>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
};

export default page;
