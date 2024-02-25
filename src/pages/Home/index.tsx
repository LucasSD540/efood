import { useEffect, useState } from "react"
import Header from "../../components/Header"
import RestaurantsList from "../../components/RestaurantsList"
import { FoodItem } from "../Profile"

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  return (
    <>
      <Header />
      <RestaurantsList restaurant={restaurant} />
    </>
  )
}

export default Home
