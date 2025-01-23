import React from 'react'
import Dish from '../Dish'
import { GridContainer } from './styles'
import prato1 from '../../assets/images/prato1.png' // Importe as imagens dos pratos

const dishes = [
  {
    name: 'Prato 1',
    image: prato1,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    link: '#'
  },
  {
    name: 'Prato 2',
    image: prato1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '#'
  },
  {
    name: 'Prato 3',
    image: prato1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '#'
  },
  {
    name: 'Prato 4',
    image: prato1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '#'
  },
  {
    name: 'Prato 5',
    image: prato1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '#'
  },
  {
    name: 'Prato 6',
    image: prato1,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    link: '#'
  }
]

const DishGrid: React.FC = () => {
  return (
    <GridContainer>
      {dishes.map((dish, index) => (
        <Dish
          key={index}
          name={dish.name}
          image={dish.image}
          description={dish.description}
          link={dish.link}
          isFirstDish={index === 0} // Passando a condição para o primeiro prato
        />
      ))}
    </GridContainer>
  )
}

export default DishGrid
