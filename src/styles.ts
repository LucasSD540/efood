import { createGlobalStyle } from 'styled-components'

export const colors = {
  fundo: '#FFEBD9',
  fundoClaro: '#FFF8F2',
  branco: '#fff',
  amarelo: '#FFB930',
  vermelho: '#E66767',
  rosaClaro: '#E667670D'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '767px'
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
    background-color: ${colors.fundoClaro};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
