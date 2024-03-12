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
          foto={food.foto}
          preco={food.preco}
          id={food.id}
          nome={food.nome}
          descricao={food.descricao}
          porcao={food.porcao}
          food={food}
        />
      ))}
    </S.GridContainer>
  </S.FoodContainer>
)

export default FoodsList
