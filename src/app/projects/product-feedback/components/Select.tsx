"use client";
import React, { useState } from "react";

const Select = () => {
  const [selectedCategory, setSelectedCategory] = useState("Most Upvotes");
  const options = [
    "Most UpVotes",
    "Least Upvotes",
    "Most Comments",
    "Least Comments",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <select
      className="cursor-pointer bg-transparent font-bold"
      value={selectedCategory}
      onChange={handleChange}
    >
      {options.map((category, index) => (
        <option className="cursor-pointer" key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Select;
