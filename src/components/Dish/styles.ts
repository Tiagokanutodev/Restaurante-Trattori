import styled from 'styled-components'
import { cores } from '../../styles'

export const DishCard = styled.div`
  background-color: ${cores.branca}
  padding: 16px;
  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid${cores.cenoura}
  position: relative;
`

export const DishImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
`

export const DishName = styled.h3`
  margin-top: 8px;
  padding-right: 400px;
  padding-right: 380px;
`

export const DishDescription = styled.p`
  margin-top: 8px;
  font-size: 14px;
  line-height: 1.6;
  word-wrap: break-word;
  text-align: justify;
  padding-left: 16px;
  padding-right: 16px;
`

export const DishLink = styled.a`
  text-decoration: none;
  color: ${cores.branca};
  background-color: ${cores.cenoura};
  padding: 0px 12px;
  font-size: 0.9rem;
  font-weight: 600;
  font-size: 14px;
  display: inline-block;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  margin-left: -340px;
  width: 100px;
  height: 24px;
  line-height: 24px;
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
  justify-content: flex-start;
  margin-top: 5px;
  margin-left: 400px;
`

export const RatingNumber = styled.span`
  margin-right: -5px;
  font-size: 18px;
  font-weight: bold;
  color: ${cores.cenoura};
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
  width: 25px;
  height: 25px;
  object-fit: contain;
  cursor: pointer;
`
