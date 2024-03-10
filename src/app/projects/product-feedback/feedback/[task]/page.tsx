"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftArrow from "../../../../../../public/assets/productAssets/shared/icon-arrow-left.svg";
import AddFeedback from "../../../../../../public/assets/productAssets/shared/icon-new-feedback.svg";
import EditFeedback from "../../../../../../public/assets/productAssets/shared/icon-edit-feedback.svg";
import Button from "../../components/Button";

const page = ({ params }: { params: { task: string } }) => {
  const newOrEdit = params.task === "addFeedback" ? true : false;

  return (
    <div className="bg-[#F7F8FD] px-6 py-8">
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/product-feedback`}
        className="flex gap-4 items-center"
      >
        <Image src={LeftArrow} alt="<" />
        <h5 className="text-[13px] font-bold text-[#647196]">Go Back</h5>
      </Link>
      <div className="bg-white text-[13px] rounded-[10px] p-6 my-14 flex flex-col gap-6">
        <Image
            className="-mt-11"
          width={40}
          height={40}
          src={newOrEdit ? AddFeedback : EditFeedback}
          alt="icon"
        />
        <h2 className="text-[18px] font-bold">
          {newOrEdit ? "Create New Feedback" : `Editing`}
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-[#3A4374]">Feedback Title</h4>
            <h5 className="text-[#647196]">
              Add a short, descriptive headline
            </h5>
          </div>
          <input className="h-12 w-full bg-[#F7F8FD] rounded-md" />
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-[#3A4374]">Category</h4>
        </div>
        {!newOrEdit && (
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-[#3A4374]">Update Status</h4>
            <h5 className="text-[#647196]">Change feature state</h5>
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <h4 className="font-bold text-[#3A4374]">Feedback Detail</h4>
            <h5 className="text-[#647196]">
              Include any specific comments on what should be improved, added,
              etc.
            </h5>
          </div>
          <textarea
            className="h-[120px] w-full bg-[#F7F8FD] rounded-md"
            rows={5}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 text-center">
        <Button
          text={newOrEdit ? "Add Feedback" : "Save Changes"}
          color="purple"
        />
        <Button
          text='Cancel'
          color="navy"
        />
        {!newOrEdit && (
            <Button
            text='Delete'
            color="red"
          />
        ) }
        </div>
      </div>
    </div>
  );
};

export default page;
