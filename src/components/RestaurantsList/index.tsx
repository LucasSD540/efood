import Restaurant from "../../models/Restaurant"
import RestaurantCard from "../Restaurants"

import { RestaurantList } from "./styles"

export type Props = {
  restaurant: Restaurant[]
}

const List = ({ restaurant }: Props) => (
  <div className="container">
    <RestaurantList>
      {restaurant.map((restaurant) => (
        <RestaurantCard 
          key={restaurant.id}
          description={restaurant.description}
          image={restaurant.image}
          name={restaurant.name}
          origin={restaurant.origin}
          classification={restaurant.classification}
          emphasis={restaurant.emphasis}
        />
      ))}
    </RestaurantList>
  </div>
)

export default List
