import { ProfContainer, RestaurantImg, LogoImg, RestaurantDiv, OriginTitle, Title } from './styles'
import { BtnLink } from '../Button/styles';

import logo from '../../assets/images/logo.png'

import { Props } from '../Button/index'

const ProfileHeader = ({ to }: Omit<Props, 'type' | 'children' | 'title'>) => (
  <ProfContainer>
    <div className="container">
      <BtnLink to={'/'}>
        Restaurantes
      </BtnLink>
      <LogoImg src={logo} alt="logo" />
      <BtnLink to={'/carrinho'}>
        0 produto(s) no carrinho
      </BtnLink>
    </div>
    <RestaurantDiv>
      <RestaurantImg />
      <div className="container">
        <OriginTitle>Italiana</OriginTitle>
        <Title>La Dolce Vita Trattoria</Title>
      </div>
    </RestaurantDiv>
  </ProfContainer>
)

export default ProfileHeader
