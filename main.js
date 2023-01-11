// console.log('JS connected')
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1100'

const search = document.querySelector('form')

search.addEventListener('submit', async (e) => {
   e.preventDefault()
    await fetch (`${URL}`)
    .then(res => {
        return res.json()})
    .then (data => {
    pokemons = data.results
      const pokemon = pokemons.find(pokemon => pokemon.name === e.target.input.value)
        fetch (pokemon.url)
        .then(res1 => {
            return res1.json()
        })
        .then (data1 =>{
        const pokedexIndex = (data1.id);
        const art = (data1.sprites.other["official-artwork"].front_default)
        const type = (data1.types)
        console.log(type);
        })
        // for(i=0; i <pokemon.length; i++)


    })
    

})