"use client";
import { Herr_Von_Muellerhoff } from "next/font/google";
import React, { useState } from "react";

interface KeyboardButtonProps {
  letter: string;
  onClick?: () => void;
  disabled?: boolean;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  onClick,
  letter,
  disabled,
}) => {
  const style = {
    opacity: disabled ? ".25" : "1",
  };
  return (
    <div
      className={`text-dark-navy bg-white cursor-pointer flex justify-center items-center rounded-lg sm:rounded-3xl uppercase text-2xl sm:text-5xl w-7 sm:w-16 md:w-28 h-14 sm:h-[84px] ${disabled ? 'cursor-not-allowed' : `hover:bg-blue hover:text-white`} `}
      style={style}
      onClick={onClick}
    >
      {letter}
    </div>
  );
};

export default KeyboardButton;
