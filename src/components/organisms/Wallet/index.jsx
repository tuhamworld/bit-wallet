import React, { useEffect, useState } from "react";
import BitcoinLogo from "../../atoms/BitcoinLogo";
import OvalButton from "../../atoms/OvalButton";
import { FaChevronDown } from "react-icons/fa";
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

  const btcBalance = 3.52902;
  const dollarBalance = btcPrice * btcBalance;

  return (
    <div className="wallet main-container">
      <div className="bitcoin-text">
        <span className="logo-text">
          <BitcoinLogo /> Bitcoin
        </span>
        <span className="bitcoin-text__btc">BTC</span>
      </div>

      <p className="wallet__btc">{`${btcBalance} BTC`}</p>

      <div className="wallet-balance">
        <span>{`${dollarBalance.toFixed(3)} USD`}</span>
        <OvalButton url="#" type="wallet-difference" text="-2.32%" />
      </div>

      <FaChevronDown className="arrow" />
    </div>
  );
};

export default Wallet;
