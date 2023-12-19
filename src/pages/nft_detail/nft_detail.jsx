import React from "react";
import "./index.css";
import PageHeader from "../../component/PagerHeader";
import { Image } from "../../assests/images";
import { IoIosAdd } from "react-icons/io";
import { IoDiamondOutline } from "react-icons/io5";
import { PiCubeThin } from "react-icons/pi";
import Alert from "../../component/alert/Alert";
import Trait from "../../component/Trait";
const Nft_detail = () => {
  return (
    <div className="nft_detail_container">
      <PageHeader headerText={"my nft"} />
      <div className="nft_details">
        <div className="img_container">
          <img src={Image.Art} alt="art" />
        </div>
        <div className="content_container">
          <div className="detail_header_container">
            <div className="detail_header">
              <h4>view on OpenSea</h4>
              <span>staked</span>
            </div>
            <div className="title">
              <h3>origo origin nft</h3>
              <span>#1243</span>
            </div>
          </div>
          <div className="create_section">
            <p>create a token bound account</p>
            <div className="points">
              <span>+</span>
              <span>400</span>
              <span>
                <img src={Image.createDiamond} alt="create"/>
              </span>
            </div>
          </div>
          <Alert />
          <div className="trait_container">
            <h4>traits</h4>

            <div className="rarity_container">
              <Trait active={"active"} disc={"points"} points={14450}/> 
              <Trait />
              <Trait />
            </div>
            <div className="rarity_container">
              <Trait />
              <Trait />
              <Trait />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nft_detail;
