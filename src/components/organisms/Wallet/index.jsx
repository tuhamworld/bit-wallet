import React, { useEffect, useState } from "react";
import BitcoinLogo from "../../atoms/BitcoinLogo";
import OvalButton from "../../atoms/OvalButton";
import axios from "axios";
import "./index.scss";

const Wallet = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  useEffect(() => {
    const fetchBtcPrice = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
        );
        setBtcPrice(response.data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchBtcPrice();
  }, []);

  return (
    <div className="wallet">
      <div className="bitcoin-text">
        <span className="logo-text">
          <BitcoinLogo /> Bitcoin
        </span>
        <span className="bitcoin-text__btc">BTC</span>
      </div>

          <p className="wallet__btc">3.529020 BTC</p>
          
      <div className="wallet-balance">
        
              <span>${btcPrice * 3.52902}</span>
              <OvalButton
                  url="#"
                  type="wallet-difference"
                  text="-2.32%"
              />
      </div>
    </div>
  );
};

export default Wallet;
