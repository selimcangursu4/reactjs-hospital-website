import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ServicesTabSection from '../components/Home/ServicesTabSection'
import BeforeAfter from '../components/Home/BeforeAfter'
import CommentsVideo from '../components/Home/CommentsVideo'
import OrderServiceSection from '../components/Home/OrderServiceSection'
import WebformSection from '../components/WebformSection'
import AboutSection from '../components/Home/AboutSection'
import BrancheSection from '../components/Home/BrancheSection'
import FaqSection from '../components/Home/FaqSection'
const Home = () => {
  return (
    <>
      <HeroSection/>
      <ServicesTabSection/>
      <BeforeAfter/>
      <CommentsVideo/>
      <OrderServiceSection/>
      <WebformSection/>
      <AboutSection/>
      <BrancheSection/>
      <WebformSection/>
      <FaqSection/>
    </>
  )
}

export default Home
