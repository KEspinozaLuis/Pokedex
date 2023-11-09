import { Link } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar"
import styles from './header.module.css'

const Header = () => {
    return(
        <header className={`${styles.header} container`}>
           <Link to="/pokemons" className={styles.logo}>
                <img src="/Pokedex_logo.png" alt="Logo Pokedex" />
            </Link>
            <SearchBar />
        </header>
    )
}

export default Header;