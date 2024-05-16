"use client"
import React from 'react'

import Image from 'next/image'
import CoustomButton from './CoustomButton'

function Hero() {

    const handleScroll
     = () => {

    }
  return (
    <div className='hero'>
     <div className="flex-1 p-36 padding-x">
        <h1 className='hero__title'>
            Find, book, or rent a car -- quickly
            and easily!
        </h1>
        <p className='hero__subtitle'>
            streamline your car rental experience 
            with our effortles booking process.
        </p>
        <CoustomButton title="Explore Cars"
        containerStyle = "bg-primary-blue text-white rounded-full mt-10"
        handleClick = {handleScroll}
        />
     </div>
     <div className="hero__image-container">
        <div className="hero__image">
            <Image src="/hero.png" alt='hero image' fill className='object-contain'/>
            <div className="hero__image-overlay" />
        </div>
     </div>
    </div>
  )
}

export default Hero
