
import { useEffect, useState } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const FavBtn = (props) => {

    const {store, dispatch} =useGlobalReducer();
    const [fav, setFav] = useState([]);

    useEffect(() => {
        // Initialize favorites from the store
        setFav(store.favList || []);
    }, [store.favList]); // Depend on store.favList

    const handleClick = () => {
        if (!fav.includes(props.name)) {
            // Add to favorites
            const newFav = [...fav, props.name];
            setFav(newFav);
            dispatch({ type: 'add_fav', payload: newFav });
        } else {
            const newList = fav.filter(item => item !== props.name);
            setFav(newList);
            dispatch({ type: 'remove_fav', payload: newList});
        }
    }
    
    

    console.log(fav);
    
    return (
        <button type="button"
        className="btn btn-outline-warning text-danger"
        onClick={handleClick}>
            <FontAwesomeIcon icon={faHeart}/>
        </button>
    );
} 