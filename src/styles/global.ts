import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: any }>`
  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  :focus {
    outline: transparent;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.COLORS.GREEN_500}
  }

  body {
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size:1rem;
  }
`
