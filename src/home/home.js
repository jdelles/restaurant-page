import fungi from './chef_fungi.png';

function loadHome() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const home = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Welcome to our restaurant"; 

    const paragraph1 = document.createElement("p"); 
    paragraph1.textContent = "Since 2021, we've been serving impastably fun dishes created by Chef Fungi."; 

    const image = document.createElement("img"); 
    image.src = fungi; 
    image.alt = "Chef Fungi At Work"; 

    home.appendChild(intro); 
    home.appendChild(paragraph1); 
    home.appendChild(image); 

    main.appendChild(home); 
}

export default loadHome; 