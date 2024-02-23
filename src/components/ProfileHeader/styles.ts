import styled from "styled-components"
import { cores } from "../../styles"

import ladolcevita from '../../assets/images/ladloceVita.png'
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
  height: 280px;
  width: 100%;
  position: absolute;
  z-index: 0;
  background-image: url(${ladolcevita});
  background-size: cover;
  opacity: .5;
`

export const RestaurantDiv = styled.div`
  width: 100%;
  height: 280px;
  background-color: #000;
  position: relative;
  z-index: 1;
`

export const OriginTitle = styled.h5`
  color: ${cores.branco};
  font-size: 32px;
  position: absolute;
  top: 24px;
  font-weight: 100;
`

export const Title = styled.h4`
  color: ${cores.branco};
  font-size: 32px;
  position: absolute;
  bottom: 32px;
  font-weight: 900;
`