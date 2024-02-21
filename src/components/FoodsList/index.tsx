import Food from '../../models/Food'
import FoodCard from '../Foods'

import { FoodContainer, GridContainer } from './styles'

export type Props = {
  food: Food[]
}

const FoodsList = ({ food }: Props) => (
  <FoodContainer>
    <GridContainer className='container'>
      {food.map((food) => (
        <FoodCard 
          key={food.id}
          name={food.name}
          image={food.image}
          description={food.description}
        />
      ))}
    </GridContainer>
  </FoodContainer>
)

export default FoodsList
