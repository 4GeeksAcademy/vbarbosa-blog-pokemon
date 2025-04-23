

export const Dropdown = () => {

    return (
        <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                Favourites 0
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button">Action</button></li>
                <li><button className="dropdown-item" type="button">Another action</button></li>
                <li><button className="dropdown-item" type="button">Something else here</button></li>
            </ul>
        </div>
    );
}