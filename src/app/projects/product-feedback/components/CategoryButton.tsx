import React from "react";

interface ButtonProps {
  children: string;
  selected: boolean;
}

const CategoryButton: React.FC<ButtonProps> = ({ children, selected }) => {
  return (
    <div
      className={`inline-block px-4 py-[6px] text-[13px] capitalize h-[30px] rounded-[10px] cursor-pointer ${selected ? "bg-[#4661E6] text-white" : "bg-[#F2F4FF] text-[#4661E6]"} hover:bg-[#CFD7FF]`}
    >
      <h5>{children}</h5>
    </div>
  );
};

export default CategoryButton;
