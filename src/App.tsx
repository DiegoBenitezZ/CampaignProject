import './App.css'
import { BrowserRouter } from "react-router-dom"
import { RouterIndex } from './routes/RouterIndex'

function App() {

  return (
    <>
      <BrowserRouter>
        <RouterIndex/>
      </BrowserRouter>
    </>
  )
}

export default App
