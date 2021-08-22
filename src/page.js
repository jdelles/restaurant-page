function loadHeader() {
    const header = document.createElement("header");
    
    const name = document.createElement("h1");
    name.textContent = "Impastable Restaurante";
  
    header.appendChild(name);

    // add nav
    const nav = document.createElement("nav"); 
    const list = document.createElement("ul"); 
    const home = document.createElement("li");
    home.textContent = "Home"; 
    const menu = document.createElement("li"); 
    menu.textContent = "Menu"; 
    const contact = document.createElement("li"); 
    contact.textContent = "Contact"; 

    list.appendChild(home);
    list.appendChild(menu); 
    list.appendChild(contact); 

    nav.appendChild(list); 

    header.appendChild(nav); 

    return header;
  }

function loadMain() {
    const main = document.createElement("main"); 

    return main;
}

function loadFooter() {
    const footer = document.createElement("footer"); 


    return footer; 
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader()); 
    content.appendChild(loadMain()); 
    content.appendChild(loadFooter()); 
  }
 
  export default load; 