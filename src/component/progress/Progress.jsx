import React, { useEffect, useRef } from "react";
import WalletAddress from "../walletAddress";
import { Image } from "../../assests/images";
import "./index.css";
import Rank from "../Rank";

const Progress = () => {
  const progressStats= useRef(null)
  const walletAddress = "0x4f74Ff01426f8941BE5dcaea8701effeBef0346B";
  useEffect(() => {
    if (progressStats.current) {
      // Access the current property of the ref to get the DOM element
      const progressElement = progressStats.current;

      // Change the style using the style property
     
      progressElement.style.width = '70%';
      // Add more style properties as needed
    }
  }, []);
  return (
    <div className="progress_container">
      <div className="wallet_with_rank">
        <div className="address_container">
          <span>
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="wallet_icon"
            >
              <path
                d="M12.7628 4.4375V3C12.7628 2.29994 12.7628 1.9499 12.6208 1.68251C12.4959 1.44731 12.2965 1.25608 12.0513 1.13624C11.7726 1 11.4077 1 10.6779 1H3.12017C2.39039 1 2.0255 1 1.74676 1.13624C1.50157 1.25608 1.30223 1.44731 1.1773 1.68251C1.03528 1.9499 1.03528 2.29993 1.03528 3V9C1.03528 9.70006 1.03528 10.0501 1.1773 10.3175C1.30223 10.5527 1.50157 10.7439 1.74676 10.8638C2.0255 11 2.39039 11 3.12017 11L10.6779 11C11.4077 11 11.7726 11 12.0513 10.8638C12.2965 10.7439 12.4959 10.5527 12.6208 10.3175C12.7628 10.0501 12.7628 9.70007 12.7628 9V7.5625M9.50516 6C9.50516 5.70959 9.50516 5.56439 9.5302 5.44364C9.63302 4.94777 10.0371 4.56015 10.554 4.46152C10.6799 4.4375 10.8312 4.4375 11.134 4.4375H12.437C12.7398 4.4375 12.8911 4.4375 13.017 4.46152C13.5339 4.56015 13.938 4.94777 14.0408 5.44364C14.0659 5.56439 14.0659 5.70959 14.0659 6C14.0659 6.29041 14.0659 6.43561 14.0408 6.55636C13.938 7.05223 13.5339 7.43985 13.017 7.53848C12.8911 7.5625 12.7398 7.5625 12.437 7.5625H11.134C10.8312 7.5625 10.6799 7.5625 10.554 7.53848C10.0371 7.43985 9.63302 7.05223 9.5302 6.55636C9.50516 6.43561 9.50516 6.29041 9.50516 6Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>

          <WalletAddress walletAddress={walletAddress} color={"yellow"} />
        </div>
        <div className="side_rank">
        <Rank/>
        </div>
      </div>
      <div className="progress_stats_container">
        <div className="progress_bar">
          <div className="bar">

          </div>
          <div className="progress_percentage" ref={progressStats}>

          </div>
        </div>
        <div className="stats">
          <span className="txt">progress</span>
          <span className="points">240/500</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
