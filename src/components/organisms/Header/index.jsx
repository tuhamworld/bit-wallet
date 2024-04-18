import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import {
  BsThreeDots,
  BsThreeDotsVertical,
  BsTabletLandscape,
} from "react-icons/bs";
import { TfiNotepad } from "react-icons/tfi";
import { LuShare } from "react-icons/lu";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Header = () => {
  const [isMenu, setIsMenu] = useState(true);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div className="header">
      <IoIosArrowBack />
      <span className="text">Bitcoin Wallet</span>

      <BsThreeDotsVertical
        onClick={toggleMenu}
        className={isMenu ? "nav-icon" : "nav-menu__show"}
      />

      {/* Popup box  starts here */}
      <div className="nav-menu">
        <BsThreeDots
          onClick={toggleMenu}
          className={isMenu ? "nav-menu__show" : "nav-icon  nav-toggle-icon"}
        />

        <div className="mobile-tab">
          <span className="mobile-tab__cta">
            <a href="#">Edit</a>
            <BsTabletLandscape />
          </span>
          <span className="mobile-tab__cta">
            <a href="#">Courier info</a>
            <TfiNotepad />
          </span>
          <span className="mobile-tab__cta">
            <a href="#">Share</a>
            <LuShare />
          </span>
          <span className="mobile-tab__cta remove">
            <a href="#">Remove</a>
            <IoIosRemoveCircleOutline />
          </span>
        </div>
      </div>

      {/* Pop up box ends here */}
    </div>
  );
};

export default Header;
