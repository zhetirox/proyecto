import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/home.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
