import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { CryptoState } from "../../CryptoContext/CryptoContext";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { TrendingCoins } from "../../Config/api";
import "react-alice-carousel/lib/alice-carousel.css";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { symbol, currency } = CryptoState();

  const fetchTrendingCoins = async (currency) => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  };
  console.log(trending);

  useEffect(() => {
    fetchTrendingCoins(currency);
  }, [currency]);

  const myStyle = {
    marginTop: "0px",
    fontSize: "24px",
    fontWeight: 600,
  };

  const items = trending.map((coin) => {
    let price24 = coin?.price_change_percentage_24h.toFixed(2);

    return (
      <Link  key={coin?.id} className="coin_card" to={`/coins/${coin?.id}`}>
        <img height="80" src={coin?.image} alt={coin?.name} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ textTransform: "uppercase" }}>
            {coin?.symbol}
            &nbsp;
            {price24 >= 0 ? (
              <span style={{ color: "green" }}>{`+${price24} %`}</span>
            ) : (
              <span style={{ color: "red" }}>{`-${price24} %`}</span>
            )}
          </span>
          <span style={myStyle}>{`${symbol} ${numberWithCommas(
            coin?.current_price.toFixed(2)
          )}`}</span>
        </div>
      </Link>
    );
  });
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };
  return (
    <ContainerCorousel>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        responsive={responsive}
        disableButtonsControls
        autoPlay
        items={items}
      />
    </ContainerCorousel>
  );
};

export default Carousel;

const ContainerCorousel = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  margin-top: 40px;
`;
