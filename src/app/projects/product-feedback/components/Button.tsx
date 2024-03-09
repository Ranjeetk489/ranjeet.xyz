import React from "react";

interface ButtonProps {
  text: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ text, color }) => {
  return (
    <div
      style={{
        background:
          color === "purple" ? "#AD1FEA" :
           color === "blue" ? "#4661E6" : "",
      }}
      className="py-[10px] px-4 rounded-[10px] font-bold text-[#F2F4FE] cursor-pointer"
    >
      {text}
    </div>
  );
};

export default Button;
