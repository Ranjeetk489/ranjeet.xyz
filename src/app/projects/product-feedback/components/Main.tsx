"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Close from "../../../../../public/assets/productAssets/shared/mobile/icon-close.svg";
import Hamburger from "../../../../../public/assets/productAssets/shared/mobile/icon-hamburger.svg";
import Guy from "../../../../../public/assets/productAssets/shared/icon-guy.svg";
import Bulb from "../../../../../public/assets/productAssets/suggestions/icon-suggestions.svg";
import CategoryButton from "./CategoryButton";
import { ProductRequest } from "../page";
import Select from "./Select";
import Link from "next/link";
import Button from "./Button";
import Feedback from "./Feedback";

interface MainProps {
  productRequests: ProductRequest[];
}

const Main: React.FC<MainProps> = ({ productRequests }) => {
  const [isWindowLarge, setIsWindowLarge] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("all");
  const [sortBy, setSortBy] = useState("most upvotes");
  const CategoryNames = ["all", "UI", "UX", "enhancement", "bug", "feature"];

  useEffect(() => {
    if (window.innerWidth > 768) {
      setIsOpen(true);
      setIsWindowLarge(true);
    }
  }, []);

  return (
    <div className="md:px-10 md:py-4 lg:flex gap-7 lg:py-20 lg:px-28">
      <div className=" md:flex lg:flex-col md:py-10 lg:py-0 lg:w-64 md:gap-[10px] lg:gap-6">
        <div
          className={`h-[72px] md:h-auto w-[100vw] md:w-auto lg:pt-16 md:rounded-[10px] text-white py-4 px-6 md:pb-6 flex md:flex-1 lg:flex-[0] justify-between items-center md:items-end bg-gradient-to-bl from-[#E84D70] via-[#A337F6] to-[#28A7ED] ${isOpen ? "fixed md:static" : "relative"}`}
        >
          <div>
            <h1 className="text-base md:text-xl font-bold">Frontend Mentor</h1>
            <h2 className="text-xs md:text-base opacity-75">Feedback Board</h2>
          </div>
          <Image
            className="h-4 w-4 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            width={16}
            height={16}
            src={isOpen ? Close : Hamburger}
            alt="X"
          />
        </div>

        {isOpen && (
          <>
            <div className="bg-black md:hidden fixed top-[72px] left-0 opacity-50 z-30 w-screen h-screen" />
            <aside className="fixed md:static flex md:flex-[2] flex-col md:flex-row lg:flex-col gap-6 md:gap-[10px] top-[72px] right-0 h-full p-6 md:p-0 bg-[#F7F8FD] w-[270px] lg:w-auto z-50">
              <div className="bg-white p-6 w-full gap-x-2 gap-y-[14px] rounded-[10px] flex flex-wrap">
                {CategoryNames.map((request, index) => (
                  <CategoryButton
                    key={index}
                    selected={request === selected}
                    setSelected={setSelected}
                    text={request}
                  />
                ))}
              </div>
              <div className="bg-white p-6 w-full rounded-[10px]">
                <div className="flex justify-between items-center mb-4">
                  <h5 className="text-[#3A4374] text-lg font-bold">Roadmap</h5>
                  <h5 className="text-[#4661E6] text-sm underline">View</h5>
                </div>
                {["planned", "in-progress", "live"].map((status) => (
                  <div key={status}>
                    <div className="flex justify-between items-center text-base text-[#647196]">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-2 h-2 rounded-full ${status === "planned" ? "bg-[#F49F85]" : status === "in-progress" ? "bg-[#AD1FEA]" : "bg-[#62BCFA]"} `}
                        />
                        <h5 className="capitalize">{status}</h5>
                      </div>
                      <h5 className="font-bold ">
                        {
                          productRequests
                            .map((req) => req.status)
                            .filter((e) => e === status).length
                        }
                      </h5>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </>
        )}
      </div>

      <main className="lg:flex-1">
        <div className="bg-[#373F68] w-full text-[13px] flex justify-between items-center py-2 px-6 md:py-[14px] md:px-3 md:rounded-[10px]">
          <div className="flex gap-10 items-center text-[#F2F4FE]">
            {isWindowLarge && (
              <div className="flex items-center gap-4">
                <Image src={Bulb} alt="bulb" />{" "}
                <h3 className="font-bold text-lg">
                  {
                    productRequests.filter(
                      (req) => req.category === selected || selected === "all"
                    ).length
                  }{" "}
                  Suggestions
                </h3>
              </div>
            )}
            <Select
              options={[
                "most upvotes",
                "least upvotes",
                "most comments",
                "least comments",
              ]}
              selected={sortBy}
              setSelected={setSortBy}
              sort
            />
          </div>
          <Link href={`/projects/product-feedback/feedback/addFeedback`}>
            <Button text="+ Add Feedback" color="purple" />
          </Link>
        </div>
        <section className="bg-[#F7F8FD] py-8 px-6 md:px-0 md:py-6 flex flex-col gap-4">
          {productRequests &&
            productRequests
              .filter(
                (request) =>
                  request.category === selected || selected === "all",
              )
              .sort((a, b) => {
                const aCommentsLength = a.comments ? a.comments.length : 0;
                const bCommentsLength = b.comments ? b.comments.length : 0;

                if (sortBy === "least upvotes") {
                  return a.upvotes - b.upvotes;
                } else if (sortBy === "most upvotes") {
                  return b.upvotes - a.upvotes;
                } else if (sortBy === "least comments") {
                  return aCommentsLength - bCommentsLength;
                } else {
                  return bCommentsLength - aCommentsLength;
                }
              })
              .map((req, i) => <Feedback key={i} productRequest={req} />)}
          {productRequests.filter(
            (request) => request.category === selected || selected === "all",
          ).length === 0 && (
            <div className="bg-white flex flex-col items-center rounded-[10px] py-[76px] px-6">
              <Image width={102} height={108} src={Guy} alt="Guy" />
              <h2 className="text-[18px] mt-10 mb-4 font-bold text-[#3A4374]">
                There is no feedback{" "}
                {!productRequests ? "" : "in this category"} yet.
              </h2>
              <p className="text-[13px] mb-6 text-[#647196] text-center">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>
              <Button text="+ Add Feedback" color="purple" />
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default Main;
