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
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.fundo};
  margin-bottom: 8px;
`

export const DetailsBtn = styled.button`
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${cores.vermelho};
  display: flex;

  img {
    max-width: 280px;
    width: 100%;
    height: 280px;
    margin: 32px 24px 32px 32px;
  }

  h3 {
    weight: 900;
    font-size: 18px;
    color: ${cores.fundo};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${cores.fundo};
    margin-bottom: 16px;
  }

  .close {
    height: 16px;
    width: 16px;
    position: absolute;
    right: -18px;
    top: -24px;
    cursor: pointer;
  }
`

export const ModalInfoDiv = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;
`

export const AddBtn = styled.button`
  max-width: 218px;
  width: 100%;
  height: 24px;
  background-color: ${cores.fundo};
  color: ${cores.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;
`
