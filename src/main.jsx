import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FontStyle from './styles/fonts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FontStyle/>
    <App />
  </React.StrictMode>,
)
