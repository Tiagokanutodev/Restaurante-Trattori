import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
  background-color: ${cores.corDeFundo};
  position: relative;
`

export const FooterImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%; /* Para garantir que a imagem não ultrapasse a tela */
`
