import React from "react";
import "./index.scss";

import Button from "../Button";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const SellBTC = () => {
  return (
    <>
      <Button action="sell-btn" text={<PiCurrencyDollarSimpleBold />} />
    </>
  );
};

export default SellBTC;