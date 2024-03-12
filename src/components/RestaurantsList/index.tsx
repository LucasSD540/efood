import { Restaurant } from '../../pages/Home'
import RestaurantCard from '../Restaurants'

import { RestaurantList } from './styles'

export type Props = {
  restaurant: Restaurant[]
}

const List = ({ restaurant }: Props) => (
  <div className="container">
    <RestaurantList>
      {restaurant.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          title={restaurant.title}
          highlighted={restaurant.highlighted}
          type={restaurant.type}
          assessment={restaurant.assessment}
          description={restaurant.description}
          cover={restaurant.cover}
        />
      ))}
    </RestaurantList>
  </div>
)

export default List
