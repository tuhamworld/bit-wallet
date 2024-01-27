import React from "react";
import Bitcoin from "./components/atoms/Bitcoin";
import BuyBTC from "./components/molecules/BuyBTC";
import SellBTC from "./components/molecules/SellBTC";
import TimeSeries from "./components/molecules/TimeSeries";
import Navigation from "./components/organisms/navigation";
import Cta from "./components/organisms/cta";


const App = () => {
  return (
    <>
      
      <section className="body">
      <Navigation />
     
      <Bitcoin />
      <TimeSeries />

        <Cta/>
      </section>
    </>
  );
};

export default App;
