import React from "react";
import "./index.css";
import Loader from "../loader";
import Alert from "../alert/Alert";
const Popup = () => {
  return (
    <div className="popup_container">
      <div className="box_container">
        <div className="loader_container">
          <Loader />
        </div>
        <div className="construction_container">
          <h2>staking in progress ...</h2>
          <h4>NFT(s) being staked:</h4>
          <ul>
            <li className="list">ORIGO Origins #123</li>
            <li className="list">ORIGO Origins #123</li>
            <li className="list">ORIGO Origins #123</li>
          </ul>
        </div>
        <Alert />
      </div>
    </div>
  );
};

export default Popup;
