import React from "react"
import styled from "styled-components"

const NavbarImg = styled.img`
  width: 200px;
`;

const Navbar = () => {
    const logoimg = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <NavbarImg 
                alt="pokeapi-logo"
                src={logoimg}
                />
            </div>
        </nav>
    );
};

export default Navbar;