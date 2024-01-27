import React, { useState } from "react";
import { PiWalletFill } from "react-icons/pi";
import { FaCompass } from "react-icons/fa";
import { FaBell, FaGear } from "react-icons/fa6";
import "./index.scss";

const Navigation = () => {
  const [activeNav, setActiveNav] = useState("#wallet");

  return (
    <nav>
      <a
        href="#wallet"
        onClick={() => setActiveNav("#wallet")}
        className={activeNav === "#wallet" ? "active" : ""}
      >
        <PiWalletFill />
      </a>
      <a
        href="#learn"
        onClick={() => setActiveNav("#learn")}
        className={activeNav === "#learn" ? "active" : ""}
      >
        <FaCompass />
      </a>

      <a
        href="#notification"
        onClick={() => setActiveNav("#notification")}
        className={activeNav === "#notification" ? "active" : ""}
      >
        <FaBell />
      </a>

      <a
        href="#settings"
        onClick={() => setActiveNav("#settings")}
        className={activeNav === "#settings" ? "active" : ""}
      >
        <FaGear />
      </a>
    </nav>
  );
};

export default Navigation;
