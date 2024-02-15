// returns add pokemon or getAll pokemon. name, height(meter), types (element)
let pokemonRepository = (function () {

    let pokemonList = [
        {
            name: 'Bulbasaur',
            height: 0.7,
            types: ['grass', 'poison']
        },
        {
            name: 'Charmander',
            height: 0.6,
            types: ['fire']
        },
        {
            name: 'Charizard',
            height: 1.7,
            types: ['fire', 'flying']
        },
        {
            name: 'Squirtle',
            height: 0.5,
            types: ['water']
        }
    ];

    // adds new pokemon to array
    function add(newPokemon) {
        pokemonList.push(newPokemon);
    }

    // return array of pokemon
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    };
})();

// new pokemon added
pokemonRepository.add(
    {
        name: 'Ekans',
        height: 2.0,
        types: ['poison']
    }
);

// prints pokemon from pokemonRepository with name and height detail
pokemonRepository.getAll().forEach(function (pokemon) {
    document.write(pokemon.name + " (height: " + pokemon.height + ")");
    if (pokemon.height > 1.5) {
        document.write(" - wow, thats big!");
    };
    document.write("<br>");
}); 