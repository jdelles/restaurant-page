function loadMenu() {
    const main = document.querySelector("main"); 
    main.innerHTML = ""; 
    const menu = document.createElement("div"); 

    const intro = document.createElement("h2"); 
    intro.textContent = "Our current seasonal options: "; 

    // upgrade idea - convert these to recipe cards
    const list = document.createElement("ul"); 

    const linguini = document.createElement("li"); 
    linguini.textContent = "Linguini a la Luigi with mushroom cream sauce"; 

    const pizza = document.createElement("li"); 
    pizza.textContent = "Plain old boring mushroom pizza - still good!"; 

    const chowder = document.createElement("li"); 
    chowder.textContent = "Wild Mushroom Chowder with leeks. Mmmm"; 

    const dessert = document.createElement("li"); 
    dessert.textContent = "We hope you saved mush-room for dessert!"; 

    list.appendChild(linguini); 
    list.appendChild(pizza); 
    list.appendChild(chowder); 
    list.appendChild(dessert); 

    menu.appendChild(intro); 
    menu.appendChild(list); 

    main.appendChild(menu); 
}

export default loadMenu; 