import ReactPaginate from 'react-paginate';
import './paginate.css'

const Paginate = ({pokemons, pokemonPerPaginate, changePage}) => {
    const pageCount = Math.ceil(pokemons.length / pokemonPerPaginate);
    

    return (
        <ReactPaginate
            previousLabel = {"<"}
            nextLabel = {">"}
            onePageChange = {changePage}
            pageCount={pageCount}
            containerClassName={"containerPaginate"}
        />
    )
}

export default Paginate;