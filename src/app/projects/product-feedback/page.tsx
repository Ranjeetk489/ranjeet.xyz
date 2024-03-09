import React from "react";
import "./style.css";
import Image from "next/image";
import { headers } from "next/headers";
import Main from "./components/Main";
import Select from "./components/Select";
import Feedback from "./components/Feedback";

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

interface Comment {
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

const page = async () => {
  const host = headers().get("host");
  const protocal = process?.env.NODE_ENV === "development" ? "http" : "https";
  let response = await fetch(
    `${protocal}://${host}/projects/product-feedback/api`,
    {
      cache: "no-store",
    }
  );
  const data: Data = await response.json();
//   console.log(data);

  return (
    <div className="">
      <Main productRequests={data.productRequests} />

      <main>
        <div className="bg-[#373F68] w-full text-[13px] flex justify-between items-center py-2 px-6">
          <div className="flex text-[#F2F4FE]">
            <h5>Sort by: </h5>
            <Select />
          </div>
          <div className="py-[10px] px-4 rounded-[10px] bg-[#AD1FEA] font-bold text-[#F2F4FE] cursor-pointer">
            + Add Feedback
          </div>
        </div>
        <section className="bg-[#F7F8FD] py-8 px-6 flex flex-col gap-4">
          <Feedback productRequests={data.productRequests}/>
        </section>
      </main>
    </div>
  );
};

export default page;
