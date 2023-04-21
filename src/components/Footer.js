import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" py-2 bg-[#69d2e7] text-center text-white font-bold text-2xl">
      Made with 💙 by{" "}
      <Link to="https://poojagarva28.github.io/myportfolio/" target="_blank">
        Pooja Garva
      </Link>
    </div>
  );
};

export default Footer;
