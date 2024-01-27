import React from "react";
import Navigation from "./components/organisms/navigation";
import BuyBTC from "./components/atoms/BuyBTC";
import SellBTC from "./components/atoms/SellBTC";
import Bitcoin from "./components/atoms/Bitcoin";
import OvalButton from "./components/atoms/OvalButton";

const App = () => {
  return (
<>
<Navigation/>
     
      <BuyBTC/>
      <SellBTC />
      <Bitcoin />
      <OvalButton/>
</>
  )
};

export default App;
