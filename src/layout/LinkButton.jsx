import { Link } from 'react-router-dom'
import styles from './LinkButton.module.css'

export default LinkButton = ({to, text}) => <Link className={styles.btn} to={to}>{text}</Link>