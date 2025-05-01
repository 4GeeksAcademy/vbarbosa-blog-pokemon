import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

// assets
import pokeapi from "../assets/img/pokeapi.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container">
				<Link to="/">
					{/* used same logo from pokeapi to avoid copyright issues */}
					<img src={pokeapi} className="w-50 m-2"/>
				</Link>
				{/* created as a component in order to map over favList and show favs */}
				<div className="ml-auto mt-2 mt-lg-0">
					<Dropdown />
				</div>
			</div>
		</nav>
	);
};