import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/contact">Contato</Link></li>
        <li><Link to="/company">Empresa</Link></li>
        <li><Link to="/newproject">Empresa</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar