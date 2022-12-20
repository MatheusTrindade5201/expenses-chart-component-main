import { Fragment } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./styles/globalStyle"
import { themes } from "./styles/theme"

function App() {

  return (
    <ThemeProvider theme={themes}>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
