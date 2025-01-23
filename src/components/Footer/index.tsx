import React from 'react'
import { FooterContainer, FooterImage } from './styles'
import rodape from '../../assets/images/rodape.png' // Importe a imagem

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterImage src={rodape} alt="Rodapé" />
    </FooterContainer>
  )
}

export default Footer
