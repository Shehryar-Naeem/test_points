import React from "react";
import "./index.css";
import { PiCubeThin } from "react-icons/pi";
const Trait = ({active,disc,points}) => {
  
  return (
    <div className={`rarity_box ${active}`}>
      <div className="rairt_box_header">
        <span className="text">{disc ===undefined ?"trait":disc}</span>
        <span>
          <PiCubeThin />
        </span>
      </div>
      <div className="rarity-disc">
        <span>{points ===undefined ?"hidden":points}</span>
      </div>
    </div>
  );
};

export default Trait;
