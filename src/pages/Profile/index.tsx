import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import { useParams } from 'react-router-dom'
import { useGetFoodsQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type FoodItem = {
  descricao: string
  porcao: string
  foto: string
  preco: number
  id: number
  nome: string
}

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: FoodItem[]
}

const Profile = () => {
  const { id } = useParams()
  const { data: food, data: restaurant } = useGetFoodsQuery(id!)

  if (!food) {
    return <Loader />
  }

  return (
    <>
      {restaurant && <ProfileHeader restaurant={restaurant} />}
      {restaurant && <FoodsList food={restaurant.cardapio} />}
    </>
  )
}

export default Profile
