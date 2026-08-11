const pokeDiv = document.querySelector("#pokedex");
const findBtn = document.querySelector("#btn-find-pokemon");
const poke_url = 'https://pokeapi.co/api/v2/pokemon/';

Object.assign(findBtn.style, {
        padding: '10px 20px',
        fontSize: '1em',
        cursor: 'pointer',
        border: '0',
        borderRadius: '32px',
        backgroundColor: 'brown',
        color: '#fff',
        margin: '14px 0px',
        boxShadow: '0 4px 12px brown'
});

findBtn.addEventListener('click', () => {
    findPokemon();
})

async function findPokemon() {
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const newRandomPokemon = await fetch(poke_url + randomId);
    const responsePokemon = await newRandomPokemon.json();
    console.log(responsePokemon);



    const div = document.createElement('div');
    const img = document.createElement('img');

    const ID = document.createElement('h2');
    const name = document.createElement('p');
    const type = document.createElement('p');


    findBtn.addEventListener('click', () => {
        div.remove();
    })

    Object.assign(ID.style, {
        color: '#fff',
        fontSize: '1.5em',
        margin: '0',
        padding: '0'
    });

    document.querySelector('body').style.backgroundColor = '#464646';    

    Object.assign(name.style, {
        color: '#fff',
        fontSize: '2em',
        margin: '0 0 16px 0',
        padding: '0',
        overflowWrap: 'break-word',
        wordBreak: 'break-word'
    });

   

    Object.assign(type.style,{
        border:'0',
        borderRadius:'32px'
    })

    let colorType = 'black';
    
  
    Object.assign(div.style, {
        color: '#fff',
        margin: '8px',
        padding: '16px 32px',
        boxShadow: `0 8px 14px color-mix(in srgb, ${colorType} 40%, black)`,
        backgroundColor:colorType,
        borderRadius: '32px',
    });


    img.src = responsePokemon.sprites.front_default;
    img.width = 200;
    img.height = 200;

    ID.textContent = "#" + randomId;

    const rawName = responsePokemon.name;
    const CapitalizeName = rawName.charAt(0).toUpperCase() + rawName.slice(1).toLowerCase();
    name.textContent = CapitalizeName;

    type.textContent = "Type : " +responsePokemon.types[0].type.name;

    div.append(img);
    div.append(ID);
    div.append(type);
    div.append(name);
    div.classList.add(CapitalizeName);

    console.log("Class : " + div.getAttribute('class') + " ---- is Assigned")
    pokeDiv.append(div);
}