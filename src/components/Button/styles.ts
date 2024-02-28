import styled from "styled-components"
import { Link } from "react-router-dom"
import { breakpoints, cores } from "../../styles"

export const BtnContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.fundo};
  padding: 6px 4px;
  font-size: 12px;
  border: none;
  cursor: pointer;
`

export const BtnLink = styled(Link)`
  background-color: transparent;
  text-decoration: none;
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
}
`
