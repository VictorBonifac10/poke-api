const show = document.querySelector('ul')
const btnSearch = document.querySelector('.control-pokedex')
const imgPokemon = document.querySelector('.img-pokemon')

async function showAll() {

    show.innerHTML = ''

    try {
        const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => response.json())
        const pokemons = data.results;

        let index = 0;

        for (const pokemon of pokemons) {
            const res = await fetch(pokemon.url);
            const details = await res.json();

            show.innerHTML += `
                <li>
                    <img class="img-pokemon" src="${details.sprites.front_default}">
                    <p class="name-pokemon">#${details.id} - ${details.name}</p>
                </li>
            `;

            index++;
        }

    } catch (err) {
        console.error('Ocorreu um erro:', err);
    }
}

btnSearch.addEventListener('click', showAll)
