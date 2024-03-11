"use client";
import Image from "next/image";
import React, { useState } from "react";
import Down from "../../../../../public/assets/productAssets/shared/icon-arrow-down.svg";
import Up from "../../../../../public/assets/productAssets/shared/icon-arrow-up.svg";
import Tick from "../../../../../public/assets/productAssets/shared/icon-check.svg";

interface SelectProps {
  options: string[];
  selected: string;
  sort?: boolean;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Select: React.FC<SelectProps> = ({
  options,
  selected,
  setSelected,
  sort,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (option: string) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative z-10">
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-transparent -z-10" />
      )}
      <div
        className={`flex ${sort ? "" : "justify-between p-4 text-[#3A4374] bg-[#F7F8FD] rounded-md "} items-center gap-2 hover:opacity-75 cursor-pointer ${isOpen ? "border border-[#4661E6]" : ""} z-50`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {sort && <h5>Sort by :</h5>}
        <h2 className="font-bold capitalize">{selected}</h2>
        <Image
          style={{
            filter: sort
              ? "invert(48%) sepia(0%) saturate(0%) hue-rotate(86deg) brightness(1000%) contrast(119%)"
              : "",
          }}
          src={isOpen ? Up : Down}
          alt="<"
        />
      </div>

      {isOpen && (
        <div
          style={{
            boxShadow: `${sort ? "0px 4px 4px rgba(0, 0, 0, 0.25)," : ""} 0px 10px 40px -7px rgba(55, 63, 104, 0.35)`,
          }}
          className={`bg-white rounded-[10px] ${sort ? "w-64 top-14" : "w-full top-16"} absolute z-50`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-6 py-3 border-b-[#97979750] ${index !== options.length - 1 ? "border-b" : ""} flex items-center justify-between text-[#647196] hover:text-[#AD1FEA] cursor-pointer `}
              onClick={() => handleChange(option)}
            >
              <h4 className="capitalize text-base ">{option}</h4>
              {option === selected && <Image src={Tick} alt="Check" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
