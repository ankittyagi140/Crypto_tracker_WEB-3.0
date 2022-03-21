import "./Detail.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../../Config/api";
import { LinearProgress } from "@mui/material";
import CoinChart from "../../Components/CoinChart/CoinChart";
import CoinDetails from "../../Components/CoinDetails/CoinDetails";
import { CryptoState } from "../../CryptoContext/CryptoContext";
import HocMillion from "../../Components/Hoc/HocMillion";

const Detail = ({ props }) => {
  const [coinData, setCoinData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const { currency, symbol } = useContext(CryptoState);

  const fetchCoinDetails = async (id) => {
    const { data } = await new Promise((res) => {
      res(axios.get(SingleCoin(id)));
    });
    setCoinData(data);
  };

  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(2) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(2) + "M"; // convert to M for number from > 1 million
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  };
  console.log(coinData);
  console.log(props)

  useEffect(() => {
    setIsLoading(true);
    fetchCoinDetails(id);
    setIsLoading(false);
  }, []);

  return (
    <div className="info_container">
      <div className="heading">
        <span className="font_sw">
          Current price: {symbol} {coinData?.market_data?.current_price?.usd}
        </span>
        <span>
          Market Cap: {numFormatter(coinData?.market_data?.market_cap?.usd)}
        </span>
        <span>
          ATH: {symbol} {coinData?.market_data?.ath?.usd}
        </span>
      </div>
      {isLoading ? (
        <LinearProgress style={{ color: "gold" }}></LinearProgress>
      ) : (
        <div className="main_container">
          <CoinDetails coinData={coinData} />
          <CoinChart coinData={coinData} />
        </div>
      )}
    </div>
  );
};
export default Detail;
