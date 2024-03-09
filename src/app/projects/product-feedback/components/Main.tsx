"use client";
import Image from "next/image";
import React, { useState } from "react";
import Close from "../../../../../public/assets/productAssets/shared/mobile/icon-close.svg";
import Hamburger from "../../../../../public/assets/productAssets/shared/mobile/icon-hamburger.svg";
import CategoryButton from "./CategoryButton";
import { ProductRequest } from "../page";

interface MainProps {
  productRequests: ProductRequest[];
}

const Main: React.FC<MainProps> = ({ productRequests }) => {
  const [isOpen, setIsOpen] = useState(false);
  const CategoryNames = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  return (
    <div>
      <div className="h-[72px] w-[100vw] text-white py-4 px-6 flex justify-between items-center bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED] relative">
        <div>
          <h1 className="text-base font-bold">Frontend Mentor</h1>
          <h2 className="text-xs opacity-75">Feedback Board</h2>
        </div>
        <Image
          className="h-4 w-4 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          width={16}
          height={16}
          src={isOpen ? Close : Hamburger}
          alt="X"
        />
      </div>

      {isOpen && (
        <aside className="absolute flex flex-col gap-6 top-[72px] right-0 bottom-0 p-6 bg-[#F7F8FD] w-[270px] ">
          <div className="bg-white p-6 w-full gap-x-2 gap-y-[14px] rounded-[10px] flex flex-wrap">
            {CategoryNames.map((request, index) => (
              <CategoryButton key={index} selected={false}>
                {request}
              </CategoryButton>
            ))}
          </div>
          <div className="bg-white p-6 w-full rounded-[10px]">
            <div className="flex justify-between items-center">
              <h5 className="text-[#3A4374] text-lg">Roadmap</h5>
              <h5 className="text-[#4661E6] text-sm underline">View</h5>
            </div>
            <div className="flex justify-between items-center text-base text-[#647196]">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#F49F85]" />
                <h5>Planned</h5>
              </div>
              <h5 className="font-bold ">
                {
                  productRequests
                    .map((req) => req.status)
                    .filter((status) => status === "planned").length
                }
              </h5>
            </div>
            <div className="flex justify-between items-center text-base text-[#647196]">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#AD1FEA]" />
                <h5>In-Progress</h5>
              </div>
              <h5 className="font-bold ">
                {
                  productRequests
                    .map((req) => req.status)
                    .filter((status) => status === "in-progress").length
                }
              </h5>
            </div>
            <div className="flex justify-between items-center text-base text-[#647196]">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#62BCFA]" />
                <h5>Live</h5>
              </div>
              <h5 className="font-bold ">
                {
                  productRequests
                    .map((req) => req.status)
                    .filter((status) => status === "live").length
                }
              </h5>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Main;
