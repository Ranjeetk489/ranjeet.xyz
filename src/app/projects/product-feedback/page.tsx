import React, { useState } from "react";
import "./style.css";
import { headers } from "next/headers";
import Main from "./components/Main";
import Select from "./components/Select";
import Feedback from "./components/Feedback";
import Button from "./components/Button";
import Image from "next/image";
import Guy from '../../../../public/assets/productAssets/shared/icon-guy.svg'

export interface Data {
  currentUser: {
    image: string;
    name: string;
    username: string;
  };
  productRequests: ProductRequest[];
}

export interface ProductRequest {
  id: number;
  title: string;
  category: string;
  upvotes: number;
  status: string;
  description: string;
  comments: Comment[];
}

export interface Comment {
  id: number;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
  replies?: Reply[];
}

interface Reply {
  content: string;
  replyingTo: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

export async function GetData() {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let response = await fetch(
    `${protocal}://${host}/projects/product-feedback/api`,
    {
      cache: "no-store",
    }
  );
  const data: Data = await response.json();
  return data;
}

const page = async () => {
  const data: Data = await GetData();

    // console.log(data);

  return (
    <div className="">
      <Main productRequests={data.productRequests} />

      <main>
        <div className="bg-[#373F68] w-full text-[13px] flex justify-between items-center py-2 px-6">
          <div className="flex text-[#F2F4FE]">
            <h5>Sort by: </h5>
            <Select />
          </div>
          <Button text="+ Add Feedback" color="purple" />
        </div>
        <section className="bg-[#F7F8FD] py-8 px-6 flex flex-col gap-4">
        {data.productRequests &&
        data.productRequests.map((req, i) => (
          <Feedback key={i} productRequest={req} />
        ))}
      {data.productRequests.length === 0 && (
        <div className="bg-white flex flex-col items-center rounded-[10px] py-[76px] px-6">
          <Image width={102} height={108} src={Guy} alt="Guy" />
          <h2 className="text-[18px] mt-10 mb-4 font-bold text-[#3A4374]">
            There is no feedback yet.
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

export default page;
