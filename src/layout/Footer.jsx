import styles from './Footer.module.css'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = (props) => {
  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p><span>Costs</span> &copy; 2023</p>
    </footer>
  )
}

export default Footer