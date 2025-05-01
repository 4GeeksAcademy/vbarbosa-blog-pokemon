import React, {useEffect } from "react";
import {useParams} from "react-router-dom";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// services
import pokemonServices from "../services/pokemonServices.js";

export const DetailsCard = () => {

    const {store, dispatch} = useGlobalReducer();
    const { id } = useParams();

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const name = store.details?.name;
    const description = store.description?.descriptions?.[7]?.description;
    const habitat = store.species?.habitat?.name;

    useEffect(()=>{
        getDetails();
        getDescription();
        getSpecies();
    },[])

    const getDetails = async () => pokemonServices.getOnePokemon(id).then(data=>{
        dispatch({type: 'get_details', payload:data});
    })

    const getDescription = async () => pokemonServices.getDescription(id).then(data=>{
        dispatch({type: 'get_description', payload:data})
    })

    const getSpecies = async () => pokemonServices.getSpecies(id).then(data=>{
        dispatch({type: 'get_species', payload:data})
    })
    
    return (
        <div className="container-fluid bg-dark p-5 bgDetails">
            <div className="card m-4 w-75 mx-auto bgCardDetails">
                <div className="row p-3">
                    <div className="col-12 col-md-4 align-content-center">
                        <img src={imgUrl} className="img-fluid rounded-start bgCardsImg m-1" alt={store.details?.name}/>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="card-body m-2 bgCardBody">
                            <div className="row">
                                <div className="col-12">
                                    <h2 className="card-title text-danger" style={{textTransform: 'capitalize'}}>{name}</h2>
                                </div>
                            </div>
                            <div className="row m-2">
                                <div className="col-12">
                                    <h4 className="text-secondary">{description}.</h4>
                                </div>
                            </div>
                            <div className="row m-2" style={{textTransform: 'capitalize'}}>
                                <div className="col-12 col-lg-4 d-flex">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="me-1">Habitat:</h5>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="text-primary">{habitat}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 d-flex">
                                    <div className="row g-0 m-0">
                                        <div className="col-12">
                                            <h5 className="me-1">Height:</h5>
                                        </div>
                                        <div className="col-12">
                                            <h5 className="text-primary">{store.details?.height}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 d-flex">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5 className="me-1">Weight:</h5>
                                        </div>
                                        <div className="col-12">
                                        <h5 className="text-primary">{store.details?.weight}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" row text-center m-2 justify-content-center">
                                <div className=" col-12 col-lg-5 border border-warning border-2 mb-3 mb-lg-0 p-2 me-2">
                                    <h4>Abilities</h4>
                                    <div style={{textTransform: 'capitalize'}}>
                                        {store.details?.abilities?.map((ability, i) => (
                                            <p key={i} className="fs-5 m-0">{ability.ability.name}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 border border-warning border-2 p-2" style={{textTransform: 'capitalize'}}>
                                    <h4 className="me-1">Type</h4>
                                    {store.details?.types?.map((type, i) => (
                                        <p key={i} className="m-0 fs-5">{type.type.name}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}