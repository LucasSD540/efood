import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  width: 100%;
  height: 330px;
  background-color: ${colors.vermelho};

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const FoodImage = styled.img`
  max-width: 304px;
  width: 100%;
  height: 167px;
  display: block;
  margin: 0 auto;
  padding-top: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
`

export const FoodName = styled.h3`
  weight: 900;
  font-size: 16px;
  color: ${colors.fundo};
  margin-top: 8px;
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`

export const FoodDescription = styled.p`
  max-width: 304px;
  width: 100%;
  height: 88px;
  font-size: 14px;
  line-height: 22px;
  color: ${colors.fundo};
  margin-bottom: 8px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const DetailsBtn = styled.button`
  max-width: 304px;
  width: 100%;
  height: 24px;
  background-color: ${colors.fundo};
  color: ${colors.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    height: 24px;
  }
`

export const CardInfo = styled.div`
  max-width: 304px;
  width: 100%;
  display: block;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 80%;
  }
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
  background-color: ${colors.vermelho};
  display: flex;

  @media (max-width: ${breakpoints.tablet}) {
    height: 260px;
  }

  img {
    max-width: 280px;
    width: 100%;
    height: 280px;
    margin: 32px 24px 32px 32px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 120px;
      height: 120px;
      margin: 16px 12px 16px 16px;
    }
  }

  h3 {
    weight: 900;
    font-size: 18px;
    color: ${colors.fundo};
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 16px;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      margin-bottom: 8px;
      max-width: 80px;
    }
  }

  p {
    font-size: 14px;
    line-height: 22px;
    color: ${colors.fundo};
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.desktop}) {
      font-size: 12px;
      line-height: 20px;
      max-width: 90%;
    }

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 10px;
      line-height: 12px;
      margin-bottom: 8px;
    }
  }

  .close {
    height: 16px;
    width: 16px;
    position: absolute;
    right: -18px;
    top: -24px;
    cursor: pointer;

    @media (max-width: ${breakpoints.tablet}) {
      right: 0px;
      top: 0px;
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 90%;
  }
`

export const ModalInfoDiv = styled.div`
  max-width: 656px;
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 16px;
  }
`

export const AddBtn = styled.button`
  max-width: 218px;
  width: 100%;
  height: 24px;
  background-color: ${colors.fundo};
  color: ${colors.vermelho};
  font-weight: bold;
  font-size: 14px;
  border: none;
  cursor: pointer;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 130px;
    width: 100%;
    height: 24px;
    font-size: 10px;
  }
`
