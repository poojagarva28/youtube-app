import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" py-1 px-3 border-2 bg-[#69d2e7] font-bold border-white text-black">
        {name}
      </button>
    </div>
  );
};

export default Button;
