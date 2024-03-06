import React from "react";
import "./style.css";

const page = () => {
  return (
      <div style={{ width: 255, height: 137, position: "relative" }}>
        <div
          style={{
            width: 255,
            height: 137,
            left: 0,
            top: 0,
            position: "absolute",
            background:
              "radial-gradient(29.97% 29.97% at 30.89% 11.95%, #E84DB4 0%, #A337F6 53%, #28A7ED 100%)",
            borderRadius: 10,
          }}
        />
        <div
          style={{
            width: 255,
            height: 137,
            left: 0,
            top: 0,
            position: "absolute",
            background:
              "radial-gradient(29.97% 29.97% at 30.89% 11.95%, #E84D70 0%, #A337F6 53%, #28A7ED 100%)",
            borderRadius: 10,
          }}
        />
      </div>
  );
};

export default page;
