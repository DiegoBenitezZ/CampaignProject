import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCirclePlus, faRectangleAd, faChartLine, faArrowUpAZ } from '@fortawesome/free-solid-svg-icons'
import './index.css'
import App from './App.tsx'

library.add({faBars, faCirclePlus, faRectangleAd, faChartLine, faArrowUpAZ});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
