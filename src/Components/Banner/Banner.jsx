import React from "react";
import styled from "styled-components";
import "./Banner.css";
import Carousel from "../Carousel/Carousel";

function Banner() {
  return (
    <ContainerBanner>
      <div className="container_items">
        <h1>Crypto Tracker</h1>
        <span>
          Get All the Information Regrding Your Favaourite Crypto currency
        </span>
        <Carousel/>
      </div>
    </ContainerBanner>
  );
}

export default Banner;

const ContainerBanner = styled.div`
  height: 100vh;
  background: url("./images/banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
