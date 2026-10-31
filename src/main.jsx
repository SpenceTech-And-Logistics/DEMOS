import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/base.css'
import './styles/spa-consultant.css'
import './styles/spa-logistics.css'
import './styles/mpa.css'
import './styles/ngo.css'
import './styles/spa-restaurant.css'
import './styles/spa-estate.css'
import './styles/mini.css'
import './styles/spa-creator.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
