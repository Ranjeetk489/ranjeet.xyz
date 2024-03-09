import Image from "next/image";
import React from "react";
import LeftArrow from "../../../../../../public/assets/productAssets/shared/icon-arrow-left.svg";
import Button from "../../components/Button";
import Feedback from "../../components/Feedback";
import { Comment, Data, GetData } from "../../page";

const page = async ({ params }: { params: { feedBackId: number } }) => {
  const data: Data = await GetData();
  const comments: Comment[] =
    data.productRequests[params.feedBackId - 1].comments;
  // console.log(comments);

  return (
    <div className="bg-[#F7F8FD] p-6 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image src={LeftArrow} alt="<" />
          <h5 className="text-[13px] font-bold text-[#647196]">Go Back</h5>
        </div>
        <Button text="Edit Feedback" color="blue" />
      </div>
      <Feedback productRequest={data.productRequests[params.feedBackId - 1]} />

      {comments && (
        <div className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col gap-2 ">
          <h2 className="text-lg font-bold text-[#3A4374]">
            {comments.length} Comment{comments.length === 1 ? "" : "s"}{" "}
          </h2>
          {comments.map((comment, index: number) => (
            <div
              key={comment.id}
              className={`flex flex-col gap-6 mt-6 border-[#8C92B3] ${index !== 0 ? "border-t pt-6" : ""}`}
            >
              <div className="flex justify-between items-center">
                <Image
                  className="rounded-full"
                  width={40}
                  height={40}
                  src={`/assets/productAssets${comment.user.image.slice(8)}`}
                  alt="Dp"
                />
                <div className="ml-4 mr-auto">
                  <h2 className="text[#3A4374] font-bold">
                    {comment.user.name}
                  </h2>
                  <h3 className="text-[#647196]">@{comment.user.username}</h3>
                </div>
                <h3 className="text-[#4661E6] font-semibold">Reply</h3>
              </div>
              <p className="text-[#647196]">{comment.content}</p>
              {comment.replies && comment.replies.length > 0 && (
                <div className="relative pl-6 flex flex-col gap-6">
                  <div
                    className="border-l border-[#647196] opacity-20 absolute top-0 left-0"
                    style={{
                      height: `calc(${((comment.replies.length - 1) / comment.replies.length) * 100}% + 44px)`,
                    }}
                  ></div>
                  {comment.replies.map((reply, index) => (
                    <div key={index} className="mb-2 last:mb-0">
                      <div className="flex justify-between items-center">
                        <Image
                          className="rounded-full "
                          width={40}
                          height={40}
                          src={`/assets/productAssets${reply.user.image.slice(8)}`}
                          alt="Dp"
                        />
                        <div className="ml-4 mr-auto">
                          <h2 className="text[#3A4374] font-bold">
                            {reply.user.name}
                          </h2>
                          <h3 className="text-[#647196]">
                            @{reply.user.username}
                          </h3>
                        </div>
                        <h3 className="text-[#4661E6] font-semibold">Reply</h3>
                      </div>
                      <p>
                        <span className="text-[#AD1FEA] font-bold">
                          @{reply.replyingTo}
                        </span>{" "}
                        {reply.content}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      <div className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col gap-6 ">
        <h3 className="text-[#3A4374] text-[18px] font-bold">Add Comment</h3>
        <textarea className="bg-[#F7F8FD] p-4 h-20" name="Add Comment" rows={2} placeholder="Type your comment here" />
        <div className="-mt-2 flex justify-between items-center">
          <h5>Characters left</h5>
          <Button text="Post Comment" color="purple" />
        </div>
      </div>
    </div>
  );
};

export default page;
