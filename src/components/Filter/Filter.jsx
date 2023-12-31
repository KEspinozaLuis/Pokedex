import styles from "./filter.module.css"
import { useDispatch} from "react-redux";
import { 
    filterType, 
    removeFilter,
    clearFilter
} from "../../redux/actions";
import { BsFillXCircleFill } from "react-icons/bs";

const Filter = ({active, setActive}) => {
    const dispatch = useDispatch();

    //Capturar tipo y pasarlo como payload
    const handleCheckbox = (event) =>{
        if (event.target.checked) {
            dispatch(filterType(event.target.name));
		}else{
            dispatch(removeFilter(event.target.name))
        }
    }    
    //Limpiar filtros
    const clearCheckbox = (event) => {
        const checkboxs = document.querySelectorAll('input[type="checkbox"]');
        checkboxs.forEach(checkbox => checkbox.checked = false);
        dispatch(clearFilter());
    }

    const handleClose = (event) =>{
        event.preventDefault();
        setActive(false);
    }

    return (
       <section className={`${styles.containerFilter} ${active && styles.active}`}>
            <button className={`btn ${styles.btnClose}`} onClick={handleClose}>< BsFillXCircleFill/></button>
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
                <button className={`${styles.btnClear} btn btnPrimary`} onClick={clearCheckbox}>Clear</button>
            </div>
            
       </section>
    )
}

export default Filter;