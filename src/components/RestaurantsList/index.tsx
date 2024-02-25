import { Restaurant } from "../../pages/Home"
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
          id={restaurant.id}
          titulo={restaurant.titulo}
          destacado={restaurant.destacado}
          tipo={restaurant.tipo}
          avaliacao={restaurant.avaliacao}
          descricao={restaurant.descricao}
          capa={restaurant.capa}
        />
      ))}
    </RestaurantList>
  </div>
)

export default List
