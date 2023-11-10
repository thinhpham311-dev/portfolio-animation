'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { BsStars } from 'react-icons/bs'

const HeroContent = () => (
    <motion.div
        initial="hidden"
        animate="visible"
        className="hero-inner"
    >
        <div className="hero-inner--text">
            <motion.div className="Welcome-box" variants={slideInFromTop}>
                <BsStars />
                <h1 className="Welcome-text">Front End Developer </h1>
            </motion.div>
            <motion.div className="hero-title" variants={slideInFromLeft(0.5)}>
                <span>
                    Providing
                    <span className="mask">
                        &nbsp;the best&nbsp;
                    </span><br />
                    project experience
                </span>
            </motion.div>
            <motion.p variants={slideInFromLeft(0.8)} className="hero-description">
                I&apos;m a Front End Developer with experience around 3 years in website,
                Check out my projects and skills
            </motion.p>
            <motion.a className="button-primary" variants={slideInFromLeft(1)}>
                Learn More
            </motion.a>
        </div>
        <motion.div className="hero-inner--image" variants={slideInFromRight(0.8)}>
            <Image src="/mainIconsdark.svg" alt="Icon" width={650} height={650} />
        </motion.div>
    </motion.div>
)

export default HeroContent
