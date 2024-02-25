import * as S from './styles'
import { BtnLink } from '../Button/styles';

import logo from '../../assets/images/logo.png'
import { Restaurant } from '../../pages/Profile'

type ProfileHeaderProps = {
  restaurant: Restaurant
}

const ProfileHeader = ({ restaurant } : ProfileHeaderProps) => {
return (
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
    <S.RestaurantImg style={{ backgroundImage: `url(${restaurant.capa})` }}>
      <div className="container">
        <S.OriginTitle>{restaurant.tipo}</S.OriginTitle>
        <S.Title>{restaurant.titulo}</S.Title>
      </div>
    </S.RestaurantImg>
  </S.ProfContainer>
)}

export default ProfileHeader
