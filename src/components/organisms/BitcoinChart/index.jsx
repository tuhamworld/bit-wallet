import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";



const BitcoinChart = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",

  //         {
  //           params: {
  //             vs_currency: "usd",
  //             days: "10",
  //             interval: "daily",
  //           },
  //         }
  //       );
  //       // console.log(response);
  //       setData(response.data.prices);
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // return (
  //   <div className="chart-container main-container">
  //     <ResponsiveContainer width="100%" height={200}>
  //       <LineChart data={data}>
  //         <CartesianGrid strokeDasharray="3 3" />
  //         <XAxis dataKey="date" />
  //         <YAxis />
  //         <Tooltip />
  //         <Legend />
  //         <Line type="Linear" dataKey="1" stroke="#ff981e" />
  //       </LineChart>
  //     </ResponsiveContainer>
  //   </div>
  // );


  //  Alternative way of making this works

  const data = [
    { time: 'Day', value: 3.529020 },
    { time: 'Week', value: 3.483 }, // Assuming a lower value for the week
    { time: 'Month', value: 3.612 }, // Assuming a higher value for the month
    { time: 'Year', value: 3.289 }, // Assuming a lower value for the year
  ];  



  
  return (

    <ResponsiveContainer width="90%" height={200} >

    <LineChart data={data}>
      <XAxis dataKey="time" />
      <YAxis domain={['auto', 'auto']} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
    </ResponsiveContainer>
  );


};

export default BitcoinChart;
