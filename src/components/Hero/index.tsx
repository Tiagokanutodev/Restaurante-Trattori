import React from 'react'
import HeroImage from '../../assets/images/Hero.png'
import { HeroContainer, HeroImg } from './styles'

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroImg src={HeroImage} alt="Hero" />
    </HeroContainer>
  )
}

export default Hero
