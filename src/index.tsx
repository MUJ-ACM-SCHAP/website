import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import App from './App'
import * as serviceWorker from './serviceWorker'
import GlobalStyle from './GlobalStyle'

const theme = {
  primary: 'black',
  secondary: 'white',
  secondaryDark: '#0077c2',
  acmBlue: '#0077c2'
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
)
serviceWorker.unregister()
