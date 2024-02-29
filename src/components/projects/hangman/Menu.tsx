"use client";
import Image from "next/image";
import React, { useState } from "react";
import MenuIcon from "../../../../public/assets/images/icon-menu.svg";
import Button from "./Button";

interface MenuProps {
  text?: string;
}

const Menu: React.FC<MenuProps> = ({ text = "paused" }) => {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <div
        className="relative overflow-hidden rounded-full"
        onClick={() => setShowCard(true)}
      >
        <div className="pink-gradient rounded-full w-10 md:w-16 lg:w-24 h-10 md:h-16 lg:h-24 flex justify-center items-center cursor-pointer hover-effect">
          <Image
            className="w-4 md:w-6 lg:w-9 h-[14px] md:h-5 lg:h-8"
            src={MenuIcon}
            alt="menu"
            width={16}
            height={14}
          />
        </div>
      </div>
      {showCard && (
        <>
          <div className="fixed z-40 top-0 left-0 h-screen w-screen bg-gradient-to-b from-[#1A043A] to-[#2B1677] opacity-75" />
          <div
            className="absolute z-50 top-1/4 left-1/2 -translate-x-1/2"
            style={{
              background: "#140e66b2",
              borderRadius: "48px",
              padding: "0px 4px 10px 4px",
            }}
          >
            <div
              className="relative flex flex-col items-center justify-center gap-8 rounded-[48px] bg-opacity-15 bg-gradient-to-b from-[#344ABA] to-[#001479af] w-80 md:w-[592px] h-[445px] lg:h-[534px]"
              style={{
                boxShadow: `inset 3px 12px 0 #2463FF, inset -3px 12px 0 #2463FF `,
              }}
            >
              <div className="absolute -top-14 md:-top-[84px]">
                <div className="relative capitalize">
                  <h4 className="text-shadow text-8xl md:text-9xl">{text}</h4>
                  <h4 className="absolute top-0 gradient-text text-8xl md:text-9xl">
                    {text}
                  </h4>
                </div>
              </div>
              <Button onClick={() => text === 'paused' ? setShowCard(false) : ''} color="blue">{text !== 'paused' ? 'Play Again' : 'Continue'}</Button>
              <Button color="blue">New Category</Button>
              <Button color="pink">Quit Game</Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
