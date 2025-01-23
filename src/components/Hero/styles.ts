import styled from 'styled-components'

export const HeroContainer = styled.div`
  height: 100%; /* Garantir que ocupe 100% da altura da tela */
  display: flex;
  flex-direction: column; /* Para garantir que fiquem uma abaixo da outra */
  justify-content: flex-start; /* Alinha as imagens ao topo */
  align-items: center;
  overflow: hidden; /* Para evitar que a imagem se estenda além da tela */
  padding-top: 0;
`

export const HeroImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  margin-bottom: 0; /* Para evitar margem extra entre as imagens */
`
