import React, { useState } from 'react'
import estrela from '../../assets/images/estrela.png'
import { Link } from 'react-router-dom'
import {
  DishCard,
  DishImage,
  DishName,
  DishDescription,
  DishLink,
  DishButton,
  DishButtonLeft,
  DishRatingContainer,
  RatingNumber,
  RatingButton,
  RatingStar
} from './styles'

interface DishProps {
  name: string
  image: string
  description: string
  link: string
  isFirstDish: boolean
}

const Dish: React.FC<DishProps> = ({
  name,
  image,
  description,
  link,
  isFirstDish
}) => {
  const [rating, setRating] = useState(0)

  const handleRating = () => {
    setRating((prevRating) => prevRating + 1)
  }

  return (
    <DishCard>
      {isFirstDish && <DishButtonLeft>Destaque da semana</DishButtonLeft>}
      <DishButton>Japonesa</DishButton>
      <DishImage src={image} alt={name} />

      <DishRatingContainer>
        <RatingNumber>{rating}</RatingNumber>
        <RatingButton onClick={handleRating}>
          <RatingStar src={estrela} alt="Estrela" />
        </RatingButton>
      </DishRatingContainer>

      <DishName>{name}</DishName>
      <DishDescription>{description}</DishDescription>
      <Link to="/image-page">
        <DishLink href={link}>Saiba mais</DishLink>
      </Link>
    </DishCard>
  )
}

export default Dish
