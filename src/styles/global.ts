import { createGlobalStyle } from 'styled-components'
// FIX: using any while react 18 + styled components types show error on GlobalStyles
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyles: any = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    html, body, #__next {
        height: 100%;
    }

    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`

export default GlobalStyles
