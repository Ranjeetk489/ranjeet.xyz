import Image from "next/image";
import React from "react";
import LeftArrow from "../../../../../../public/assets/productAssets/shared/icon-arrow-left.svg";
import Button from "../../components/Button";
import Feedback from "../../components/Feedback";
import { Comment, GetData } from "../../page";
import CommentContent from "../../components/CommentContent";
import AddComment from "../../components/AddComment";
import Link from "next/link";

const page = async ({ params }: { params: { feedBackId: number } }) => {
  const data = await GetData();
  const comments: Comment[] =
    data.productRequests[params.feedBackId - 1].comments;

  return (
    <div className="bg-[#F7F8FD] px-6 py-8 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <Link
          href={`/projects/product-feedback`}
          className="flex gap-4 items-center"
        >
          <Image src={LeftArrow} alt="<" />
          <h5 className="text-[13px] font-bold text-[#647196]">Go Back</h5>
        </Link>
        <Link
          href={`/projects/product-feedback/feedback/${params.feedBackId}`}
        >
          <Button text="Edit Feedback" color="blue" />
        </Link>
      </div>
      <Feedback productRequest={data.productRequests[params.feedBackId - 1]} />

      {comments && (
        <div className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col ">
          <h2 className="text-lg font-bold text-[#3A4374]">
            {comments.reduce(
              (total, comment) =>
                total + (comment.replies ? comment.replies.length : 0) + 1,
              0,
            )}{" "}
            Comment{comments.length === 1 ? "" : "s"}{" "}
          </h2>
          {comments.map((comment, index: number) => (
            <div
              key={comment.id}
              className={`flex flex-col gap-4 mt-6 border-[#8c92b349] ${index !== 0 ? "border-t pt-6" : ""}`}
            >
              <CommentContent comment={comment} />
              {comment.replies && comment.replies.length > 0 && (
                <div className="relative pl-6 flex flex-col mt-2 gap-6">
                  <div
                    className="border-l border-[#647196] opacity-20 absolute top-0 left-0"
                    style={{
                      height: `calc(${((comment.replies.length - 1) / comment.replies.length) * 100}% + 44px)`,
                    }}
                  ></div>
                  {comment.replies.map((reply, index) => (
                    <CommentContent key={index} comment={reply} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <AddComment />
    </div>
  );
};

export default page;
