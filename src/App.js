import React, {useEffect, useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Pokedex from "./components/Pokedex";
import { getPokemonData, getPokemons } from "./Assets/api";


function App() {
  
  const [page, setPage] = useState(0);
  const [totalPages, settotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      });

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      settotalPages(Math.ceil(data.count / itensPerPage))

    } catch (error) {
      console.log("fetchPokemons error", error)
    }
  }
  useEffect(() => {
    fetchPokemons();
  }, [page])

  return (
    <div>
        <Navbar />
        <Searchbar />
        <Pokedex 
        pokemons={pokemons} 
        loading={loading} 
        page={page} 
        setPage={setPage}
        totalPages={totalPages}/>
    </div>
  );
}

export default App;
