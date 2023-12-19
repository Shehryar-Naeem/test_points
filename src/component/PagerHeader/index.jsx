import React from "react";
import "./index.css";
import { Image } from "../../assests/images";
const PageHeader = ({ headerText }) => {
  return (
    <h2 className="page_header">
      {headerText}
      <sup><img src={Image.HeaderTop} className="sup_img"/></sup>
    </h2>
  );
};

export default PageHeader;
