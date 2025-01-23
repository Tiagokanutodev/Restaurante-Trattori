import React from 'react'
import pizza from '../../assets/images/pizza.png'
import {
  DishCard,
  DishImage,
  DishName,
  DishDescription,
  DishButton,
  GridContainer
} from './styles'

const dishes = [
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  },
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  },
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  },
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  },
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  },
  {
    name: 'Pizza Marguerita',
    image: pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    link: '#'
  }
]

const DishSection: React.FC = () => {
  return (
    <GridContainer>
      {dishes.map((dish, index) => (
        <DishCard key={index}>
          <DishImage src={dish.image} alt={dish.name} />
          <DishName>{dish.name}</DishName>
          <DishDescription>{dish.description}</DishDescription>
          <DishButton>Adicionar ao carrinho</DishButton>
        </DishCard>
      ))}
    </GridContainer>
  )
}

export default DishSection
