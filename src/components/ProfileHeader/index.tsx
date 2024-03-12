import * as S from './styles'
import { BtnLink } from '../Button/styles'

import logo from '../../assets/images/logo.png'
import { Restaurant } from '../../pages/Profile'
import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type ProfileHeaderProps = {
  restaurant: Restaurant
}

const ProfileHeader = ({ restaurant }: ProfileHeaderProps) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.ProfContainer>
      <div className="container">
        <BtnLink to={'/'}>Restaurantes</BtnLink>
        <S.LogoLink to={'/'}>
          <img src={logo} alt="logo" />
        </S.LogoLink>
        <S.CartLink onClick={openCart}>
          {items.length} produto(s) no carrinho
        </S.CartLink>
      </div>
      <S.RestaurantImg style={{ backgroundImage: `url(${restaurant.cover})` }}>
        <div className="container">
          <S.OriginTitle>{restaurant.type}</S.OriginTitle>
          <S.Title>{restaurant.title}</S.Title>
        </div>
      </S.RestaurantImg>
    </S.ProfContainer>
  )
}

export default ProfileHeader
