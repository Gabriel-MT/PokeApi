import axios from "axios"

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 404) {
            return { error: "Pokémon não encontrado" };
        } else {
            console.log("Erro na requisição: ", error);
            return { error: "Ocorreu um erro na requisição" };
        }
    }
}

export const getPokemons = async (limit = 151, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("error: ", error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        console.log("error: ", error)
    }
}