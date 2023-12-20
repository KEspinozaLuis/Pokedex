import { Link } from "react-router-dom";
import styles from './landing.module.css';
import Brand from '../../components/Brand/Brand'

const Landing = () => {
    return (
        <>
            <Brand />
            <section className={styles.landing}>
                <div className={`container ${styles.sectionLanding}`}>
                    <div className={styles.information}>
                        <img src="./logo.png" alt="logo" className={styles.logo}/>
                        <p className={styles.text}>Pokedex, search, filter and see the details of your favorite Pokémon..</p>
                        <Link to="/pokemons" className={`btnPrimary ${styles.enter}`}>INGRESAR</Link>
                    </div>
                    <div className={styles.slider}>
                        <img src="./ash.png" alt="ash" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Landing;