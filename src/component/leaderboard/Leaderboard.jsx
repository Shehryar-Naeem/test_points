import React from 'react'
import "./index.css"
import { Image } from '../../assests/images'
import WalletAddress from '../walletAddress'
import Rank from '../Rank'
const Leaderboard = ({current}) => {
const walletAddress="0X35E0F7DEEB022445FA277FBC4723B2EDDDF01B70";
  return (

       <div className={`single_leaderboard ${current}`}>
        <div className="position">
          <span>#1</span>
        </div>
        {/* <div className="rank">
          <span>gold</span>
        </div> */}
        <Rank/>
        <div className="wallet_address">
          <WalletAddress walletAddress={walletAddress}/> 
          <span className="wale_icon">
            <img src={Image.wale} alt='wale'/>
          </span>
        </div>
        <div className="points">
          <span>2344</span>
        </div>
      </div>
    
  )
}

export default Leaderboard
