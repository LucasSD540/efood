import * as S from './styles'
import star_favorite from '../../assets/images/star_favorite.png'
import { BtnContainer } from '../Button/styles'
import Tag from '../Tag'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string
  assessment: number
  description: string
  cover: string
}

const RestaurantCard = ({
  id,
  title,
  highlighted,
  type,
  assessment,
  description,
  cover
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 240) {
      return description.slice(0, 237) + '...'
    }
    return description
  }

  return (
    <S.Card>
      <img src={cover} alt={`Imagem ${title}`} />
      <S.Btns>
        <Tag highlighted={highlighted} />
        <BtnContainer className="btn-country">{type}</BtnContainer>
      </S.Btns>
      <S.ContainerDescription>
        <S.DivFlex>
          <h3>{title}</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p>{assessment}</p>
            <span>
              <img src={star_favorite} alt="estrela de favoritos" />
            </span>
          </div>
        </S.DivFlex>
        <S.Description>{getDescricao(description)}</S.Description>
        <S.BtnLink to={`/perfil/${id}`} className="btn-saiba_mais">
          Saiba mais
        </S.BtnLink>
      </S.ContainerDescription>
    </S.Card>
  )
}

export default RestaurantCard
