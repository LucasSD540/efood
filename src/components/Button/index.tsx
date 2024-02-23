import * as S from './styles'

export type Props = {
  type: 'button' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

const Button = ({ type, title, to, onClick, children }: Props) => {
  if (type === 'button') {
    return (
      <S.BtnContainer type="button" title={title} onClick={onClick} >
        {children}
      </S.BtnContainer>
    )
  }

  return (
    <S.BtnLink to={to as string} title={title}>
      {children}
    </S.BtnLink>
  )
}

export default Button
