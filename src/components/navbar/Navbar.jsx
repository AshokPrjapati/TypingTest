import { Link } from "react-router-dom"
import styles from "../../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <header className={styles.Navbar}>
            <Link to='/' className={styles.logo}>
                <img src="car-logo.png" alt="logo" />
                <h1>Typing Test</h1>
            </Link>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/practice">practice</Link></li>
                    <li>
                        {/* auth part */}
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar