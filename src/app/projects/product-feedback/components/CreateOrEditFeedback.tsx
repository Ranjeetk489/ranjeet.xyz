"use client";
import Image from "next/image";
import React, { useState } from "react";
import EditFeedback from "../../../../../public/assets/productAssets/shared/icon-edit-feedback.svg";
import NewFeedback from "../../../../../public/assets/productAssets/shared/icon-new-feedback.svg";
import Select from "./Select";
import Button from "./Button";
import { ProductRequest } from "../page";

const CreateOrEditFeedback = ({
  create,
  feedback,
}: {
  create: boolean;
  feedback: ProductRequest;
}) => {
  const [selectedCategory, setSelectedCategory] = useState(
    feedback?.category || "feature",
  );
  //   const [selectedFeedback, setSelectedFeedback] = useState({
  //     category: feedback.category,
  //     description: feedback.description,
  //     status: feedback.status,
  //     title: feedback.title,
  //   });
  const [selectedStatus, setSelectedStatus] = useState(
    feedback?.status || "planned",
  );
  console.log(feedback);

  return (
    <div className="bg-white text-[13px] rounded-[10px] p-6 my-14 flex flex-col gap-6 text-[#3A4374]">
      <Image
        className="-mt-11"
        width={40}
        height={40}
        src={create ? NewFeedback : EditFeedback}
        alt="icon"
      />
      <h2 className="text-[18px] font-bold">
        {create ? "Create New Feedback" : `Editing '${feedback.title}'`}
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold">Feedback Title</h4>
          <h5 className="text-[#647196]">Add a short, descriptive headline</h5>
        </div>
        <input className="h-12 w-full bg-[#F7F8FD] text-base text-[#3A4374] rounded-md p-4 outline-none focus:border border-[#4661E6]" />
      </div>
      <div className="flex flex-col gap-4">
        <h4 className="font-bold ">Category</h4>
        <h5 className="text-[#647196]">Choose a category for your feedback</h5>
        <Select
          options={["feature", "UI", "UX", "enhancement", "bug"]}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
        />
      </div>
      {!create && (
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Update Status</h4>
          <h5 className="text-[#647196]">Change feature state</h5>
          <Select
            options={["suggestion", "planned", "in-progress", "live"]}
            selected={selectedStatus}
            setSelected={setSelectedStatus}
          />
        </div>
      )}
      <div className="flex flex-col gap-4">
        <div>
          <h4 className="font-bold">Feedback Detail</h4>
          <h5 className="text-[#647196]">
            Include any specific comments on what should be improved, added,
            etc.
          </h5>
        </div>
        <textarea
          className="h-[120px] w-full bg-[#F7F8FD] rounded-md resize-none outline-none p-4 text-[#3A4374] focus:border border-[#4661E6]"
          rows={5}
          minLength={10}
          maxLength={200}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 text-center">
        <Button
          text={create ? "Add Feedback" : "Save Changes"}
          color="purple"
        />
        <Button text="Cancel" color="navy" />
        {!create && <Button text="Delete" color="red" />}
      </div>
    </div>
  );
};

export default CreateOrEditFeedback;
