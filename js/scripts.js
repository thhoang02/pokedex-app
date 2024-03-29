// returns add pokemon or getAll pokemon. name, height(meter), types (element)
let pokemonRepository = (function () {

    const pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';

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

    // adds new pokemon to array
    function add(pokemon) {
        if (typeof pokemon === 'object') {
            pokemonList.push(pokemon);
        } else {
            console.log("pokemon needs to contain 'name', 'height' and 'type'");
        }
    };

    // return array of pokemon
    function getAll() {
        return pokemonList;
    }

    // takes list from pokeapi website
    function loadList() {
        return fetch(apiUrl).then(function (response) {
            return response.json();
        }).then(function (json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            // Now we add the details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }

    // logs data of pokemon
    function showDetails(pokemon) {
        loadDetails(pokemon).then(function () {
            console.log(pokemon);
        });
    }

    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails
    };
})();

console.log(pokemonRepository.getAll());

// loads list of pokemon from pokemonRepository
pokemonRepository.loadList().then(function () {
    pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});