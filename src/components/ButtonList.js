import React from "react";
import Button from "./Button";

const list = ["Naruto", "Ghibli Movies", "Jujutsu Kaisen", "Haikyuu"];

const ButtonList = () => {
  return (
    <div className="flex space-x-2">
      {list.map((item, i) => (
        <Button name={item} key={i} />
      ))}
    </div>
  );
};

export default ButtonList;
