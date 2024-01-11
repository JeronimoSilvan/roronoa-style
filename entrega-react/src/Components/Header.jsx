import Logo from "../assets/logo.jpg";

const Header = () => {
    return (

        <header className="nav">
            <h1 className="titulo">
                Roronoa-Style <img className="logo" src={Logo} alt="Logo" />
            </h1>
        </header>)
}

export default Header;