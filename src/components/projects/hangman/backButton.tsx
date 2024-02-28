"use client"

import Image from "next/image"
import Back from "../../../../public/assets/images/icon-back.svg";
import { useRouter } from "next/navigation";

type Props = {
    title: string,
}

function BackButton(props: Props) {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between lg:justify-normal" onClick={() => router.back()} >
            <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] shadow-pink-bs1 relative w-[46px] h-[40px] md:w-[70px] md:h-[64px] lg:w-[106px] lg:h-[100px] rounded-full">
                <div className="h-5 w-5 lg:h-[38px] lg:w-[38px] md:h-[28px] md:w-[28px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Image
                        className=""
                        src={Back}
                        alt="back"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end md:justify-center text-center lg:justify-center">
                <div className="relative">
                    <h1 className="text-shadow lg:text-hxl text-hm md:text-hl">{props.title}</h1>
                    <h1 className="absolute top-0 gradient-text lg:text-hxl text-hm md:text-hl">{props.title}</h1>
                </div>
            </div>
        </div>
    )
}

export default BackButton