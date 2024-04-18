import React from "react";
import TimeSeries from "./components/molecules/TimeSeries";
import Navigation from "./components/organisms/navigation";
import BitcoinChart from "./components/organisms/BitcoinChart";
import Wallet from "./components/organisms/Wallet";
import Header from "./components/organisms/Header";

const App = () => {
  return (
    <>
      <section className="body">
        <Header />
        <Wallet />
        <TimeSeries />
        <BitcoinChart />
        <Navigation />
      </section>
    </>
  );
};

export default App;
