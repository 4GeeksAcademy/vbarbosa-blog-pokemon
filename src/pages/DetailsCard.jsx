import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link} from "react-router-dom";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// services
import pokemonServices from "../services/pokemonServices.js";
import { element } from "prop-types";

export const DetailsCard = (props) => {

    const {store, dispatch} = useGlobalReducer();

    const params = useParams();
    const navigate = useNavigate();
    const { id } = useParams();

    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    const name = store.details?.name;
    const description = store.description?.descriptions?.[7]?.description;

    useEffect(()=>{
        getDetails();
        getDescription();
        getGender();
    },[])

    const getDetails = async () => pokemonServices.getOnePokemon(id).then(data=>{
        dispatch({type: 'get_details', payload:data});
    })

    const getDescription = async () => pokemonServices.getDescription(id).then(data=>{
        dispatch({type: 'get_description', payload:data})
    })

    const getGender = async () => pokemonServices.getGender(id).then(data=>{
        dispatch({type: 'get_gender', payload:data})
    })
    
    
    return (
        <div className="container-fluid bg-dark p-5 bgDetails">
            <div className="card m-4 w-75 mx-auto bgCardDetails">
                <div className="row g-0 p-2">
                    <div className="col-md-4 align-content-center">
                    <img src={imgUrl} className="img-fluid rounded-start bgCardsImg m-1" alt={store.details?.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body m-2 bgCardBody">
                            <h2 className="card-title text-danger" style={{textTransform: 'capitalize'}}>{name}</h2>
                            <h4 className="text-secondary">{description}.</h4>
                            <div className="d-flex" style={{textTransform: 'capitalize'}}>
                                <div className="d-flex m-1">
                                    <h5 className="me-1">Gender:</h5>
                                    <h5 className="text-primary">{store.gender?.name}</h5>
                                </div>
                                <div className="d-flex m-1">
                                    <h5 className="me-1">Height:</h5>
                                    <h5 className="text-primary">{store.details?.height}</h5>
                                </div>
                                <div className="d-flex m-1">
                                    <h5 className="me-1">Weight:</h5>
                                    <h5 className="text-primary">{store.details?.weight}</h5>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between text-center">
                                <div className="w-50 p-2 border m-1">
                                    <h4>Abilities</h4>
                                    <div style={{textTransform: 'capitalize'}}>
                                        {store.details?.abilities?.map((ability, i) => (
                                            <p key={i} className="fs-5 m-0">{ability.ability.name}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="w-50 p-2 border m-1" style={{textTransform: 'capitalize'}}>
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