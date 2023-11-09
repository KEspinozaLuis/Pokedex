import { Link } from 'react-router-dom';
import styles from './card.module.css';

const Card = ({pokemon}) => {
    return (
        <Link to={`/detail/${pokemon.id}`} className={styles.cardPokemon}>
           <div className={styles.cardImg}>
                <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} />
           </div>
           <div className={styles.cardInfo}>
                <span className={styles.idPokemon}>N° {pokemon.id}</span>
                <h3>{pokemon.name}</h3>
                <div className="card-types">
                    {
                        pokemon.types.map(type=> (
                            <span key={type.type.name} className={type.type.name}>{type.type.name}</span>
                        ))
                    }
                </div>
           </div>
        </Link>
    )
}

export default Card;