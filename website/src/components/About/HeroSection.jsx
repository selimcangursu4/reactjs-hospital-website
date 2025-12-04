import React from 'react'
import AboutHeroBg from '../../assets/about-hero-bg.jpg'

const HeroSection = () => {
  return (
    <section
      className="w-full h-[45vh] md:h-[45vh] lg:h-[45vh] bg-center bg-cover bg-no-repeat relative flex items-end"
      style={{ backgroundImage: `url(${AboutHeroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-white text-3xl md:text-3xl font-bold tracking-wide drop-shadow-lg">
          Kurumsal Bilgiler
        </h3>
      </div>
    </section>
  )
}

export default HeroSection
