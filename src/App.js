import "./App.css";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Transfer from "./Pages/Transfer/Transfer";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
      <MoralisProvider
        serverUrl="https://gdz9cz5n3rbc.usemoralis.com:2053/server"
        appId="oHRLKFpFKSlIVKH2i7q1cQeygmK1udaS1qaU2q7J"
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/coins/:id" element={<Detail/>} />
          {/* <Route path="/transfer" element={<Transfer />} /> */}
          <Route path="/send_crypto" element={<ComingSoon />} />
        </Routes>
        </MoralisProvider>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;

const MainContainer = styled.div`
  width:100%;
`;
