import React from "react";
import Button from "../../atoms/Button";
import { FaBitcoinSign } from "react-icons/fa6";
import "./index.scss";

const Bitcoin = () => {
  return (
    <>
      <Button action="bitcoin" text={<FaBitcoinSign />} />
    </>
  );
};

export default Bitcoin;
