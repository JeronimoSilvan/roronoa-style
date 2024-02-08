import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-3 offset-md-3">
                    <img src={item.imagen} alt={item.titulo} />
                </div>
                <div className="col-md-3">
                    <h1>{item.titulo} </h1>
                    <h5>{item.descripcion} </h5>
                    <h5>${item.precio} </h5>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;