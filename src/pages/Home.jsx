import { useEffect } from "react";
import { Link } from "react-router-dom";

// services
import pokemonServices from "../services/pokemonServices.js";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { PokemonCards } from "../components/PokemonCards.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

  useEffect (() => {
	loadSomePokemons();
  }, [])

  const loadSomePokemons = async () => {
	try {
		const resp = await pokemonServices.getSomePokemons();
		console.log(resp);
		
		dispatch({ type: 'get_pokemons', payload: resp.results })
	} catch (error) {
		console.log(error);
	}
}

	return (
		<div className="container-fluid mt-5">
			<div className="m-1">
				<div className="d-flex m-2">
					<h1 className="text-danger">Pokemons</h1>
					<Link to='/all_pokemons' className="ms-auto"><button type="button" class="btn btn-success">See More +</button></Link>
				</div>
				<div className="row">
					<div className="scroll-container d-flex p-3">
						{
							store.pokemons?.map(el => <PokemonCards
								name={el.name}
								url={el.url}
							/>)
						}
					</div>
				</div>
			</div>,
			<div className="m-3">
				<h1>Locations</h1>
				<PokemonCards />
			</div>,
			<div className="m-3">
				<h1>Types</h1>
				<PokemonCards />
			</div>
		</div>
	);
}; 