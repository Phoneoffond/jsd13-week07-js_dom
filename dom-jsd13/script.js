// Write your demo code here, section by section.
// The HTML file has matching ids/classes for each topic:
//
// 1. Selecting Elements   -> #main-title, .submit-btn, .task
console.log(document.getElementById('main-title'));
console.log(document.getElementsByClassName('submit-btn'));
console.log(document.getElementsByClassName('task'));
// 2. Modifying Content    -> .label, #msg, #card
console.log(document.getElementsByClassName('label')[0].textContent);
const newText = document.getElementsByClassName('label')[0];
newText.textContent = "Rename";
console.log(document.getElementById('msg').textContent);
const newMsg = document.getElementById('msg');
newMsg.textContent = "New message";
console.log(document.getElementById('card').innerHTML);
const newCard = document.getElementById('card');
newCard.innerHTML = "<img src='https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg'>";
// 3. classList            -> #themeBtn, .card

// 4. Create & Remove      -> #addTaskBtn, #resetTasksBtn, #tasks
// 5. Events               -> #click-me, #list, #signupForm, #email, .error

const btn = document.querySelector("#click-me");
let count = 0;
const eventDiv = document.querySelector("#event-div");
btn.addEventListener('click', function(event) {
    eventDiv.innerHTML += `<img width="200px" height="200px" src="https://i.etsystatic.com/20553578/r/il/70f1ba/3258604881/il_570xN.3258604881_7i19.jpg">`;
})
// 6. Pokémon Card Fetcher -> #fetchBtn, #resetBtn, #gallery
const cardImg = document.getElementById("card");
cardImg.innerHTML = `<img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png">`;