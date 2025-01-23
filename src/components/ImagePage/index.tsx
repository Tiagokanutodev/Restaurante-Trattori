import React from 'react'
import { ImagePageContainer, Image, FooterWrapper } from './styles'
import HeaderImage from '../../assets/images/cabecalho.png'
import ApresentacaoImage from '../../assets/images/apresentacao.png'
import DishSection from '../DishSection' // Importando a nova seção
import Footer from '../Footer' // Importando o rodapé

const ImagePage: React.FC = () => {
  return (
    <ImagePageContainer>
      <Image src={HeaderImage} alt="Cabeçalho" />
      <Image src={ApresentacaoImage} alt="Apresentação" />
      <DishSection /> {/* A grid de pratos */}
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </ImagePageContainer>
  )
}

export default ImagePage
