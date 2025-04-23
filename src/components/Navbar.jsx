import { Link } from "react-router-dom";
import { Dropdown } from "./Dropdown";

// assets
import pokeapi from "../assets/img/pokeapi.png";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light sticky-top">
			<div className="container-fluid">
				<Link to="/">
					<img src={pokeapi} className="w-50 m-2"/>
				</Link>
				<div className="ml-auto mt-2 mt-lg-0">
					<Dropdown />
				</div>
			</div>
		</nav>
	);
};