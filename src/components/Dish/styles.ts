import styled from 'styled-components'
import { cores } from '../../styles'
import estrela from '../../assets/images/estrela.png'

export const DishCard = styled.div`
  background-color: ${cores.branca}
  padding: 16px;
  text-align: center;
  width: 100%;  /*AJUSTA A LARGURA DO CONTAINER*/
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #E66767;
  position: relative;
`

export const DishImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover; /* Isso vai garantir que a imagem se ajuste corretamente */
`

export const DishName = styled.h3`
  margin-top: 8px;
  padding-right: 400px;
  padding-right: 380px;
`

export const DishDescription = styled.p`
  margin-top: 8px;
  font-size: 14px; /* Defina o tamanho que você preferir */
  line-height: 1.6; /* Ajuste para melhorar o espaçamento entre as linhas */
  word-wrap: break-word; /* Garante que as palavras longas quebrem corretamente */
  text-align: justify; /* Alinha o texto nas duas margens */
  padding-left: 16px;
  padding-right: 16px;
`

export const DishLink = styled.a`
  text-decoration: none;
  color: ${cores.branca};
  background-color: ${cores.cenoura};
  padding: 0px 12px; /* Ajustando o padding para se alinhar com o tamanho desejado */
  font-size: 0.9rem; /* Ajustei a fonte para caber melhor no tamanho pequeno */
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: -340px; /* Distância à esquerda do botão */
  width: 100px; /* Largura fixa */
  height: 24px; /* Altura fixa */
  line-height: 24px; /* Alinha o texto verticalmente */
  transition: background-color 0.3s ease, transform 0.2s ease;
`

export const DishButton = styled.button`
  position: absolute;
  top: 10px;
  left: 90%;
  transform: translateX(-50%);
  background-color: ${cores.cenoura};
  color: ${cores.branca};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.branca};
    color: ${cores.cenoura};
  }
`

export const DishButtonLeft = styled.button`
  position: absolute;
  top: 10px;
  left: 65%;
  transform: translateX(-50%);
  background-color: ${cores.cenoura};
  color: ${cores.branca};
  border: none;
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${cores.branca};
    color: ${cores.cenoura};
  }
`

export const DishRatingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinha os itens à esquerda */
  margin-top: 5px; /* Dá um pouco de espaço entre o nome do prato e a avaliação */
  margin-left: 400px;
`

export const RatingNumber = styled.span`
  margin-right: -5px; /* Espaço entre o número e o botão */
  font-size: 18px; /* Tamanho do número */
  font-weight: bold;
  color: ${cores.cenoura}; /* Cor do número */
  margin-bottom: -30px;
  margin-left: 5px;
`

export const RatingButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px;
  margin-bottom: -25px;
  display: flex;
  align-items: center;
  margin-left: 7px;
`

export const RatingStar = styled.img`
  width: 25px; /* Tamanho ajustado da estrela */
  height: 25px; /* Tamanho ajustado da estrela */
  object-fit: contain;
  cursor: pointer; /* Garante que a estrela seja interativa */
`
