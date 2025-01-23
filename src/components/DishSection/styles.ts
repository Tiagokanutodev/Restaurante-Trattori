import styled from 'styled-components'
import { cores } from '../../styles'

export const DishCard = styled.div`
  background-color: ${cores.cenoura};
  padding: 10px;
  text-align: center;
  width: 320px;
  height: 338px;
  border: 1px solid ${cores.cenoura};
  margin: 0 15px;
`

export const DishImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
`

export const DishName = styled.h3`
  font-size: 20px;
  color: ${cores.cenoura};
  margin-top: 10px;
  text-align: left;
`

export const DishDescription = styled.p`
  font-size: 14px;
  color: ${cores.bege};
  margin-top: 8px;
  text-align: justify;
  width: 90%;
`

export const DishButton = styled.button`
  background-color: ${cores.bege};
  color: ${cores.cenoura};
  border: none;
  width: 304px;
  height: 24px;
  padding: 0;
  margin-top: 12px;
  cursor: pointer;
  font-size: 16px;
  margin-left: -03px;

  &:hover {
    background-color: rgb(238, 143, 143);
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 320px);
  gap: 20px;
  justify-content: center;
  margin-top: 56px;
`
