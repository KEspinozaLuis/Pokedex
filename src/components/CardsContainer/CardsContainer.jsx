import { useSelector } from "react-redux"
import Card from "../Card/Card";
import styles from './cardContainer.module.css'
import { useState } from "react";
import ReactPaginate from 'react-paginate';

const CardsContainer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pokemons = useSelector(state => state.pokemons);
    const pokemonPerPaginate = 8;

    const firstIndex = currentPage * pokemonPerPaginate;
    const lastIndex = firstIndex + pokemonPerPaginate;
    const pageCount = Math.ceil(pokemons.length / pokemonPerPaginate);

    const handlePageChange = ({selected}) =>{
        console.log("llegue", selected);
        setCurrentPage(selected)
    }

    return (
        <section className="container">
            <div className={styles.cardList}>
                {
                pokemons.map( pokemon => (
                    <Card pokemon={pokemon} key={pokemon.id}/>
                )).slice(firstIndex, lastIndex)
            }
        </div>
        <ReactPaginate
            previousLabel = {"<"}
            nextLabel = {">"}
            onPageChange = {handlePageChange}
            pageCount={pageCount}
            containerClassName={styles.pagination}
            activeClassName={styles.activePage}
            disabledClassName = {styles.disabled}
        />
        </section>
    )
}

export default CardsContainer;