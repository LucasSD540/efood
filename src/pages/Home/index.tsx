import Header from "../../components/Header"
import RestaurantsList from "../../components/RestaurantsList"
import { FoodItem } from "../Profile"
import { useGetRestaurantsQuery } from "../../services/api"

export type Restaurant = {
  cardapio: FoodItem[]
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const Home = () => {
  const { data: restaurant } = useGetRestaurantsQuery()

  if (restaurant) {
    return (
      <>
        <Header />
        <RestaurantsList restaurant={restaurant} />
      </>
    )
  }
  return <h4>Carregando</h4>
}

export default Home
