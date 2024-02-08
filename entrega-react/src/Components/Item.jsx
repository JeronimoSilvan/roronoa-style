import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="col-md-4 container-productos">
            <div className="card">
                <Link to={"/item/" + item.id} className="tex-decoration-none text-dark">
                 <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                    <div className="card-body">
                        <p className="card-text"> {item.titulo}</p>
                        
                    </div>
                </Link>
               
            </div>
        </div>
    )
}
export default Item;