import Food from '../../models/Food'
import FoodCard from '../Foods'

import * as S from './styles'

export type Props = {
  food: Food[]
}

const FoodsList = ({ food }: Props) => (
  <S.FoodContainer>
    <S.GridContainer className='container'>
      {food.map((food) => (
        <FoodCard 
          key={food.id}
          name={food.name}
          image={food.image}
          description={food.description}
        />
      ))}
    </S.GridContainer>
  </S.FoodContainer>
)

export default FoodsList
