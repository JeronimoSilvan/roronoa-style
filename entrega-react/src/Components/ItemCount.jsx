
import { useEffect, useState } from "react";

const ItemCount = ({ stock }) => {
    const [contador, settContador] = useState(0);
    const [itemStock, settItemStock] = useState(stock);

    const aumentar = () => {
        if (contador < itemStock) {
            settContador(contador + 1)
        }
    }
    
    const restar = () => {
        if (contador > 0) {
            settContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (contador <= itemStock) {
            settItemStock(itemStock - contador);
            settContador(0);
            
        }
    }

    useEffect (() => {
        settItemStock(stock)
    }, [stock]);

    return (
        <>
            <div className="row my-1">
                <div className="col-md-3">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={restar}>-</button>
                        <button type="button" className="btn btn-secondary">{contador}</button>
                        <button type="button" className="btn btn-secondary" onClick={aumentar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col-md-7">
                    <button type="button" className="btn btn-secondary" onClick={onAdd}>Agregar al carrito</button>
                </div>
            </div>
        </>
    )
}

export default ItemCount;