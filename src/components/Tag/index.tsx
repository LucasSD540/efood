import { BtnEmphasis, BtnStyle } from './styles'

export type Props = {
  emphasis: 'yes' | 'not'
}

const Tag = ({ emphasis }: Props) => (
  <BtnEmphasis emphasis={emphasis}>
    <BtnStyle>Destaque da semana</BtnStyle>
  </BtnEmphasis>
)

export default Tag
