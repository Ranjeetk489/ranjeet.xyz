"use client";
import React from "react";

interface ButtonProps {
  text: string;
  selected: boolean;
  setSelected?: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryButton: React.FC<ButtonProps> = ({
  text,
  selected,
  setSelected,
}) => {
  return (
    <div
      className={`inline-block px-4 py-[6px] text-[13px] font-bold capitalize rounded-[10px] cursor-pointer ${selected ? "bg-[#4661E6] text-white hover:opacity-95" : "bg-[#F2F4FF] text-[#4661E6] hover:bg-[#CFD7FF]"}`}
      onClick={() => setSelected ?  setSelected(text): {} }
    >
      <h5>{text}</h5>
    </div>
  );
};

export default CategoryButton;
