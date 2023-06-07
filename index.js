const pokedata = fetch("https://pokeapi.co/api/v2/pokemon/ditto")

pokedata.then(response => {
    const data = response.json();
    return data;
})

.then(data => {
    
})