// returns add pokemon or getAll pokemon. name, height(meter), types (element)
let pokemonRepository = (function () {

    const pokemonList = [];

    // list of buttons showing the names of each pokemon
    function addListItem(pokemon) {
        let ulPokemon = document.querySelector(".pokemon-list");
        let listPokemon = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listPokemon.appendChild(button);
        ulPokemon.appendChild(listPokemon);

        // when button is clicked on then it shows details of the pokemon
        button.addEventListener('click', function () {
            showDetails(pokemon);
        });

    };

    // logs data of pokemon
    function showDetails(pokemon) {
        console.log(pokemon.name);
    }

    // adds new pokemon to array
    function add(pokemon) {
        if (typeof pokemon === 'object' &&
            'name' in pokemon &&
            'height' in pokemon &&
            'types' in pokemon) {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon needs to contain 'name', 'height' and 'type'");
        }
    };

    // return array of pokemon
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

console.log(pokemonRepository.getAll());
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
    pokemonRepository.addListItem(pokemon);
}); 