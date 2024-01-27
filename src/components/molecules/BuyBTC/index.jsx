import React from "react";
import Button from "../../atoms/Button";
import "./index.scss";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const BuyBTC = () => {
  return (
    <div className="cta-box">
      <Button action="buy-btn" text={<PiCurrencyDollarSimpleBold />} />

      <span>Buy BTC</span>
    </div>
  );
};

export default BuyBTC;
