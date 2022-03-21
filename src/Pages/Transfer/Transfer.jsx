import { Container } from "@mui/material";
import "./Transfer.css";
import { useNavigate } from "react-router-dom";

export const FormFields = ({ placeholder, name }) => {
  return (
    <input className="input_field" autoFocus placeholder={placeholder} name={name} />
  );
};
const Transfer = () => {
const navigate = useNavigate();
    const connectWallet=()=>{
navigate("sent_crypto")
    }
    const sendCrypto=()=>{
      navigate("sent_crypto")

    }
  return (
    <Container
      style={{
        width: "50%",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ fontFamily: "MONTSERRAT" }}>Transfer Crypto</h2>
      <button
        className="launch_app"
        style={{ width: "100%", marginTop: "20px" }}
        onClick={connectWallet}
      >
        Connect Wallet
      </button>

      <form className="tranfer_form">
        <FormFields placeholder="Address To" name="address"  />
        <FormFields placeholder="Amount(ETH)" name="amount" />
        <FormFields placeholder="Keyword (GIF)" name="keyword" />
        <FormFields placeholder="Enter Message" name="message" />
        <hr style={{ color: "#ffffff", width: "100%", margin: "20px" }} />
        <button
          className="launch_app"
          style={{ width: "100%", margin: "10px" }}
          onClick={sendCrypto}
        >
          Send
        </button>
      </form>
    </Container>
  );
};
export default Transfer;
