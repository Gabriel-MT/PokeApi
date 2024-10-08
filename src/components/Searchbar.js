import React, {useState} from "react"
import { searchPokemon } from "../Assets/api"
import styled from "styled-components"

const Input = styled.input`
  padding: 10px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  border: none;
`;
const SearchButton = styled.button`
  background-color: red;
  border: none;
  border-radius: 10px;
  height: 44px;
  color: black;
  padding: 10px 12px;
`;
const SearchbarContainer = styled.div`
  display: flex;
  margin: 0px auto;
  padding: 0 20px;
  align-items: center;
`;
const SearchbarInputContainer = styled.div`
  background-color: white;
  margin-right: 10px;
`;
const Tipo = styled.div`
 display: flex;
  flex-direction: row;
  gap: 5px;
`;
const Searchbar = () => {
    const [search, setSearch] = useState ("bulbasaur")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch (e.target.value)
    }

    const onButtonClickHandler = () => {
    onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        if (result.error) {
            console.log(result.error);
            alert(result.error);
        } else {
            setPokemon(result);
        }
      }

    return (
            <SearchbarContainer>
            <SearchbarInputContainer>
                <Input placeholder="Buscar pokemon" onChange={onChangeHandler}></Input>
            </SearchbarInputContainer>
            <div className="searchbar-btn">
                <SearchButton onClick={onButtonClickHandler}>Buscar</SearchButton>
            </div>
            {pokemon ? (
            <div>
                <div>ID: {pokemon.id}</div>
                <div>Nome: {pokemon.name}</div>
                <div>Peso: {pokemon.weight}</div>
                <Tipo> Type: {
                    pokemon.types.map((obj, index) => {
                        return  <p key={index}>{obj.type.name}</p>
                    })
                    }
                    </Tipo>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            ) : null}
        </SearchbarContainer>
    );
};

export default Searchbar;