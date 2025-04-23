import { useState } from "react";


export const Search = (props) => {

    const [searcPokemon, setSearchPokemon] = useState("");
    const pokemons = props.name

    console.log(pokemons);

    const handleChange = (e) => {
        setSearchPokemon(e.target.value);
    }

    return (
        <form className="d-flex">
            <input className="form-control me-2" 
            type="search" 
            value={searcPokemon}
            onChange={handleChange}
            placeholder="Search" 
            aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
    );
}