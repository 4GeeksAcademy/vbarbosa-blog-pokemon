import { useEffect } from "react";

// services
import pokemonServices from "../services/pokemonServices.js";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { PokemonCards } from "../components/PokemonCards.jsx";
import { Search } from "../components/Search.jsx";

export const AllPokemons = (props) => {

    const {store, dispatch} =useGlobalReducer();

    useEffect (() => {
        loadAllPokemons();
    }, [])    
    
    const loadAllPokemons = async () => {
        try {
            const resp = await pokemonServices.getAllPokemons();
            console.log(resp);
            
            dispatch({ type: 'get_all_pokemons', payload: resp.results })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="m-3">
            <div className="d-flex">
                <h1 className="m-3">All Pokemons</h1>
                <div className="ms-auto m-3">
                    <Search 
                    name={props.name}
                    />
                </div>
            </div>
            <div className="row">
                {
                    store.pokemons?.map(el => <PokemonCards
                        name={el.name}
                        url={el.url}
                    />)
                }
            </div>
        </div>
    );
}