import styled from "styled-components"

import { Props } from "."
import { breakpoints, cores } from "../../styles"

export const BtnEmphasis = styled.div<Props>`
  display: ${(props) => props.destacado ? 'inline-block' : 'none'};
`

export const BtnStyle = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.fundo};
  padding: 6px 4px;
  font-size: 12px;
  border: none;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    padding: 4px 2px;
  }
`
