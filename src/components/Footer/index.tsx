import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram-icon.png'
import facebook from '../../assets/images/facebook-icon.png'
import twitter from '../../assets/images/twitter-icon.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterDiv>
    <S.FooterContainer>
      <img className="logo" src={logo} alt="logo efood" />
      <div className="media-links">
        <img src={instagram} alt="instagram" />
        <img style={{ margin: '0px 8px' }} src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.{' '}
      </p>
    </S.FooterContainer>
  </S.FooterDiv>
)

export default Footer
