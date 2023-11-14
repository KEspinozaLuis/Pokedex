import { useState } from "react";
import styles from "./filter.module.css"
import { useDispatch, useSelector } from "react-redux";
import { filterType } from "../../redux/actions";

const Filter = ({active}) => {
    // const pokemons = useSelector(state=> state.backupPokemons)
    const dispatch = useDispatch();

    //Captura los tipos en un estado local
    // const [types, setTypes] = useState([])
    // const handleCheckbox = (event) =>{
    //     if(event.target.checked){
    //         setTypes([...types, event.target.name])
    //      }else{
    //          const filterType = types.filter(type => type !== event.target.name);
    //         setTypes(filterType)
    //     }
    // }

    //Capturar tipo y pasarlo como payload
    const handleCheckbox = (event) =>{
        if (event.target.checked) {
            dispatch(filterType(event.target.name));
		}
    }    

    return (
       <section className={`${styles.containerFilter} ${active && styles.active}`}>
            <div className={styles.contentFilter}>
                <h3 className={styles.titleFilter}>Type</h3>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="grass" 
                        onChange={handleCheckbox}
                    />
                    <span>Grass</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox" 
                        name="fire" 
                        onChange={handleCheckbox}
                    />
                    <span>Fire</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="water" 
                        onChange={handleCheckbox}
                    />
                    <span>Water</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="electric" 
                        onChange={handleCheckbox}
                    />
                    <span>Electric</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="bug" 
                        onChange={handleCheckbox}
                    />
                    <span>Bug</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="ice" 
                        onChange={handleCheckbox}
                    />
                    <span>Ice</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="rock" 
                        onChange={handleCheckbox}
                    />
                    <span>Rock</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="psychic" 
                        onChange={handleCheckbox}
                    />
                    <span>Psychic</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="dragon" 
                        onChange={handleCheckbox}
                    />
                    <span>Dragon</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="normal" 
                        onChange={handleCheckbox}
                    />
                    <span>Normal</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="fairy" 
                        onChange={handleCheckbox}
                    />
                    <span>Fairy</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="ghost" 
                        onChange={handleCheckbox}
                    />
                    <span>Ghost</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="ground" 
                        onChange={handleCheckbox}
                    />
                    <span>Ground</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="steel" 
                        onChange={handleCheckbox}
                    />
                    <span>Steel</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="sinister" 
                        onChange={handleCheckbox}
                    />
                    <span>Sinister</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="fighting" 
                        onChange={handleCheckbox}
                    />
                    <span>Fighting</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="flying" 
                        onChange={handleCheckbox}
                    />
                    <span>Flying</span>
                </div>
                <div className={styles.contentCheck}>
                    <input 
                        type="checkbox"
                        name="poison" 
                        onChange={handleCheckbox}
                    />
                    <span>Poison</span>
                </div>
            </div>
       </section>
    )
}

export default Filter;