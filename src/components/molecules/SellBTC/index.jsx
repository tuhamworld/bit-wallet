import React from "react";

import Button from "../../atoms/Button";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const SellBTC = () => {
  return (
    <div className="cta-box">
      <Button action="sell-btn" text={<PiCurrencyDollarSimpleBold />} />

      <span>Sell BTC</span>
    </div>
  );
};

export default SellBTC;
