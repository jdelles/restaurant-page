function loadHome() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const home = document.createElement("div"); 
    home.innerHTML = "<p>Honey, I'm home!</p>"; 
    main.appendChild(home); 
}

export default loadHome; 