import styled from 'styled-components'
import { cores } from '../../styles'
import imagemFundo from '../../assets/images/imagemFundo.png'

export const HeaderDiv = styled.div`
  background-color: ${cores.fundo};
  display: flex;
  flex-direction: column;
  height: 360px;
  color: ${cores.vermelho};
  text-align: center;
  background-image: url(${imagemFundo});

  img {
    height: 57.5px;
    max-width: 125px;
    width: 100%;
    margin-top: 64px;
  }
`

export const Titulo = styled.h2`
  font-size: 36px;
  margin-top: 118px;
`
