import Image from "next/image";
import Link from "next/link";
import React from "react";
import LeftArrow from "../../../../../../public/assets/productAssets/shared/icon-arrow-left.svg";
import CreateOrEditFeedback from "../../components/CreateOrEditFeedback";
import { GetData } from "../../page";

const page = async ({ params }: { params: { task: string } }) => {
  const newFeedback = params.task === "addFeedback" ? true : false;
  const data = await GetData()

  return (
    <div className="bg-[#F7F8FD] px-6 py-8">
      <Link
        href={`${process.env.NEXT_PUBLIC_BASE_API_URL}/projects/product-feedback${newFeedback ? '' : '/feedbackDetail/' + params.task}`}
        className="flex gap-4 items-center"
      >
        <Image src={LeftArrow} alt="<" />
        <h5 className="text-[13px] font-bold text-[#647196]">Go Back</h5>
      </Link>
      <CreateOrEditFeedback create={newFeedback} feedback={data.productRequests.filter((req) => req.id === Number(params.task))[0]} />
    </div>
  );
};

export default page;
