import React from "react";
import TimeSeries from "./components/molecules/TimeSeries";
import Navigation from "./components/organisms/Navigation";
import BitcoinChart from "./components/organisms/BitcoinChart";
import Cta from "./components/organisms/Cta";
import Wallet from "./components/organisms/Wallet";
import Header from "./components/organisms/Header";

const App = () => {
  return (
    <>
      <section className="home">
        <Header />
        <Wallet />
        <TimeSeries />
        <BitcoinChart />
        <Cta/>
        <Navigation />
      </section>
    </>
  );
};

export default App;
