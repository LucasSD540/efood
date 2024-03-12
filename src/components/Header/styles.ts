import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import imagemFundo from '../../assets/images/imagemFundo.png'
import { Link } from 'react-router-dom'

export const HeaderDiv = styled.div`
  background-color: ${colors.fundo};
  display: flex;
  flex-direction: column;
  height: 360px;
  color: ${colors.vermelho};
  text-align: center;
  background-image: url(${imagemFundo});
`

export const Logo = styled(Link)`
  img {
    height: 57.5px;
    max-width: 125px;
    width: 100%;
    margin-top: 40px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 47.5px;
      max-width: 105px;
      width: 100%;
    }
  }
`

export const Title = styled.h2`
  font-size: 36px;
  margin-top: 138.5px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`
