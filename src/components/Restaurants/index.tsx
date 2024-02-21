import { Card, DivFlex, Description, Btns, ContainerDescription, BtnLink } from './styles'
import star_favorite from '../../assets/images/star_favorite.png'
import { BtnContainer } from '../Button/styles'
import Tag from '../Tag'

export type Props = {
  description: string
  image: string
  name: string
  origin: string
  classification: number
  emphasis: 'yes' | 'not'
}

const RestaurantCard = ({ 
  emphasis,
  description,
  image, name,
  origin,
  classification
}: Props) => (
  <Card>
    <img src={image} alt="sushi" />
    <Btns>
      <Tag emphasis={emphasis} />
      <BtnContainer className='btn-country'>{origin}</BtnContainer>
    </Btns>
    <ContainerDescription>
      <DivFlex>
        <h3>{name}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>{classification}</p>
          <span><img src={star_favorite} alt="estrela de favoritos" /></span>
        </div>
      </DivFlex>
      <Description>{description}</Description>
      <BtnLink to={"/perfil"} className='btn-saiba_mais'>Saiba mais</BtnLink>
    </ContainerDescription>
  </Card>
)

export default RestaurantCard
