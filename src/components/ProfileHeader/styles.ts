import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

import { Link } from 'react-router-dom'

export const ProfContainer = styled.div`
  background-color: ${colors.fundo};
  height: 443px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 65px;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 680px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      flex-direction: column;
    }
  }
`

export const LogoLink = styled(Link)`
  img {
    width: 125px;
    height: 57.5px;

    @media (max-width: ${breakpoints.tablet}) {
      height: 47.5px;
      max-width: 105px;
      width: 100%;
      margin: 16px 0;
  }
`

export const RestaurantImg = styled.div`
  position: relative;
  display: block;
  height: 280px;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: .5;

    @media (max-width: ${breakpoints.tablet}) {
      display: none;
  }
  }
}
`

export const OriginTitle = styled.h5`
  color: ${colors.branco};
  font-size: 32px;
  position: absolute;
  top: 24px;
  font-weight: 100;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const Title = styled.h4`
  color: ${colors.branco};
  font-size: 32px;
  position: absolute;
  bottom: 32px;
  font-weight: 900;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const CartLink = styled.button`
  background-color: transparent;
  text-decoration: none;
  color: ${colors.vermelho};
  font-size: 18px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
