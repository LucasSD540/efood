import * as S from './styles'
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
  <S.Card>
    <img src={image} alt="sushi" />
    <S.Btns>
      <Tag emphasis={emphasis} />
      <BtnContainer className='btn-country'>{origin}</BtnContainer>
    </S.Btns>
    <S.ContainerDescription>
      <S.DivFlex>
        <h3>{name}</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p>{classification}</p>
          <span><img src={star_favorite} alt="estrela de favoritos" /></span>
        </div>
      </S.DivFlex>
      <S.Description>{description}</S.Description>
      <S.BtnLink to={"/perfil"} className='btn-saiba_mais'>Saiba mais</S.BtnLink>
    </S.ContainerDescription>
  </S.Card>
)

export default RestaurantCard
