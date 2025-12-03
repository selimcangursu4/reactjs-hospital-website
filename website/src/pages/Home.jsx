import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServicesTabSection from '../components/Home/ServicesTabSection'
import BeforeAfter from '../components/Home/BeforeAfter'
import CommentsVideo from '../components/Home/CommentsVideo'
import OrderServiceSection from '../components/Home/OrderServiceSection'
const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesTabSection/>
      <BeforeAfter/>
      <CommentsVideo/>
      <OrderServiceSection/>
    </>
  )
}

export default Home
