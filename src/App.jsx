import React from "react";
import Bitcoin from "./components/atoms/Bitcoin";
import TimeSeries from "./components/molecules/TimeSeries";
import Navigation from "./components/organisms/navigation";
import Cta from "./components/organisms/cta";
import BitcoinChart from "./components/organisms/BitcoinChart";


const App = () => {
  return (
    <>
      
      <section className="body">
     
      <Bitcoin />
      <TimeSeries />

        <BitcoinChart/>
        <Cta/>
      <Navigation />
      </section>
    </>
  );
};

export default App;
