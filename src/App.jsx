import { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import MyBalance from "./component/MyBalance"
import Spendings from "./component/Spendings"
import FontStyle from "./styles/fonts"
import GlobalStyle from "./styles/globalStyle"
import { themes } from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={themes}>
      <MyBalance />
      <Spendings />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
