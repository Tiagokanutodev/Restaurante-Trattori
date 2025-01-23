import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFFFFF',
  bege: '#FFEBD9',
  cenoura: '#E66767',
  corDeFundo: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${cores.corDeFundo};
    color: ${cores.cenoura};
  }

  div, img {
    border: none;
  }
`
