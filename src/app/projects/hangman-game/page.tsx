import { IMAGE_DOMAIN } from "@/utils/utils";
import Image from "next/image";
import Button from "../../../../components/Button";

const Page = () => {
  return (
    <div
      className="absolute mt-52 left-1/2 -translate-x-1/2 "
      style={{
        background: "#140e66b2",
        borderRadius: "48px",
        padding: "0px 4px 10px 4px",
      }}
    >
      <div
        className="-mt-1 rounded-[48px] bg-gradient-to-b bg-opacity-15 from-[#344ABA] to-[#001479af] flex flex-col items-center gap-14 w-80 sm:w-[592px] h-[481px] sm:h-[500px]"
        style={{
          boxShadow: `inset 3px 12px 0 #2463FF, inset -3px 12px 0 #2463FF `,
        }}
      >
        <div className="uppercase text-3xl sm:text-4xl text-white relative -mt-12 sm:-mt-24">
          <div className="relative ml-12 sm:ml-16 -mb-6 sm:-mb-9">
            <h4 className="text-shadow">The</h4>
            <h4 className="absolute top-0">The</h4>
          </div>
          <div className="relative capitalize">
            <h4 className="text-shadow text-8xl sm:text-9xl">hangman</h4>
            <h4 className="absolute top-0 gradient-text text-8xl sm:text-9xl">hangman</h4>
          </div>
          <div className="relative ml-40 sm:ml-52 -mt-3 sm:-mt-4">
            <h4 className="text-shadow">game</h4>
            <h4 className="absolute top-0">game</h4>
          </div>
        </div>
        <div
          style={{
            background: "#243041",
            borderRadius: "200px",
            padding: "1px 4px 10px 4px",
          }}
        >
          <div
            className="w-40 sm:w-52 h-40 sm:h-52 rounded-full pink-gradient flex justify-center items-center"
            style={{
              boxShadow: `inset 3px -12px 0 #9D2DF5, inset -3px -12px 0 #9D2DF5 `,
            }}
          >
            <Image
              src={`${IMAGE_DOMAIN}/assets/play.svg`}
              alt="Play"
              height={50}
              width={52}
              className="h-12 sm:h-[62px] w-14 sm:w-16"
            />
          </div>
        </div>
        <Button color="blue">How to play</Button>
      </div>
    </div>
  );
};

export default Page;
