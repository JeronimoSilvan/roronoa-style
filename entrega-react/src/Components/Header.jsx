import Logo from "../assets/logo.jpg";

const Header = () => {
    return (

        <header>
            <h1 className="titulo text-center p-3">
                Roronoa-Style <img className="logo" src={Logo} alt="Logo" />
            </h1>
        </header>)
}

export default Header;