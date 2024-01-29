import React from "react";
import Button from "../Button";
import { FaBitcoinSign } from "react-icons/fa6";
import "../../../scss/base/_bitcoinLogo.scss";


const BitcoinLogo = () => {
  return (
    <>
      <Button action="bitcoin" text={<FaBitcoinSign />} />
    </>
  );
};

export default BitcoinLogo;
