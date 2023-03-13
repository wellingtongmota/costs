import { Link } from "react-router-dom";
import styles from './Navbar.module.css'
import logo from "../img/costs_logo.png"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <li><Link to="/"><img src={logo} alt="Costs" className={styles.logo}/></Link></li>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projetos</Link></li>
        <li><Link to="/company">Empresa</Link></li>
        <li><Link to="/contact">Contato</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar