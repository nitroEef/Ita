import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'      // ← add this
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  

    <BrowserRouter basename="/Ita">
  <App />
</BrowserRouter>

  </StrictMode>,
)


