import React from "react";
import "./index.css";
import PageHeader from "../../component/PagerHeader";

import StakingBox from "../../component/staking-box/StakingBox";
import Leaderboard from "../../component/leaderboard/Leaderboard";
const Leaderborads = () => {
  return (
    <div className="leaderboard_container">
      <PageHeader headerText={"leaderboards"} />
      <div className="leaderboard_header">
        <div className="position">
          <span>position</span>
        </div>
        <div className="rank">
          <span>rank</span>
        </div>
        <div className="wallet_address">
          <span>holder</span>
        </div>
        <div className="points">
          <span>points</span>
        </div>
      </div>
      <div className="board_container">
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
        <Leaderboard />
      </div>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <Leaderboard current={"current"} />
      </div>
    </div>
  );
};

export default Leaderborads;
