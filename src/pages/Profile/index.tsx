import FoodsList from "../../components/FoodsList"
import ProfileHeader from "../../components/ProfileHeader"
import { useParams } from "react-router-dom"
import { useGetFoodsQuery } from "../../services/api"

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
  const { data: food, data: restaurant } = useGetFoodsQuery(id!)

  if (!food) {
    return <h3>Carregando</h3>
  }

  return (
    <>
      {restaurant && <ProfileHeader restaurant={restaurant} />}
      {restaurant && <FoodsList food={restaurant.cardapio} />}
    </>
  )
}

export default Profile
