import { useEffect } from "react";
import { getPokemons } from "../redux/actions";
import { useDispatch } from "react-redux";
import CardsContainer from "../components/CardsContainer/CardsContainer";

const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons());
    }, [])

    return (
        <>
        <CardsContainer />
        </>
        

    )
}

export default HomePage;