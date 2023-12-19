import React from "react";
import "./index.css"
import WalletAddress from "../walletAddress";

const AddressTap = ({walletAddress}) => {
  return (
    <div className="address_tap">
      <WalletAddress walletAddress={walletAddress} />
    </div>
  );
};

export default AddressTap;
