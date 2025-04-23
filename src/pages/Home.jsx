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
		<div className="container-fluid bgHome" style={{textTransform: 'capitalize'}}>
			<div className="m-0 py-3">
				<div className="d-flex m-2">
					<h1 className="text-danger m-1 fs-1">Pokemons</h1>
					<Link to='/all_pokemons' className="ms-auto"><button type="button" className="btn btn-success">See More +</button></Link>
				</div>
				<div className="row">
					<div className="scroll-container d-flex p-3">
						{
							store.pokemons?.map((el,i) => <PokemonCards
								key={i}
								name={el.name}
								url={el.url}
							/>)
						}
					</div>
				</div>
			</div>
			<div className="my-3">
				<h1 className="text-success m-2">Items</h1>
				<div className="row">
					<div className="scroll-container d-flex p-3">
						{
							store.pokemons?.map((el,i) => <PokemonCards
								key={i}
								name={el.name}
								url={el.url}
							/>)
						}
					</div>
				</div>
			</div>
			<div className="my-3">
				<h1 className="text-primary m-2">Types</h1>
				<div className="row">
					<div className="scroll-container d-flex p-3">
						{
							store.pokemons?.map((el,i) => <PokemonCards
								key={i}
								name={el.name}
								url={el.url}
							/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
}; 