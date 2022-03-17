import "./App.css";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import styled from 'styled-components';

function App() {
  
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/coins/:id" element={<Detail />} />
        </Routes>
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;

const MainContainer = styled.div`
background-color:#14161a;
color:#ffffff;
min-height:100vh;
`
