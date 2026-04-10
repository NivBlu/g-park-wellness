import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './premium-design.css'
import './design-v3.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
