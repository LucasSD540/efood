import { Card, FoodImage, FoodName, FoodDescription, CardInfo, AddCartBtn } from './styles'

type Props = {
  name: string
  image: string
  description: string
}

const Food = ({ name, image, description }: Props) => (
  <Card>
    <FoodImage src={image} alt="Pizza Margurita" />
    <CardInfo>
      <FoodName>{name}</FoodName>
      <FoodDescription>{description}</FoodDescription>
      <AddCartBtn>Adicionar ao carrinho</AddCartBtn>
    </CardInfo>
  </Card>
)

export default Food

