import React, { useEffect, useState } from "react";
import BitcoinLogo from "../../atoms/BitcoinLogo";
import OvalButton from "../../atoms/OvalButton";
import { FaChevronDown } from "react-icons/fa";
import Cta from "../Cta";
import axios from "axios";

const Wallet = () => {
  const [btcPrice, setBtcPrice] = useState(null);
  const [doMore, setDoMore] = useState(false);

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
  const toggleCta = () => {
    setDoMore(!doMore);
  };

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

      <FaChevronDown onClick={toggleCta} className={doMore ? "downArrow" : "arrow"} />

      <div className="show-cta">{doMore ? <Cta /> : ""}</div>
    </div>
  );
};

export default Wallet;
