import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

function loadHeader() {
    const header = document.createElement("header");
    
    const name = document.createElement("h1");
    name.textContent = "Impastable Restaurante";
  
    header.appendChild(name);

    // add nav TODO: onclicks bugged
    const nav = document.createElement("nav"); 
    
    const home = document.createElement("button");
    home.addEventListener("click", () => {
        loadHome();
    });  
    home.textContent = "Home"; 
    
    const menu = document.createElement("button"); 
    menu.addEventListener("click", () => {
        loadMenu();
    });
    menu.textContent = "Menu"; 
    
    const contact = document.createElement("button"); 
    contact.addEventListener("click", () => {
        loadContact();
    });
    contact.textContent = "Contact"; 


    nav.appendChild(home);
    nav.appendChild(menu); 
    nav.appendChild(contact); 

    header.appendChild(nav); 

    return header;
  }

function loadMain() {
    return document.createElement("main");
}

function loadFooter() {
    const footer = document.createElement("footer"); 
    const div = document.createElement("div"); 
    div.innerHTML = '<p>Copyright © <a href="https://www.github.com/jdelles">James Delles</a> 2021</p>'; 

    footer.appendChild(div); 

    return footer; 
}

function load() {
    const content = document.getElementById("content");
    content.appendChild(loadHeader()); 
    content.appendChild(loadMain()); 
    content.appendChild(loadFooter()); 
    loadHome(); 
  }
 
  export default load; 