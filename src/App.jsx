import './App.css'
import { Outlet } from 'react-router-dom'
import Container from './layout/Container'
import Navbar from './layout/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />

      <Container customClass="min_height">
        {/* Estrutura das outras páginas */}
        <Outlet />
      </Container>
      <p>Footer</p>
    </div>
  )
}

export default App
