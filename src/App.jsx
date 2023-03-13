import { Outlet } from 'react-router-dom'
import './App.css'

import Navbar from './layout/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />

      {/* Estrutura das outras páginas */}
      <Outlet />
      
      <p>Footer</p>
    </div>
  )
}

export default App
