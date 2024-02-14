// array of name, height, and types of different pokemon
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

// loop to write name, height, and comment on height if greater than 1.5
for (let i = 0; i < pokemonList.length; i++) {
    document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")");
    if (pokemonList[i].height > 1.5) {
        document.write(" - wow, thats big!");
    };
    document.write("<br>");
};