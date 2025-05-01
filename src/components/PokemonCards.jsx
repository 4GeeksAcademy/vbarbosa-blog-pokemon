import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// services
import pokemonServices from "../services/pokemonServices.js";


import { FavBtn } from "./Favbtn.jsx";

export const PokemonCards = (props) => {

    const {store, dispatch} =useGlobalReducer();

    // set states for habitat and details to in order to update cthe card with the data for each pokemon
    // As both comes from different endpoint we need to set them separatedly
    const [habitat, setHabitat] = useState(null);
    const [details, setDetails] = useState(null);
    
    const pId = props.url.split('/')[6];   
    
    const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+pId+'.png';

    // render the card with data from props and constants
    useEffect(() => {
        getSpecies();
        getDetails();
    }, []);

    const getDetails = async () => pokemonServices.getOnePokemon(pId).then(data=>{
		dispatch({type: 'get_details', payload:data});
        setDetails(data);
	})

	const getSpecies = async () => pokemonServices.getSpecies(pId).then(data=>{
        dispatch({type: 'get_species', payload:data})
        setHabitat(data?.habitat);
    })
    

    return (
        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
            <div className="card m-2 bgCardBody">
                <div className="row">
                    <div className="col-12">
                        <img src={imgUrl}
                        className="card-img-top bgCards" alt={props.name}/>
                    </div>
                </div>
                <div className="card-body m-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="card-title text-danger">{props.name}</h3>
                        </div>
                    </div>
                    <div className="row my-3" style={{textTransform: 'capitalize'}}>
                        <div className="col-12 d-flex">
                            <div className="row">
                                <div className="col-12 col-lg-5"><h5>Habitat:</h5></div>
                                <div className="col-12 col-lg-7"><h5 className="text-primary">{habitat?.name}</h5></div>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="row">
                                <div className="col-12 col-lg-7"><h5 className="me-2">Height:</h5></div>
                                <div className="col-12 col-lg-5"><h5 className="text-primary">{details?.height}</h5></div>
                            </div>
                        </div>
                        <div className="col-12 d-flex">
                            <div className="row">
                                <div className="col-12 col-lg-7"><h5>Weight:</h5></div>
                                <div className="col-12 col-lg-5"><h5 className="text-primary">{details?.weight}</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between p-3">
                    <div className="col-8 col-sm-9">
                        <Link to={'/details/'+pId} className="btn btn-outline-primary">Learn more!</Link>
                    </div>
                    <div className="col-4 col-sm-3">
                        <FavBtn 
                        key={pId}
                        name={props.name}
                        url={props.url}
                        />
                    </div>
                </div>
            </div>
		</div>
    );
}