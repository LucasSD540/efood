import * as S from './styles'

type Props = {
  name: string
  image: string
  description: string
}

const Food = ({ name, image, description }: Props) => (
  <S.Card>
    <S.FoodImage src={image} alt="Pizza Margurita" />
    <S.CardInfo>
      <S.FoodName>{name}</S.FoodName>
      <S.FoodDescription>{description}</S.FoodDescription>
      <S.AddCartBtn>Adicionar ao carrinho</S.AddCartBtn>
    </S.CardInfo>
  </S.Card>
)

export default Food
