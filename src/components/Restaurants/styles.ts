import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { Link } from 'react-router-dom'

export const Card = styled.div`
  height: 408px;
  max-width: 472px;
  width: 100%;
  background-color: ${colors.branco};
  color: ${colors.vermelho};
  font-size: 14px;
  border: 1px solid ${colors.vermelho};
  position: relative;

  .btn-saiba_mais {
    position: absolute;
    margin-top: 16px;
  }

  > img {
    max-width: 472px;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const DivFlex = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  h3 {
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  p {
    font-weight: 700;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 14px;
    }
  }

  span {
    margin-left: 8px;

    img {
      width: 16px;
      height: 16px;
      margin-top: 4px;
    }
  }
`

export const Description = styled.p`
  max-width: 456px;
  width: 100%;
  line-height: 22px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    line-height: 16px;
  }
`

export const Btns = styled.div`
  position: absolute;
  top: 16px;
  right: 14px;

  .btn-country {
    margin-left: 8px;
    cursor: initial;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 12px;
      padding: 4px 2px;
    }
  }
`

export const ContainerDescription = styled.div`
  max-width: 456px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 240px;
  }
`

export const BtnLink = styled(Link)`
  background-color: ${colors.vermelho};
  color: ${colors.fundo};
  padding: 6px 4px;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 4px 2px;
  }
`
