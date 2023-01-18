// console.log('JS connected')
//create variable to access main starting points-------------------------
const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1100'
const main = document.querySelector('main')
const search = document.querySelector('form')
const searchValue = search.input.value
const contentArea = document.querySelector('.container')




//Create sumbit event for input/search bar--------------------------
search.addEventListener('submit', async (event) => {
   event.preventDefault()

        await fetch (`${URL}`)
    .then(res => {
        return res.json()})
    .then (data => {
    pokemons = data.results
//standardize user input case sensitivity to match data (lower case)-------------------
    const userInput = (search.input.value).toLowerCase()

//loop through data using find method to find matching value from user input--------------
    const pokemon = (pokemons.find(pokemon => pokemon.name === userInput))
     
        fetch (pokemon.url)
        .then(res1 =>  res1.json())
        .then (data1 => {
//Retrieve specific data points and set them to variable for reuse----------------------
        const pokedexIndex = (data1.id);
        const art = (data1.sprites.other["official-artwork"].front_default)
        const type1 = (data1.types[0].type.name)
        const weight = `${(data1.weight/10).toFixed(1)} kg`
        const heightRaw = `${((data1.height/10).toFixed(1))} meters`
        // const type2 = (data1.types[1].type.name) /*not all pokemon have secondary type need to address */
        

        // main.innerHTML = ""
        

        const pokemonImg = document.createElement('div')
        const pokemonDetails = document.createElement('div')

        pokemonImg.setAttribute('class', 'poke-pic');
        pokemonDetails.setAttribute('class', 'poke-deets')
       
        pokemonImg.innerHTML = `<img class="img" src=${art} />`
        pokemonDetails.innerHTML = `<h3>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3><ul><li>Index# ${pokedexIndex}</li><li>Height: ${heightRaw}</li><li>Weight: ${weight}</li><li>Type: ${type1}</ul>`
        // main.append(pokemonImg, pokemonDetails)
        contentArea.append(pokemonImg, pokemonDetails)

        })
//         .catch(error => 
// alert("Not Found")
//Reset the value in the search bar, and content after the submit event------------------------
    search.reset()
    const picture = document.querySelector('.poke-pic')
        picture.remove()
    const details = document.querySelector('.poke-deets')
        details.remove()
    }) 
    
    
})