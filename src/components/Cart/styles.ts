import { Link } from 'react-router-dom'
import styled from 'styled-components'

import removeIcon from '../../assets/images/remove.png'

import { breakpoints, colors } from '../../styles'

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

  p {
    color: ${colors.fundo};
    font-size: 16px;
    font-weight: bold;
  }
`

export const Sidebar = styled.aside`
  background-color: ${colors.vermelho};
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
  background-color: ${colors.fundo};
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
    color: ${colors.vermelho};
  }

  div {
    margin: 8px 0 0 8px;

    p {
      margin-top: 16px;
      font-size: 14px;
      color: ${colors.vermelho};
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.fundo};
  font-size: 14px;
  font-weight: 700;
  margin-top: 40px;
`

export const CartBtn = styled.button`
  background-color: ${colors.fundo};
  color: ${colors.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  height: 24px;
  margin-top: 16px;
  cursor: pointer;
`

export const CompletedBtn = styled(Link)`
  background-color: ${colors.fundo};
  color: ${colors.vermelho};
  border: none;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 4px 0;
  margin-top: 16px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  text-align: center;
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

export const FormContainer = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.fundo};
  }

  div {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 14px;
    font-weight: 700;
    color: ${colors.fundo};
    margin: 8px 0;
  }

  input {
    background-color: ${colors.fundo};
    border: 1px solid ${colors.fundo};
    height: 32px;

    &.error {
      border: 2px solid red;
    }
  }
`

export const GroupInputOne = styled.div`
  display: flex;
  flex-direction: column;
`

export const GroupOne = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 34px;
`

export const CheckoutDiv = styled.div`
  h3 {
    font-size: 16px;
    font-weight: 700;
    color: ${colors.fundo};
  }

  p {
    font-size: 14px;
    color: ${colors.fundo};
    margin: 16px 0;
    line-height: 22px;
  }
`
