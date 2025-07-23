const show = document.querySelector('ul')
const btnSearch = document.querySelector('.control-pokedex')
const imgPokemon = document.querySelector('.img-pokemon')

async function showAll() {

    show.innerHTML = ''

    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json())
        const pokemons = data.results;

        pokemons.forEach(async (pokemon, index) => {

            const res = await fetch(pokemon.url); //pacote (resposta bruta)
            const details = await res.json(); //pacote aberto com os dados (objeto S)

            show.innerHTML += `
                <li>
                    <img class="img-pokemon" src="${details.sprites.front_default}">
                    <p class="name-pokemon">#${index + 1} - ${details.name}</p>
                </li>
            `
        });

    } catch (err) {
        console.error('Ocorreu um erro:', err);
    }
}

btnSearch.addEventListener('click', showAll)
