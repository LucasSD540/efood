import { createGlobalStyle } from 'styled-components'

export const cores = {
  fundo: '#FFEBD9',
  fundoClaro: '#FFF8F2',
  branco: '#fff',
  amarelo: '#FFB930',
  vermelho: '#E66767',
  rosaClaro: '#E667670D'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.fundoClaro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
