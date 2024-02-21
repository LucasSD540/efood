import styled from "styled-components"
import { cores } from "../../styles"

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  height: 330px;
  background-color: ${cores.vermelho};
`

export const FoodImage = styled.img`
  max-width: 304px;
  width: 100%;
  height: 167px;
  display: block;
  margin: 0 auto;
  padding-top: 8px;
`

export const FoodName = styled.h3`
  weight: 900;
  font-size: 16px;
  color: ${cores.fundo};
  margin-top: 8px;
  margin-bottom: 8px;
`

export const FoodDescription = styled.p`
  max-width: 304px;
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.fundo};
  margin-bottom: 8px;
`

export const AddCartBtn = styled.button`
  max-width: 304px;
  width: 100%;
  height: 24px;
  background-color: ${cores.fundo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`

export const CardInfo = styled.div`
  max-width: 304px;
  width: 100%;
  display: block;
  margin: 0 auto;
`
