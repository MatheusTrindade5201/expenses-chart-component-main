import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: ${props => props.theme.colors.paleOrange};
        font-size: 18px
    }
`
export default GlobalStyle