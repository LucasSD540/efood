import { useEffect, useState } from "react"
import FoodsList from "../../components/FoodsList"
import ProfileHeader from "../../components/ProfileHeader"
import { useParams } from "react-router-dom"

export type FoodItem = {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
}

export type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: FoodItem[];
}

const Profile = () => {
  const { id } = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  return (
    <>
      {restaurant && <ProfileHeader restaurant={restaurant} />}
      {restaurant && <FoodsList food={restaurant.cardapio} />}
    </>
  )
}

export default Profile
