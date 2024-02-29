import Image from "next/image";
import React from "react";
import MenuIcon from "../../../../public/assets/images/icon-menu.svg";

const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-[#FE71FE] to-[#7199FF] rounded-full w-10 h-10 flex justify-center items-center">
      <Image src={MenuIcon} alt="menu" width={16} height={14} />
    </div>
  );
};

export default Menu;
