import styled from "styled-components"
import { breakpoints, cores } from "../../styles"

import removeIcon from '../../assets/images/remove.png'

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
` 

export const Sidebar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  min-height: 100vh;
  overflow-y: auto;
  padding: 32px 8px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const CartItem = styled.li`
  display: flex;
  max-width: 344px;
  width: 100%;
  height: 100px;
  background-color: ${cores.fundo};
  margin-bottom: 16px;
  position: relative;

  .food-image {
    height: 80px;
    max-width: 80px;
    width: 100%;
    object-fit: cover;
    margin: 8px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${cores.vermelho};
  }

  div {
    margin: 8px 0 0 8px;

    p {
      margin-top: 16px;
      font-size: 14px;
      color: ${cores.vermelho};
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${cores.fundo};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
`

export const CartBtn = styled.button`
  background-color: ${cores.fundo};
  color: ${cores.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 24px;
  margin-top: 16px;
  cursor: pointer;
`

export const RemoveIcon = styled.button`
  height: 16px;
  max-width: 16px;
  width: 100%;
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
  background-image: url(${removeIcon});
  background-color: transparent;
  border: none;
`
