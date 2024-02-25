import * as S from './styles'

export type Props = {
  destacado: boolean
}

const Tag = ({ destacado }: Props) => (
  <S.BtnEmphasis destacado={destacado}>
    <S.BtnStyle>Destaque da semana</S.BtnStyle>
  </S.BtnEmphasis>
)

export default Tag
