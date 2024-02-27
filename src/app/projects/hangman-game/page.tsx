import { IMAGE_DOMAIN } from "@/utils/utils"
import Image from "next/image"

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[321px] h-[532px] relative bg-blue">
        <div>
          <h4>The</h4>
          <h1>Hangman</h1>
          <h4>Game</h4>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[200px] h-[200px] rounded-full relative bg-pink-400 shadow-pink-bs">
            <Image src={`${IMAGE_DOMAIN}/assets/play.svg`} alt="Hangman" height={40} width={40} className="absolute top-1/2 left-1/2" />
          </div>
          <button>How to play</button>
        </div>
      </div>
    </div>
  )
}

export default Page