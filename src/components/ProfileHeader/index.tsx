import * as S from './styles'
import { BtnLink } from '../Button/styles';

import logo from '../../assets/images/logo.png'

import { Props } from '../Button/index'

const ProfileHeader = ({ to }: Omit<Props, 'type' | 'children' | 'title'>) => (
  <S.ProfContainer>
    <div className="container">
      <BtnLink to={'/'}>
        Restaurantes
      </BtnLink>
      <S.LogoLink to={'/'}>
        <img src={logo} alt="logo" />
      </S.LogoLink>
      <BtnLink to={'/carrinho'}>
        0 produto(s) no carrinho
      </BtnLink>
    </div>
    <S.RestaurantDiv>
      <S.RestaurantImg />
      <div className="container">
        <S.OriginTitle>Italiana</S.OriginTitle>
        <S.Title>La Dolce Vita Trattoria</S.Title>
      </div>
    </S.RestaurantDiv>
  </S.ProfContainer>
)

export default ProfileHeader
