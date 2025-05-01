const pokemonServices = {};

// this gets up to 20 pokemons we but we can change offset to 0 and limit to 1302
// This would require pagination to avoid making the web so slow
pokemonServices.getSomePokemons = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

// gets a specific pokemon based on id
pokemonServices.getOnePokemon = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon/' + id);
        if (!resp.ok) throw new Error('Error fetching one pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);
    }
}

// gets description of the pokemon based on id
pokemonServices.getDescription = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/characteristic/' + id);
        if (!resp.ok) throw new Error('Error fetching description')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

// gets the species information based on id
pokemonServices.getSpecies = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/pokemon-species/' + id);
        if (!resp.ok) throw new Error('Error fetching species')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

// gets all types of attack 
pokemonServices.getTypes = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type/?offset=0&limit=21');
        if (!resp.ok) throw new Error('Error fetching types of pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

// gets an specific type of attack based on id
pokemonServices.getOneType = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/type/' + id);
        if (!resp.ok) throw new Error('Error fetching one type of pokemon')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

// gets all items
pokemonServices.getItems = async () => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/item');
        if (!resp.ok) throw new Error('Error fetching all items')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

// gets specific item based on id
pokemonServices.getOneItem = async (id) => {
    try {
        const resp = await fetch('https://pokeapi.co/api/v2/item/' + id);
        if (!resp.ok) throw new Error('Error fetching one item')
        const data = await resp.json()
        return data
    } catch (error) {
        console.log(error);

    }
}

export default pokemonServices