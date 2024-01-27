import React from "react";
import BuyBTC from "../../molecules/BuyBTC";
import SellBTC from "../../molecules/SellBTC";
import "./index.scss";

const Cta = () => {
  return (
    <div className="cta-container">
      <BuyBTC />
      <SellBTC />
    </div>
  );
};

export default Cta;
