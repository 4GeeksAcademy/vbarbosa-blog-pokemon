
// hooks
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const PokemonCards = (props) => {

    const {store, dispatch} =useGlobalReducer()

    console.log(store.pokemons);
    
    
    return (
        <div className="col-4">
            <div className="card m-2">
                <img src="https://picsum.photos/1000/900?random=1" className="card-img-top" alt="..."/>
                <div className="card-body m-2">
                    <h3 className="card-title">{props.name}</h3>
                    <div className="my-3">
                        <span>ITEM1</span>
                        <br />
                        <span>ITEM2</span>
                        <br />
                        <span>ITEM3</span>
                    </div>
                    <div className="d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-primary">Learn more!</button>
                        <button type="button" class="btn btn-outline-warning">LIKE</button>
                    </div>
                </div>
            </div>
		</div>
    );
}