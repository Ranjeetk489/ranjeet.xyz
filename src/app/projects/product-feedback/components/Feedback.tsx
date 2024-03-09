import React from "react";
import { ProductRequest } from "../page";
import CategoryButton from "./CategoryButton";
import UpVotes from "./UpVotes";
import Image from "next/image";
import Comment from "../../../../../public/assets/productAssets/shared/icon-comments.svg";
import Guy from "../../../../../public/assets/productAssets/shared/icon-guy.svg";

interface FeedbackProps {
  productRequests: ProductRequest[];
}

const Feedback: React.FC<FeedbackProps> = ({ productRequests }) => {
  return (
    <>
      {productRequests.length === 0 &&
        productRequests.map((req, i) => (
          <div
            className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col gap-2 "
            key={i}
          >
            <h3 className="text-[#3A4374] font-bold">{req.title}</h3>
            <p className="text-[#647196]">{req.description}</p>
            <div>
              <CategoryButton selected={false}>{req.category}</CategoryButton>
            </div>
            <div className="flex justify-between items-center">
              <UpVotes selected={false} votes={req.upvotes} />
              <div className="flex items-center gap-1">
                <Image
                  className="h-4 w-[18px]"
                  width={18}
                  height={16}
                  src={Comment}
                  alt="Comment"
                />
                <h5 className="text-[#3A4374] font-bold">
                  {req.comments?.length || 0}
                </h5>
              </div>
            </div>
          </div>
        ))}
      {productRequests && (
        <div className="bg-white flex flex-col items-center rounded-[10px] py-[76px] px-6">
          <Image width={102} height={108} src={Guy} alt="Guy" />
          <h2 className="text-[18px] mt-10 mb-4 font-bold text-[#3A4374]">
            There is no feedback yet.
          </h2>
          <p className="text-[13px] mb-6 text-[#647196] text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
      )}
    </>
  );
};

export default Feedback;
