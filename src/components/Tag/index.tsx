import * as S from './styles'

export type Props = {
  emphasis: 'yes' | 'not'
}

const Tag = ({ emphasis }: Props) => (
  <S.BtnEmphasis emphasis={emphasis}>
    <S.BtnStyle>Destaque da semana</S.BtnStyle>
  </S.BtnEmphasis>
)

export default Tag
