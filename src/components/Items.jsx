import { useEffect, useState } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// services
import pokemonServices from "../services/pokemonServices.js";

export const Items = (props) => {

    const {store, dispatch} =useGlobalReducer();
    const [item, setItem] = useState(null);
    
    const pId = props.url.split('/')[6];

    const imgItem = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/'+props.name+'.png';


    useEffect(() => {
        getOneItem();
    }, []);

    const getOneItem = async () => pokemonServices.getOneItem(pId).then(data=>{
        console.log(data.attributes);
        
        dispatch({type: 'get_one_item', payload:data});
        setItem(data?.attributes);
    })
    


    return (
        <div className="col-12 col-sm-6 col-md-5 col-lg-4">
            <div className="card m-2 bgItems">
                <div className="row">
                    <div className="col-12 w-50 mx-auto p-2">
                        <img src={imgItem} 
                        className="card-img-top bgCards border-radius-3" 
                        alt={props.name}/>
                    </div>
                </div>
                <div className="card-body m-2" style={{minHeight: '17rem'}}>
                    <div className="row m-1">
                        <div className="col-12 p-2 text-center">
                            <h3 className="text-primary">{props.name}</h3>
                        </div>
                        <div className="col-12 col-lg-6 mx-auto">
                            {item?.length > 0 ? (
                                item.map((el, i) => (
                                    <p key={i} className="fs-5 m-0 text-success text-center">{el.name}</p>
                                ))) : (<p className="fs-5 m-0 text-success">None</p>)}
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center mb-3">
                    <div className="btn btn-outline-success">Learn more!</div>
                </div>
            </div>
        </div>
    );
}