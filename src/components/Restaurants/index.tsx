import * as S from './styles'
import star_favorite from '../../assets/images/star_favorite.png'
import { BtnContainer } from '../Button/styles'
import Tag from '../Tag'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
}

const RestaurantCard = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 240) {
      return descricao.slice(0, 237) + '...'
    }
    return descricao
  }

  return (
    <S.Card>
      <img src={capa} alt={`Imagem ${titulo}`} />
      <S.Btns>
        <Tag destacado={destacado} />
        <BtnContainer className="btn-country">{tipo}</BtnContainer>
      </S.Btns>
      <S.ContainerDescription>
        <S.DivFlex>
          <h3>{titulo}</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <p>{avaliacao}</p>
            <span>
              <img src={star_favorite} alt="estrela de favoritos" />
            </span>
          </div>
        </S.DivFlex>
        <S.descricao>{getDescricao(descricao)}</S.descricao>
        <S.BtnLink to={`/perfil/${id}`} className="btn-saiba_mais">
          Saiba mais
        </S.BtnLink>
      </S.ContainerDescription>
    </S.Card>
  )
}

export default RestaurantCard
