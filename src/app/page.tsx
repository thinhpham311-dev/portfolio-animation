'use client'
import React from 'react'
import { Hero, Skills, Encryption, Projects } from '@/components'
import tw, { styled, css } from 'twin.macro'

const MainStyled = styled.main(() => [
  tw`h-full w-full overflow-x-hidden`,
  css`
    div.wrapper-box{
      ${tw`flex flex-col xl:gap-20 md:gap-0 lg:gap-0 gap-0`}
    }
  `
])


const Home = () => (
  <MainStyled>
    <div className="wrapper-box">
      <Hero />
      <Skills />
      <Encryption />
      <Projects />
    </div>
  </MainStyled>
)

export default Home
