import './App.css'
import { Outlet } from 'react-router-dom'
import Container from './layout/Container'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Container customClass="min_height">
        {/* Estrutura das outras páginas */}
        <Outlet />
      </Container>
      <Footer />
    </div>
  )
}

export default App
