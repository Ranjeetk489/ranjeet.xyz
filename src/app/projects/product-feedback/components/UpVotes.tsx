import React from "react";
import Up from "../../../../../public/assets/productAssets/shared/icon-arrow-up.svg";
import Image from "next/image";

interface ButtonProps {
  votes: number;
  selected: boolean;
}

const UpVotes: React.FC<ButtonProps> = ({ votes, selected }) => {
  return (
    <div
      className={`pl-4 pr-3 py-[6px] text-[13px] font-bold rounded-[10px] cursor-pointer bg-[#F2F4FF] text-[#3A4374]"} hover:bg-[#CFD7FF] flex justify-center items-center gap-2 font-bold active:bg-[#4661E6] active:text-white`}
    >
      <Image
        style={{
          filter: selected
            ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
            : "",
        }}
        src={Up}
        alt="Up"
      />
      <h5>{votes}</h5>
    </div>
  );
};

export default UpVotes;
