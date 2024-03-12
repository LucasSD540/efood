import * as S from './styles'

export type Props = {
  highlighted: boolean
}

const Tag = ({ highlighted }: Props) => (
  <S.BtnEmphasis highlighted={highlighted}>
    <S.BtnStyle>Destaque da semana</S.BtnStyle>
  </S.BtnEmphasis>
)

export default Tag
