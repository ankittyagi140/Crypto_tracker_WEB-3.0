import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { CryptoState } from "../../CryptoContext/CryptoContext";
import { useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = useContext(CryptoState);

  const handelClick = () => {
    navigate("transfer");
  };
  return (
    <NavBar>
      <Logo
        aria-label="logo home page"
        tabIndex="0"
        onClick={() => {
          navigate("/");
        }}
      >
        Crypto@Tech
      </Logo>
      <Navitems>
        <button className="launch_app" onClick={handelClick}>
          Launch App
        </button>
        <select
          className="drop-down"
          value={currency}
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          <option value={"USD"}>USD</option>
          <option value={"INR"}>INR</option>
        </select>
      </Navitems>
    </NavBar>
  );
};
export default Header;
const NavBar = styled.div`
  z-index: 10;
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 3px 6px;
  @media (max-width: 680px) {
    flex-direction: column;
  }
`;
const Logo = styled.div`
  color: #006f8f;
  font-size: 24px;
  font-family: Montserrat;
  cursor: pointer;
  font-weight: bold;
`;
const Navitems = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 680px) {
    margin-top: 10px;
  }
`;
