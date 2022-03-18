import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { CryptoState } from "../../CryptoContext/CryptoContext";
import { Link } from "react-router-dom";
import "./Carousel.css";
import { TrendingCoins } from "../../Config/api";
import Slider from "react-slick";

// export const numberWithCommas = (x) => {
//   return x.toString().replace(/\B(?=(d{3})+(?!\d))/g, ",");
// };

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useContext(CryptoState);

  const fetchTrendingCoins = async (currency) => {
    const { data } = await new Promise((res, rej) => {
      setTimeout(() => {
        try {
          res(axios.get(TrendingCoins(currency)));
        } catch (err) {
          rej(console.log(err));
        }
      }, 10);
    });
    setTrending(data);
  };

  useEffect(() => {
    fetchTrendingCoins(currency);
  }, [currency]);

  const mystyle = {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <Slider className="slick_carousel" {...settings}>
      {trending.map((coin) => {
        let price24 = coin?.price_change_percentage_24h.toFixed(2);
        return (
          <Link className="coin_card" key={coin?.id} to={`/coins/${coin?.id}`}>
            <img height="80" src={coin?.image} alt={coin?.name} />
            <div style={mystyle}>
              <span style={{ textTransform: "uppercase" }}>
                {coin?.symbol}
                &nbsp;
                {price24 >= 0 ? (
                  <span style={{ color: "green" }}>{`+${price24} %`}</span>
                ) : (
                  <span style={{ color: "red" }}>{`-${price24} %`}</span>
                )}
              </span>
              <span
                style={{ fontSize: "18px", fontWeight: "400" }}
              >{`${symbol} ${coin?.current_price.toFixed(3)}`}</span>
            </div>
          </Link>
        );
      })}
    </Slider>
  );
};

export default Carousel;
