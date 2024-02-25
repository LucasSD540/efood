import styled from "styled-components"
import { cores } from "../../styles"

import { Link } from "react-router-dom"

export const ProfContainer = styled.div`
  background-color: ${cores.fundo};
  height: 443px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 65px;
  }
`

export const LogoLink = styled(Link)`
  img {
    width: 125px;
    height: 57.5px;
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
  }
`

export const OriginTitle = styled.h5`
  color: ${cores.branco};
  font-size: 32px;
  position: absolute;
  top: 24px;
  font-weight: 100;
  z-index: 1;
`

export const Title = styled.h4`
  color: ${cores.branco};
  font-size: 32px;
  position: absolute;
  bottom: 32px;
  font-weight: 900;
  z-index: 1;
`