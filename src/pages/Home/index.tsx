import Restaurant from "../../models/Restaurant"

import Header from "../../components/Header"
import RestaurantsList from "../../components/RestaurantsList"

import sushi from '../../assets/images/sushi.png'
import ladolce from '../../assets/images/ladolce.png'

const restaurantList: Restaurant[] = [
  {
    id: 1,
    description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    name: 'Hioki Sushi',
    origin: 'Japonesa',
    classification: 4.9,
    emphasis: 'yes'
  },
  {
    id: 2,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    name: 'La Dolce Vita Trattoria',
    origin: 'Italiana',
    classification: 4.6,
    emphasis: 'not'
  },
  {
    id: 3,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    name: 'La Dolce Vita Trattoria',
    origin: 'Italiana',
    classification: 4.6,
    emphasis: 'not'
  },
  {
    id: 4,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    name: 'La Dolce Vita Trattoria',
    origin: 'Italiana',
    classification: 4.6,
    emphasis: 'not'
  },
  {
    id: 5,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    name: 'La Dolce Vita Trattoria',
    origin: 'Italiana',
    classification: 4.6,
    emphasis: 'not'
  },
  {
    id: 6,
    description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: ladolce,
    name: 'La Dolce Vita Trattoria',
    origin: 'Italiana',
    classification: 4.6,
    emphasis: 'not'
  }
]

const Home = () => (
  <>
    <Header />
    <RestaurantsList restaurant={restaurantList} />
  </>
)

export default Home
