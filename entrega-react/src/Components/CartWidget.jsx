import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { CantTotalProductos } = useContext(CartContext);

    return (
        <div className="position-relative">
            <Link to="/cart" className="btn btn-secondary">
                <i className="bi bi-cart-fill"></i> Carrito
            </Link>
            {CantTotalProductos() > 0 &&
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {CantTotalProductos()}
                </span>
            }
        </div>
    );
}

export default CartWidget;
