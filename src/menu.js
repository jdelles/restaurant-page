function loadMenu() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const menu = document.createElement("div"); 
    menu.innerHTML = "<p>What's on the menu?</p>"; 
    main.appendChild(menu); 
}

export default loadMenu; 