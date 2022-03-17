import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { CryptoState } from "../../CryptoContext/CryptoContext";
const Header = () => {
  const navigate = useNavigate();
  const { currency, setCurrency } = CryptoState();
  return (
    <NavBar>
      <Logo
        onClick={() => {
          navigate("/");
        }}
      >
        Crypto Tr@cker
      </Logo>
      <select className="drop-down" value={currency} onChange={(e)=>{setCurrency(e.target.value)}}>
        <option value={"USD"}>USD</option>
        <option value={"INR"}>INR</option>
      </select>
    </NavBar>
  );
};
export default Header;
const NavBar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(64, 64, 64, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
`;
const Logo = styled.div`
  color: gold;
  font-size: 24px;
  font-family: Montserrat;
  cursor: pointer;
  font-weight: bold;
`;
