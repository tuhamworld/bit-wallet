import React from "react";
import Button from "../Button";
import "./index.scss";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

const BuyBTC = () => {
    return (
        <>
            <Button
                action="buy-btc"
                text={<PiCurrencyDollarSimpleBold/>}
            />
        </>
    )
}

export default BuyBTC;