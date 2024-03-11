'use client'
import React, { useState } from "react";
import { ProductRequest } from "../page";
import CategoryButton from "./CategoryButton";
import UpVotes from "./UpVotes";
import Image from "next/image";
import Comment from "../../../../../public/assets/productAssets/shared/icon-comments.svg";
import Link from "next/link";

interface FeedbackProps {
  productRequest: ProductRequest;
}

const Feedback: React.FC<FeedbackProps> = ({ productRequest }) => {
    const [selected, setSelected] = useState('')
  return (
    <Link
      className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col gap-2 "
      href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/product-feedback/feedbackDetail/${productRequest.id}`}
    >
      <h3 className="text-[#3A4374] font-bold">{productRequest.title}</h3>
      <p className="text-[#647196]">{productRequest.description}</p>
      <div>
        <CategoryButton selected={false} text={productRequest.category}/>
      </div>
      <div className="flex justify-between items-center">
        <UpVotes selected={false} votes={productRequest.upvotes} />
        <div className="flex items-center gap-1">
          <Image
            className="h-4 w-[18px]"
            width={18}
            height={16}
            src={Comment}
            alt="Comment"
          />
          <h5 className="text-[#3A4374] font-bold">
            {productRequest.comments?.length || 0}
          </h5>
        </div>
      </div>
    </Link>
  );
};

export default Feedback;
