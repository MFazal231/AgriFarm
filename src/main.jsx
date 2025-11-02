import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AgriProvider } from './context/AgriContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AgriProvider>
      <App />
    </AgriProvider>
  </StrictMode>,
)
