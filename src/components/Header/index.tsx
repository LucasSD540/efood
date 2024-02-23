import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => (
  <S.HeaderDiv>
    <div className="container">
      <S.Logo to={'/'}>
        <img src={logo} alt="EFOOD" />
      </S.Logo>
      <S.Titulo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </S.Titulo>
    </div>
  </S.HeaderDiv>
)

export default Header
