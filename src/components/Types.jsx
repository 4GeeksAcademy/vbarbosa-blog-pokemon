import { useEffect, useState } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// services
import pokemonServices from "../services/pokemonServices.js";

export const Types = (props) => {

    const {store, dispatch} =useGlobalReducer();
    const [damage, setDamage] = useState(null);
    
    const pId = props.url.split('/')[6];

    const imgUrl2 = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/'+pId+'.png';
    const imgNA = 'https://fakeimg.pl/300x68/58cae3/585187?text='+props.name+'&font=lobster&font_size=24';

    // manage the image source
    const [imageSrc, setImageSrc] = useState(imgUrl2);

    useEffect(() => {
        getOneType();
    }, []);

    // Function to handle image load error
    const handleImageError = () => {
        setImageSrc(imgNA); // Fallback to the other image URL
    };

    const getOneType = async () => pokemonServices.getOneType(pId).then(data=>{
        dispatch({type: 'get_one_type', payload:data});
        setDamage(data?.damage_relations);
    })
    


    return (
        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
            <div className="card m-2 bgTypes">
                <div className="row">
                    <div className="col-12">
                        <img src={imageSrc}  
                        onError={handleImageError} 
                        className="card-img-top bgCards border-radius-3" 
                        alt={props.name}/>
                    </div>
                </div>
                <div className="card-body m-2" style={{minHeight: '19git rem'}}>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="text-primary">Double damage</h3>
                        </div>
                    </div>
                    <div className="row my-3 d-flex" style={{textTransform: 'capitalize'}}>
                        <div className="col-6">
                            <h5 className="text-success m-1">From:</h5>
                            <div className="col-12">
                                {damage?.double_damage_from && damage.double_damage_from.length > 0 ? (
                                damage.double_damage_from.map((damageType, i) => (
                                    <li key={i} className="fs-5 m-0 text-danger m-1">{damageType.name}</li>
                                ))) : (<li className="fs-5 m-0 text-danger m-1">None</li>)}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="text-success m-1">To:</h5>
                                </div>
                                <div className="col-12">
                                    {damage?.double_damage_to && damage.double_damage_to.length > 0 ? (
                                    damage.double_damage_to.map((damageType, i) => (
                                        <li key={i} className="fs-5 m-0 text-danger m-1">{damageType.name}</li>
                                    ))) : (<li className="fs-5 m-0 text-danger m-1">None</li>)}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="col-12 text-center mb-3">
                    <div className="btn btn-outline-danger">Learn more!</div>
                </div>
                
            </div>
        </div>
    );
}