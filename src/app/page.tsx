'use client'
import React from 'react'
import { Hero, Skills, Encryption, Projects } from '@/components'
import tw, { styled, css } from 'twin.macro'

const MainStyled = styled.main(() => [
  tw`h-full w-full`,
  css`
    div.wrapper-box{
      ${tw`flex flex-col gap-20`}
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
