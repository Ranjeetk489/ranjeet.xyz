import React from "react";
import "./style.css";
import { headers } from "next/headers";
import Main from "./components/Main";
import Select from "./components/Select";
import Feedback from "./components/Feedback";
import Button from "./components/Button";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

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
    },
  );
  const data: Data = await response.json();
  return data;
}

const page = async () => {
  const data: Data = await GetData();
  const supabase = createClient();
  const user = await supabase.auth.getUser();
  console.log(user);

  return (
    <div className="">
      <Main productRequests={data.productRequests} />
    </div>
  );
};

export default page;
