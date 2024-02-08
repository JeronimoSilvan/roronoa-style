

const CartWidget = () => {

    return (

         <button type="button" className="btn btn-secondary position-relative">
             <i className="bi bi-cart-fill"></i>Carrito
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0
            </span>
        </button> 

    )
}

export default CartWidget;