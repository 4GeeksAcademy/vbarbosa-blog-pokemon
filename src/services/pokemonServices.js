const pokemonServices = {};

pokemonServices.getAllPokemons = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1302');
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokemonServices.getSomePokemons = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

export default pokemonServices