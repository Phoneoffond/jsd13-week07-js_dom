const progressX = document.getElementById('progressX');
const btnPokemon = document.getElementById('btn-pokemon');

btnPokemon.addEventListener('click', async () => {

    const findPokemon = await fetch('https://pokeapi.co/api/v2/pokemon/67');
     const data = await findPokemon.json();
     console.log(data);
    progressX.innerHTML = `${data.name} is a ${data.name} <img src="${data.sprites.front_default}" >`;
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = data.sprites.front_default;
    div.append(img);
    progressX.append(div);
    });
                  