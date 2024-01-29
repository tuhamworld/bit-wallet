import React from "react";
import BuyBTC from "../../molecules/BuyBTC";
import SellBTC from "../../molecules/SellBTC";

const Cta = () => {
  return (
    <div className="cta-container main-container">
      <BuyBTC />
      <SellBTC />
    </div>
  );
};

export default Cta;
