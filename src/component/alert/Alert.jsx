import React from 'react'
import { IoAlertOutline } from "react-icons/io5";
import "./index.css"
const Alert = () => {
  return (
    <div className='alert_container'>
      <span className='alet-icon'><IoAlertOutline/></span>
      <span className='text'>connect your wallet</span>
    </div>
  )
}

export default Alert
