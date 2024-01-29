import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <IoIosArrowBack />
      <span className="text">Bitcoin Wallet</span>
      <BsThreeDotsVertical />
    </div>
  );
};

export default Header;
