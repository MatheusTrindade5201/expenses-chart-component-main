import { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import MyBalance from "./component/MyBalance"
import FontStyle from "./styles/fonts"
import GlobalStyle from "./styles/globalStyle"
import { themes } from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={themes}>
      <MyBalance />
      <GlobalStyle />
      <FontStyle />
    </ThemeProvider>
  )
}

export default App
