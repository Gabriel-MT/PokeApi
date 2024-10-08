import React from "react";
import Pokemon from "./Pokemon";
import Pagination from "../Pages/Pagination";
import styled from "styled-components"

const Pokedexheader = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;
const Pokedexgrid = styled.div`
 display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props;
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages) {
            setPage(page+1)
        }
    }
    return (
        <div>
            <Pokedexheader>
                <h1>Pokedex</h1>
                <Pagination 
                page={page+1}
                totalPages={totalPages}
                onLeftClick={onLeftClickHandler}
                onRightClick={onRightClickHandler}
                />
           </Pokedexheader>
            {loading ? (
                <div>Carregando, um momento...</div>) : 
                (<Pokedexgrid>
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon}/>
                 );
             })}
        </Pokedexgrid>
        )}
     </div>
    );
};

export default Pokedex; 