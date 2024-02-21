import logo from '../../assets/images/logo.png'
import { HeaderDiv, Titulo } from './styles'

const Header = () => (
  <HeaderDiv>
    <div className="container">
      <img src={logo} alt="EFOOD" />
      <Titulo>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Titulo>
    </div>
  </HeaderDiv>
)

export default Header
