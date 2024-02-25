import styled from "styled-components"

import { Props } from "."
import { cores } from "../../styles"

export const BtnEmphasis = styled.div<Props>`
  display: ${(props) => props.destacado ? 'inline-block' : 'none'};
`

export const BtnStyle = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.fundo};
  padding: 6px 4px;
  font-size: 12px;
  border: none;
`
