"use client";
import React, { useState } from "react";
import Button from "./Button";

const AddComment = () => {
  const [comment, setComment] = useState("");
  return (
    <div className="bg-white text-[13px] rounded-[10px] p-6 flex flex-col gap-6 ">
      <h3 className="text-[#3A4374] text-[18px] font-bold">Add Comment</h3>
      <textarea
        className="bg-[#F7F8FD] p-4 h-20"
        name="Add Comment"
        rows={2}
        maxLength={250}
        placeholder="Type your comment here"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <div className="-mt-2 flex justify-between items-center">
        <h5>{250 - comment.length} Characters left</h5>
        <Button text="Post Comment" color="purple" />
      </div>
    </div>
  );
};

export default AddComment;
