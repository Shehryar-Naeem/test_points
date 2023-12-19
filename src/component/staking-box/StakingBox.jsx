import React from "react";
import { Image } from "../../assests/images";
import "./index.css";
import { Link } from "react-router-dom";
import { GoUnlock } from "react-icons/go";
import { MdOutlineDiamond } from "react-icons/md";
import { TbHeartRateMonitor } from "react-icons/tb";
import CustomeCheckBox from "../custome_checkbox";
import Popup from "../Popup";
const StakingBox = () => {
 
  return (
    <>

    <div className="card">
      <div className="top_bar">
        <CustomeCheckBox/>
        <div className="staking_days">
          <span className="icon">
            <MdOutlineDiamond />
          </span>
          <span className="text">+12/day</span>
        </div>
      </div>
      <Link to="/nft-detail">
        <img src={Image.Art} alt="nft" className="card_img" />
      </Link>
      <div className="card_body">
        <div className="card_content">
          <h4>ORIGO Origins NFT</h4>
          <span>#1243</span>
        </div>

        <button className="card_btn yellow" >staked</button>
        {/* <button className="card_btn white">listed</button> */}
        {/* yellow stake status */}
        <div className="stake_status yellow">
          <span className="text">CLAIM BONUS</span>
          <span className="icon yellow">
            {/* <GoUnlock className="icon-styles" /> */}
            <img
              src={Image.diamond_icon}
              alt="diamond_icon"
              className="diamond_icon"
            />
          </span>
        </div>

        {/* white stake status */}
        <div className="stake_status white">
          <span className="text">CLAIM BONUS</span>
          <span className="icon white">
            <img src={Image.diamond_icon} alt="diamond_icon" className="diamond_icon"/>
          </span>
        </div>

        {/* disable stake status */}
        <div className="stake_status white disable">
          <span className="text">CLAIM BONUS</span>
          <span className="icon white">
            <img src={Image.diamond_icon} alt="diamond_icon" className="diamond_icon"/>
          </span>
        </div>
      </div>
    </div>
    </>

  );
};

export default StakingBox;
