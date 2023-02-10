import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalReset } from './styles/reset'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalReset />
    <App />
  </React.StrictMode>,
)
