'use client'
import React from 'react'
import { HeroWrapper } from './styles'
import HeroContent from './content'


const Hero = () => (
    <HeroWrapper>
        <video autoPlay muted loop>
            <source src="/blackhole.webm" type="video/webm" />
        </video>
        <HeroContent />
    </HeroWrapper>
)

export default Hero
