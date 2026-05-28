import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <h1> This is a simple React app </h1>
    <h2>yo its working dude
    </h2>
  </StrictMode>,
)
