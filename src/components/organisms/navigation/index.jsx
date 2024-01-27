import React, { useState } from "react";
import { PiWalletFill } from "react-icons/pi";
import { FaCompass } from "react-icons/fa";
import { FaBell, FaGear } from "react-icons/fa6";

const Navigation = () => {
  return (
    <nav>
      <a href="#wallet">
        <PiWalletFill />
      </a>
      <a href="#">
        <FaCompass />
      </a>
      <a href="#">
        <FaBell />
      </a>
      <a href="#">
        <FaGear />
      </a>
    </nav>
  );
};

export default Navigation;
