// console.log('JS connected')

const main = document.querySelector('main')
const search = document.querySelector('form')
const searchValue = search.input.value

const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=1100'

const userInput = (search.input.value).toLowerCase()

//Create sumbit|fetch event for input/search bar--------------------------

    // const getPokeData = () => {
    fetch (`${URL}`)
    .then(res => {
        return res.json()})
    .then (data => {
    pokemons = data.results
    
    
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
        
        console.log(pokedexIndex);
        console.log(art);
        console.log(type1);
        console.log(heightRaw);
        console.log(weight)
        console.log(pokemon.name)
        console.log(search.input.value)
        
    search.addEventListener('submit',  (event) => {
            event.preventDefault()
            
        main.innerHTML = ""
        const pokemonImg = document.createElement('div')
        const pokemonDetails = document.createElement('div')

        pokemonImg.setAttribute('class', 'img');
        pokemonDetails.setAttribute('class', 'details')
       
        pokemonImg.innerHTML = `<article><img src=${art} /></article>`
        pokemonDetails.innerHTML = `<h3>${pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1)}</h3><ul><li>Index# ${pokedexIndex}</li><li>Height: ${heightRaw}</li><li>Weight: ${weight}</li><li>Type: ${type1}</ul>`
        main.append(pokemonImg, pokemonDetails)
        
        // if (pokemon.name !== event.target.input.value){
        // alert("The pokemon does Not exist \n please check your spelling");
        // }
    
        // search.reset()
        

        })
//         .catch(error => 
// alert("Not Found")
//     )
    search.reset()
    }) 
    // alert("Does Not Exist")
})
