import { useSelector } from "react-redux"
import Card from "../Card/Card";
import styles from './cardContainer.module.css'

const CardsContainer = () => {
    const pokemons = useSelector(state => state.pokemons);

    return (
        <div className={`${styles.cardList} container`}>
            {
                pokemons.map( pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id}/>
                ))
            }
        </div>
    )
}

export default CardsContainer;