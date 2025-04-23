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

pokemonServices.getOnePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

pokemonServices.getDescription = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/characteristic/' + id);
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

pokemonServices.getGender = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/gender/' + id);
        if (!resp.ok) throw new Error('Error fetching all pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}
export default pokemonServices