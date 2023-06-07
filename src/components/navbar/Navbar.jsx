import { Link } from "react-router-dom";

import Button from "../Button";
import styles from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link to="/" className={styles.title}>
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>
        <h1>Typing Test</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/signin">
              <Button label="Login" small />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
