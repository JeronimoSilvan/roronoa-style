

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, addItem, removeItem, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext)

    if (CantTotalProductos() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center display-1">
                        <p>No hay productos en el carrito<i className="bi bi-emoji-frown-fill"></i></p>
                        <Link to={"/"} className="btn btn-secondary"> Volver a la página principal </Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Carrito</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            { cart.map(producto =>
                            <tr key={producto.id}>
                                <td className="text-secondary"> <img src={producto.imagen} alt={producto.titulo} width={80} /> </td>
                                <td className="text-secondary"> {producto.titulo} </td>
                                <td className="text-secondary">${producto.precio} </td>
                                <td className="text-secondary">{producto.quantity} </td>
                                <td className="text-secondary">${producto.quantity * producto.precio} </td>
                                <td className="text-secondary" onClick={() => {removeItem(producto.id)}}><i className="bi bi-trash3-fill"></i></td>
                            </tr>
                            )}
                            
                            <tr>
                                <td className="text-secondary" colSpan={4}>Total</td>
                                <td className="text-secondary">${SumaTotalProductos()} </td>
                                <td>&nbnsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;