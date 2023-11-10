import { useState } from 'react';
import styles from './searchBar.module.css'
import {BsSearch} from "react-icons/bs";
import { useDispatch} from 'react-redux';
import { searchName } from '../../redux/actions';

const SearchBar = () => {
    const [namePokemon, setNamePokemon] = useState('');
    const dispatch = useDispatch();

    const handleInput = (event) =>{
        setNamePokemon(event.target.value)
    }

    const handleSearch = () => {
        dispatch(searchName(namePokemon))
    }

    return (
        <div className={styles.containerSearch}>
            <div className={styles.containerInput}>
                <BsSearch className={styles.iconSearch}/>
                <input
					type='search'
					name='namepokemon'
					value={namePokemon}
					onChange={handleInput}
					placeholder='Search name of pokemon'
				/>
            </div>
            <button className={styles.btnSearch} onClick={handleSearch}>Search</button>
        </div>
        
    )
}

export default SearchBar;