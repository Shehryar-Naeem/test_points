import React from "react";
import { Image } from "../../assests/images";
import "./index.css";
import { Link } from "react-router-dom";
import { MdOutlineDiamond } from "react-icons/md";
import AddressTap from "../addressTap/AddressTap";
import Account_Tap from "../CreateAccount_Btn/AccountBtn";


const Card = () => {
  const walletAddress = "0x4f74Ff01426f8941BE5dcaea8701effeBef0346B";
  return (
    <div className="card">
     <AddressTap walletAddress={walletAddress}/>
     {/* <Account_Tap/> */}
      <Link to="/nft-detail">
        <img src={Image.Art} alt="nft" className="card_img" />
      </Link>
      <div className="card_body">
        <div className="card_content">
          <h4>ORIGO Origins NFT</h4>
          <span>#1243</span>
        </div>

        <button className="card_btn yellow">staked</button>
        {/* <button className="card_btn white">listed</button> */}
      </div>
    </div>
  );
};

export default Card;
