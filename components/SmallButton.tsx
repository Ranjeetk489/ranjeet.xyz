import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
}

const SmallButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  const style = {
    background: "linear-gradient(to bottom, #FE71FE 0%, #7199FF 100%)",
    color: "white",
    borderRadius: "100px",
    boxShadow: `inset 0px -6px 0px #9e2df54c `,
  };

  return (
      <button className="uppercase flex items-center" style={style} onClick={onClick}>
        {children}
      </button>
  );
};

export default SmallButton;
