import React from "react";
import styled from "styled-components"

const Pokemoncard = styled.div`
 display: flex;
  box-shadow: 4px 4px 4px (0, 0, 0, 0.25);
  border-radius: 3px;
`;
const PokemonImageContainer = styled.div`
padding: 0px 5px;
`;
const PokemonImage = styled.img`
  width: 70px;
  height: 70px;
  margin-right: 10px;
`;
const CardBody = styled.div`
 display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 10px 10px 0px;
  flex: 1;
`;
const CardTop = styled.div`
 display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
const CardBottom = styled.div`
 display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Pokemon = (props) => {
    const {pokemon} = props
    return (
    <Pokemoncard>
        <PokemonImageContainer>
            <PokemonImage alt={pokemon.name} src={pokemon.sprites.front_default} />
        </PokemonImageContainer>
        <CardBody>
            <CardTop>
                <h3>{pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </CardTop>
            <CardBottom>
            <PokemonType>
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index} className="pokemon-type-text">{type.type.name}</div>
                    )
                })}
            </PokemonType>
            </CardBottom>
        </CardBody>
        </Pokemoncard>)
}

export default Pokemon;