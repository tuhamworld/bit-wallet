import React from "react";
import TimeSeries from "./components/molecules/TimeSeries";
import Navigation from "./components/organisms/navigation";
import Cta from "./components/organisms/cta";
import BitcoinChart from "./components/organisms/BitcoinChart";
import Wallet from "./components/organisms/Wallet";

const App = () => {
  return (
    <>
      <section className="body">
       
        <Wallet/>
        <TimeSeries />
        <BitcoinChart />
        <Cta />
        <Navigation />
      </section>
    </>
  );
};

export default App;
