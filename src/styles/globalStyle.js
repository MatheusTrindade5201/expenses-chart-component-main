import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0
    }

    body{
        background-color: ${props => props.theme.colors.cream};
        font-size: 18px;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'DM Sans', sans-serif;
    }
`
export default GlobalStyle