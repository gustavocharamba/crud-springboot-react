import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased; 
        outline: none;
        text-decoration: none;
        font-family: "Roboto", sans-serif;
    }
`

export default GlobalStyle