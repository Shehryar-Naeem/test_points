import React from 'react'
import "./index.css"
import PageHeader from '../../component/PagerHeader'

import StakingBox from '../../component/staking-box/StakingBox'
import Alert from '../../component/alert/Alert'
import Popup from '../../component/Popup'
const Staking = () => {
  const [popUpOpen ,setPopUpOpen] = React.useState(false)

  return (
    <>
    <div className='my_staking_container'>
      <PageHeader headerText={"staking"}/>
      <Alert/>
      <div className='staking_stats_container'>
        <div className='stats'>
          <span className='points'>340 (51%)</span>
          <span className='disc'>Total Staked</span>
        </div>
        <div className='stats'>
          <span className='points'>140,450</span>
          <span className='disc'>Total Points generated</span>
        </div>
       
        <button className='stake_btn' onClick={()=>setPopUpOpen(!popUpOpen)}>stake</button>
      </div>
      <div className='staking_container'>
        <StakingBox/>
        <StakingBox/>
        <StakingBox/>
        <StakingBox/>
        <StakingBox/>
      </div>
    </div>
    {popUpOpen && <Popup/>}
    </>

  )
}

export default Staking
