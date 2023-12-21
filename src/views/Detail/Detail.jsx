import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css";
import Loading from "../../components/Loading/Loading";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const URL_API = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    axios.get(`${URL_API}${id}`).then((response) => {
      setPokemon(response.data);
      setLoading(false)
    });
    return setPokemon({});
  }, [id]);

  return (
    <>
    {
      loading 
      ? <Loading />
      :<main className={`${styles.mainPokemon} container`}>
        <div className={styles.headerMainPokemon}>
          <div className={styles.containerInfoPokemon}>
            <span className={styles.numberPokemon}>#{pokemon.id}</span>
            <h1>{pokemon.name}</h1>
            <div className="card-types">
              {pokemon?.types?.map((type) => (
                <span key={type.type.name} className={`${type.type.name}`}>
                  {type.type.name}
                </span>
              ))}
            </div>
            <div className={styles.infoPokemon}>
              <div className={styles.groupInfo}>
                <p>Height</p>
                <span>{pokemon.height}</span>
              </div>
              <div className={styles.groupInfo}>
                <p>Weight</p>
                <span>{pokemon.weight}KG</span>
              </div>
            </div>
          </div>
		      <div className={styles.containerImagePokemon}>
            <img
              src={pokemon?.sprites?.other?.dream_world.front_default}
              alt={`Pokemon ${pokemon.name}`}
            />
          </div>
      </div>
      <div className={styles.containerStats}>
        <h1>Statistics</h1>
        <div className={styles.stats}>
          <div className={styles.statsGroup}>
            <span>Hp</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[0].base_stat}</span>
          </div>
          <div className={styles.statsGroup}>
            <span>Attack</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[1].base_stat}</span>
          </div>
          <div className={styles.statsGroup}>
            <span>Defense</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[2].base_stat}</span>
          </div>
          <div className={styles.statsGroup}>
            <span>Special Attack</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[3].base_stat}</span>
          </div>
          <div className={styles.statsGroup}>
            <span>Special Defense</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[4].base_stat}</span>
          </div>
          <div className={styles.statsGroup}>
            <span>Speed</span>
            <div className={styles.progressBar}></div>
            <span>{pokemon.stats && pokemon.stats[5].base_stat}</span>
          </div>
        </div>
      </div>
    </main>
    }
    </>
  );
};

export default Detail;
