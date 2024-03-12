import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { FoodItem } from '../Profile'
import { useGetRestaurantsQuery } from '../../services/api'
import Loader from '../../components/Loader'

export type Restaurant = {
  menu: FoodItem[]
  id: number
  title: string
  highlighted: boolean
  type: string
  assessment: number
  description: string
  cover: string
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
  return <Loader />
}

export default Home
