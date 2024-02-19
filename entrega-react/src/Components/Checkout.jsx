import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";



const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const { cart, clear, CantTotalProductos, SumaTotalProductos } = useContext(CartContext)

  

    const generateOrder = () => {
        if (nombre.length === 0) {
            return false;
        }
        if (email.length === 0) {
            return false;
        }
        if (telefono.length === 0) {
            return false;
        }

        const comprador = { name: nombre, email: email, phone: telefono }
        const items = cart.map(item => ({ id: item.idx, title: item.titulo, price: item.precio }));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth() + 1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes}}`;
        const total = SumaTotalProductos();
        const order = { buyer: comprador, items: items, date: date, total: total };

        // subimos los datos a firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(resultado => {
            clear();
            setOrderId(resultado.id);
        });

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Finalizar la compra</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y Appelido</label>
                            <input type="text" className="form-control text-secondary" onInput={(e) => { setNombre(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control text-secondary" onInput={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control text-secondary" onInput={(e) => { setTelefono(e.target.value) }} />
                        </div>
                        <button type="button" className="btn btn-secondary" onClick={generateOrder} >Generar orden</button>
                    </form>

                </div>
                <div className="col-md-6">
                    <table className="table">
                        <tbody>
                            {cart.map(producto =>
                                <tr key={producto.id}>
                                    <td className="text-secondary"> <img src={producto.imagen} alt={producto.titulo} width={80} /> </td>
                                    <td className="text-secondary"> {producto.titulo} </td>
                                    <td className="text-secondary">${producto.precio} </td>
                                    <td className="text-secondary">{producto.quantity} </td>
                                    <td className="text-secondary">${producto.quantity * producto.precio} </td>

                                </tr>
                            )}

                            <tr>
                                <td className="text-secondary" colSpan={4}>Total</td>
                                <td className="text-secondary">${SumaTotalProductos()} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert alert-success p-5 text-center" role="alert">
                        <h1>Gracias por tu compra! <i class="bi bi-emoji-smile-fill"></i> </h1>
                        <h3>Tu orden de compra es: <b> {orderId} </b></h3>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;