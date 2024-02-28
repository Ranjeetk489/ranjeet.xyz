import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

const SmallButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  const style = {
    background: "linear-gradient(to bottom, #FE71FE 0%, #7199FF 100%)",
    color: "white",
    boxShadow: `inset 0px -6px 0px #9e2df54c `,
    alignSelf: "center",
  };

  return (
      <button className="uppercase rounded-full  self-center px-10 h-[94px] w-[94px]" style={style} onClick={onClick}>
        {children}
      </button>
  );
};

export default SmallButton;
