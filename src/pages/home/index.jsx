import React from 'react'
import "./index.css"
import PageHeader from '../../component/PagerHeader'
import Card from '../../component/card'
import Alert from '../../component/alert/Alert'
const Home = () => {
  return (
    <div className='my-nft_container'>
      <PageHeader headerText={"my nfts"}/>
      <Alert/>
      <div className='card_container'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Home
