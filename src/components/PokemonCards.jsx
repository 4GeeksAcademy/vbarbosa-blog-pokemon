import { Link } from "react-router-dom";

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

export const PokemonCards = (props) => {

    const pId = props.url.split('/')[6];
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pId}.png`
    
    return (
        <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 ">
            <div className="card m-2 bg-light">
                <img src={imgUrl}
                className="card-img-top bgCards" alt={props.name}/>
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
                        <Link to={'/details/'+pId} className="btn btn-outline-primary">Learn more!</Link>
                        <button type="button" className="btn btn-outline-warning btn-light">
                            <FontAwesomeIcon icon={faHeart}/>
                        </button>
                    </div>
                </div>
            </div>
		</div>
    );
}