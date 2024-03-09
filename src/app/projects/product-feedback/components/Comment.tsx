import Image from "next/image";
import React from "react";

interface CommenProps {
  id?: number;
  replyingTo?: string;
  content: string;
  user: {
    image: string;
    name: string;
    username: string;
  };
}

const Comment: React.FC<CommenProps> = (props) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <Image
          className="rounded-full"
          width={40}
          height={40}
          src={`/assets/productAssets${props.user.image.slice(8)}`}
          alt="Dp"
        />
        <div className="ml-4 mr-auto">
          <h2 className="text[#3A4374] font-bold">{props.user.name}</h2>
          <h3 className="text-[#647196]">@{props.user.username}</h3>
        </div>
        <h3 className="text-[#4661E6] font-semibold">Reply</h3>
      </div>
      <p className="text-[#647196]">{props.content}</p>
    </>
  );
};

export default Comment;
