import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-subtitle']};
        -webkit-font-smoothing: antialiased;

        font-family: 'Roboto', sans-serif;
    }

    body, input, textarea, button {
        font-weight: 400;
        font-size: 1rem;
    }
`
