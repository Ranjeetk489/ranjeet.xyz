import { IMAGE_DOMAIN } from "@/utils/utils"
import Image from "next/image"

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[321px] h-[532px] relative">
      {/* <div>
          <h4>The</h4>
          <h1>Hangman</h1>
          <h4>Game</h4>
        </div>
        <div className="flex justify-center items-center">
            <div className="w-[200px] h-[200] rounded-full relative">
                <Image src={`${IMAGE_DOMAIN}/assets/hangman.png`} alt="Hangman" layout="fill" objectFit="cover" />
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Page