import FoodCard from '../Foods'

import * as S from './styles'

import { FoodItem } from '../../pages/Profile'

type Props = {
  food: FoodItem[]
}

const FoodsList = ({ food }: Props) => (
  <S.FoodContainer>
    <S.GridContainer className="container">
      {food.map((food) => (
        <FoodCard
          key={food.id}
          photo={food.photo}
          price={food.price}
          id={food.id}
          name={food.name}
          description={food.description}
          portion={food.portion}
          food={food}
        />
      ))}
    </S.GridContainer>
  </S.FoodContainer>
)

export default FoodsList
