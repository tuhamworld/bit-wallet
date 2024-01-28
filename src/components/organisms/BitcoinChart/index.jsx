import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import axios from "axios";
import "./index.scss";

const BitcoinChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart",

          {
            params: {
              vs_currency: "usd",
              days: "10",
              interval: "daily",
            },
          }
        );
        // console.log(response);
        setData(response.data.prices);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="chart-container">
      <LineChart width={350} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="0" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="Linear" dataKey="1" stroke="#ff981e" />
      </LineChart>
    </div>
  );
};

export default BitcoinChart;
