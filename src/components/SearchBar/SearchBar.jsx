import styles from './searchBar.module.css'
import {BsSearch} from "react-icons/bs";

const SearchBar = () => {
    return (
        <div className={styles.containerSearch}>
            <div className={styles.containerInput}>
                <BsSearch className={styles.iconSearch}/>
                <input
					type='search'
					name='valueSearch'
					id=''
					// value={valueSearch}
					// onChange={onInputChange}
					placeholder='Buscar nombre de pokemon'
				/>
            </div>
            <button className={styles.btnSearch}>Search</button>
        </div>
        
    )
}

export default SearchBar;