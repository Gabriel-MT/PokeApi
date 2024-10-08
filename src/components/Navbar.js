import React from "react"

const Navbar = () => {
    const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img 
                alt="pokeapi-logo"
                src={logoimg}
                className="navbar-img"
                />
            </div>
        </nav>
    );
};

export default Navbar;