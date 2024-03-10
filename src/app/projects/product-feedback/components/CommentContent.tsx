import Image from "next/image";
import React from "react";

interface CommentProps {
  comment: {
    id?: number;
    replyingTo?: string;
    content: string;
    user: {
      image: string;
      name: string;
      username: string;
    };
  };
}

const CommentContent: React.FC<CommentProps> = ({ comment }) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src={`/assets/productAssets${comment.user.image.slice(8)}`}
          alt="Dp"
        />
        <div className="ml-4 mr-auto">
          <h2 className="text[#3A4374] font-bold">{comment.user.name}</h2>
          <h3 className="text-[#647196]">@{comment.user.username}</h3>
        </div>
        <h3 className="text-[#4661E6] font-semibold">Reply</h3>
      </div>
      <p>
        <span className="text-[#AD1FEA] font-bold">
          {comment.replyingTo ? `@${comment.replyingTo}` : ""}
        </span>{" "}
        {comment.content}
      </p>
    </>
  );
};

export default CommentContent;
