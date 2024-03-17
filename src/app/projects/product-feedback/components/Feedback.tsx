import React from "react";
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
  return (
    <Link
      className="bg-white text-[13px] md:text-base rounded-[10px] text-[#3A4374] p-6 md:p-8 flex gap-10 hover:text-[#4661E6]"
      href={`/projects/product-feedback/feedbackDetail/${productRequest.id}`}
    >
      <div className="sm:hidden md:flex">
        <UpVotes selected={false} votes={productRequest.upvotes} />
      </div>
      <div className="flex flex-col flex-1 gap-2 md:flex-row md:justify-between ">
        <div className="flex flex-col gap-2">
          <h3 className="md:text-lg font-bold">
            {productRequest.title}
          </h3>
          <p className="text-[#647196]">{productRequest.description}</p>
          <div>
            <CategoryButton selected={false} text={productRequest.category} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="md:hidden">
            <UpVotes selected={false} votes={productRequest.upvotes} />
          </div>
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
      </div>
    </Link>
  );
};

export default Feedback;
