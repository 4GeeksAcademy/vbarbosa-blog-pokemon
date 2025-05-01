// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// components
import { PokemonCards } from "../components/PokemonCards.jsx";
import { Types } from "../components/Types.jsx";
import { Items } from "../components/Items.jsx";

export const Home = () => {

	const {store, dispatch} =useGlobalReducer();
	


	return (
		<div className="container-fluid bgHome" style={{textTransform: 'capitalize'}}>
			<div className="m-0 py-3">
				<h1 className="text-danger m-1 fs-1">Pokemons</h1>
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
							store.items?.map((el,i) => <Items
								key={i}
								name={el.name}
								url={el.url}
							/>)
						}
					</div>
				</div>
			</div>
			<div className="my-3">
				<h1 className="text-success m-2">Types</h1>
				<div className="row">
					<div className="scroll-container d-flex p-3">
						{
							store.types?.map((type,i) => <Types
								key={i}
								name={type.name}
								url={type.url}
							/>)
						}
					</div>
				</div>
			</div>
		</div>
	);
}; 