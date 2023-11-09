import { useEffect, useState } from "react";
import { getPokemons } from "../../redux/actions";
import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Filter from "../../components/Filter/Filter";
import {BsFilterSquareFill} from "react-icons/bs";
import styles from "./home.module.css";

const HomePage = () => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    useEffect(()=>{
        dispatch(getPokemons());
    }, [])

    const openFilter = () => {
        setActive(!active);
    }

    return (
        <>
        <Filter active={active}/>
        <div className="container">
            <button className={`${styles.textFilter} btn`} onClick={openFilter}>
                <BsFilterSquareFill/>
                <span>Filter</span>
            </button> 
        </div>
        <CardsContainer />
        </>
        

    )
}

export default HomePage;