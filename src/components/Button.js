import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className=" py-1 px-3 border-2 bg-[#ffa07a] font-bold border-white text-white">
        {name}
      </button>
    </div>
  );
};

export default Button;
