import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  titulo: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, titulo, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.BtnContainer type="button" title={titulo} onClick={onClick}>
        {children}
      </S.BtnContainer>
    )
  }

  return (
    <S.BtnLink to={to as string} title={titulo}>
      {children}
    </S.BtnLink>
  )
}

export default Button
