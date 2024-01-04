import { Link } from "react-router-dom";
import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
           
            <Link to='/'> 
                    <span>Movies Flix</span>
            </Link>
            
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Watch'>Assistir</Link>
            </nav>
        </header>
    )
}


export default Header;