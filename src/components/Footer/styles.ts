import styled from "styled-components"
import { cores } from "../../styles"

export const FooterDiv = styled.div`
  background-color: ${cores.fundo};
  height: 298px;
`

export const FooterContainer = styled.div`
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;

  .logo {
    width: 125px;
    height: 57.5px;
    margin-top: 40px;
    margin-bottom: 32.5px;
  }

  .media-links {
    margin-bottom: 80px;
  }

  p {
    font-size: 10px;
    color: ${cores.vermelho};
  }
`