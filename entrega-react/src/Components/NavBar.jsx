import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <ul className="menu nav d-flex justify-content-evenly align-items-center">
            <li className="botonMenu">
                <NavLink className="nav-link" activeclassname="active" to={"/"}><i className="bi bi-arrow-bar-right"></i>Home</NavLink>
            </li>
            <li className="botonMenu">
                <NavLink className="nav-link" activeclassname="active" to={"/categoria/camisas"}><i className="bi bi-arrow-bar-right"></i>Camisas</NavLink>
            </li>
            <li className="botonMenu">
                <NavLink className="nav-link" activeclassname="active" to={"/categoria/pantalones"}><i className="bi bi-arrow-bar-right"></i>Pantalones </NavLink>
            </li>
            <li className="botonMenu">
                <NavLink className="nav-link" activeclassname="active" to={"/categoria/zapatillas"}><i className="bi bi-arrow-bar-right"></i>Zapatillas </NavLink>
            </li>
            <li className="botonMenu">
                <NavLink className="nav-link" activeclassname="active" to={"/categoria/carrito"}>
                    <CartWidget />
                </NavLink>
            </li>
        </ul>
    )
}

export default NavBar;
