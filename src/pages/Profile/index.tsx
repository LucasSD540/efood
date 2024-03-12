import FoodsList from '../../components/FoodsList'
import ProfileHeader from '../../components/ProfileHeader'
import { useParams } from 'react-router-dom'
import { useGetFoodsQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type FoodItem = {
  description: string
  portion: string
  photo: string
  price: number
  id: number
  name: string
}

export type Restaurant = {
  id: number
  title: string
  highlighted: boolean
  type: string
  assessment: number
  description: string
  cover: string
  menu: FoodItem[]
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
      {restaurant && <FoodsList food={restaurant.menu} />}
    </>
  )
}

export default Profile
