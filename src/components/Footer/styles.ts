import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const FooterDiv = styled.div`
  background-color: ${colors.fundo};
  height: 298px;
`

export const FooterContainer = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  .logo {
    width: 125px;
    height: 57.5px;
    margin-top: 40px;
    margin-bottom: 32.5px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 47.5px;
      max-width: 105px;
      width: 100%;
    }
  }

  .media-links {
    margin-bottom: 80px;
  }

  p {
    font-size: 10px;
    color: ${colors.vermelho};
  }
`
