import React from "react";
const WalletAddress = ({ walletAddress, color }) => {
  // Extract the first six and last four characters
  const firstSix = walletAddress.substring(0, 6);
  const lastFour = walletAddress.substring(walletAddress.length - 4);

  // Calculate the number of characters to hide

  // Replace characters in between with dots
  const dots = "...";
  const maskedAddress = `${firstSix}${dots}${lastFour}`;

  return <span className={`text ${color}`}>{maskedAddress}</span>;
};
export default WalletAddress;
