"use client";

import Image from "next/image";
import Back from "../../../../public/assets/images/icon-back.svg";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
};

function BackButton(props: Props) {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between lg:justify-normal"
      onClick={() => router.back()}
    >
      <div className="relative rounded-full overflow-hidden">
        <div className="relative hover-effect h-[40px] w-[46px] rounded-full pink-gradient shadow-pink-bs1 md:h-[64px] md:w-[70px] lg:h-[100px] lg:w-[106px] cursor-pointer">
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2  -translate-y-1/2 transform md:h-[28px] md:w-[28px] lg:h-[38px] lg:w-[38px]">
            <Image className="" src={Back} alt="back" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end text-center md:justify-center lg:justify-center">
        <div className="relative">
          <h1 className="text-shadow text-hm md:text-hl lg:text-hxl">
            {props.title}
          </h1>
          <h1 className="gradient-text absolute top-0 text-hm md:text-hl lg:text-hxl">
            {props.title}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BackButton;
