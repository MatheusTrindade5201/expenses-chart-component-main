import { createGlobalStyle } from "styled-components";
import DMSans from '../assets/fonts/DMSans-Regular.ttf'

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'DM Sans';
        src: url(${DMSans}) format('ttf');
    }
`

export default FontStyle