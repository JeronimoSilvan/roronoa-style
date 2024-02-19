

import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, removeItem, CantTotalProductos,clear, SumaTotalProductos } = useContext(CartContext)

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
                            <tr>
                            <td className="text-end" colSpan={6} onClick={() => {clear()}}> <a className="btn btn-secondary"> Vaciar Carrito<i className="bi bi-trash3-fill"></i> </a> </td>
                            </tr>
                            { cart.map(producto =>
                            <tr key={producto.id}>
                                <td className="text-secondary"> <img src={producto.imagen} alt={producto.titulo} width={80} /> </td>
                                <td className="text-secondary"> {producto.titulo} </td>
                                <td className="text-secondary">${producto.precio} </td>
                                <td className="text-secondary">{producto.quantity} </td>
                                <td className="text-secondary">${producto.quantity * producto.precio} </td>
                                <td className="text-secondary text-end" onClick={() => {removeItem(producto.id)}}><i className="bi bi-trash3-fill"></i></td>
                            </tr>
                            )}
                            
                            <tr>
                                <td className="text-secondary" colSpan={4}>Total</td>
                                <td className="text-secondary">${SumaTotalProductos()} </td>
                                <td className="text-end tex-secondary"> <Link to={"/checkout"} className="btn btn-secondary" >Finalizar la compra</Link> </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;