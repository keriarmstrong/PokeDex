console.log('JS connected')
// //create variable to access main starting points-------------------------
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1100'
// const main = document.querySelector('main')
const form = document.querySelector('form')
const search = document.querySelector('input')
let searchValue = search.value

    async function getPokemonData(searchValue){
    await fetch (`${URL}`)
    .then(res => {
        return res.json()})
    .then (data => {
    pokemons = data.results
    const pokemon = (pokemons.find(pokemon => pokemon.name === (search.value).toLowerCase()))
    // console.log(pokemon)
    if(!pokemon){
         {
            alert('Enter a pokemon name\nor\nCheck your spelling')
        }
    } else

    fetch (pokemon.url)
        .then(res1 =>  res1.json())
        .then (data1 => {
           //Retrieve specific data points and set them to variable for reuse----------------------
        const pokedexIndex = (data1.id);
        const art = (data1.sprites.other["official-artwork"].front_default)
        const type1 = (data1.types[0].type.name)
        const weight = `${(data1.weight/10).toFixed(1)} kg`
        const heightRaw = `${((data1.height/10).toFixed(1))} meters`

        console.log(pokedexIndex)
        console.log(art)
        console.log(type1)
        console.log(weight)
        console.log(heightRaw)

        pokemonImg = document.querySelector("#img-container")
        pokemonDetails = document.querySelector('.details')

        pokemonImg.innerHTML = `<img class="img" src=${art} />`
        pokemonDetails.innerHTML = `<h3>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3><ul><li>Index# ${pokedexIndex}</li><li>Height: ${heightRaw}</li><li>Weight: ${weight}</li><li>Type: ${type1}</ul>`
        // main.append(pokemonImg, pokemonDetails)
        form.reset()
        })
    })
}
// let result = pokeData


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    
  return getPokemonData();
  
  
})

// const pokemonData = getPokemonData()

// console.log(pokemonData);


// getPokemonData(searchValue)

// console.log(pokemonData);