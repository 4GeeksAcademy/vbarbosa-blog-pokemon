import { useEffect, useState } from "react";

// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Dropdown = () => {

    const {store, dispatch} =useGlobalReducer();
    const [fav, setFav] = useState([]);

    useEffect(() => {
        // Initialize favorites from the store with the new items on list or empty if none is saved
        setFav(store.favList || []);
    }, [store.favList]);

    const handleDelete = (name) => {
        // Remove item from fav list on store
        const newList = fav.filter(item => item !== name);
        setFav(newList);
        dispatch({ type: 'remove_fav', payload: newList});
        
    }

    return (
        <div className="btn-group">
            <button type="button" 
            className="btn btn-primary dropdown-toggle" 
            data-bs-toggle="dropdown"
            data-bs-auto-close="false"
            aria-expanded="false">
                {/* we use lenght to indicate how many items are on the list */}
                {/* if none woul be set to 0 */}
                Favourites {store.favList?.length > 0 ? store.favList?.length : "0"}
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                {/* important to use condition to either show list or a span/comment with no items added */}
                {/* we will only map if there is items on the list */}
            {store.favList && store.favList.length > 0 ? (
                    store.favList.map((el, i) => (
                        <li key={i} className="d-flex">
                            <button className="dropdown-item m-1" type="button" style={{ textTransform: 'capitalize' }}>
                                {el}
                            </button>
                            <button 
                                type="button" 
                                className="btn-close m-2" 
                                aria-label="Close"
                                onClick={() => handleDelete(el)}
                            ></button>
                        </li>
                    ))
                ) : (
                    <li>
                        <button className="dropdown-item m-1" type="button" disabled>Your favourites list</button>
                    </li>
                )}
                
            </ul>
        </div>
    );
}